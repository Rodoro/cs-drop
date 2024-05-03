import { Account, User as AuthUser, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(token: any) {
    try {
        // const url =
        //     "https://oauth2.googleapis.com/token?" +
        //     new URLSearchParams({
        //         client_id: process.env.GOOGLE_CLIENT_ID,
        //         client_secret: process.env.GOOGLE_CLIENT_SECRET,
        //         grant_type: "refresh_token",
        //         refresh_token: token.refreshToken,
        //     })

        // const response = await fetch(url, {
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     method: "POST",
        // })

        // const refreshedTokens = await response.json()

        // if (!response.ok) {
        //     throw refreshedTokens
        // }

        // return {
        //     ...token,
        //     accessToken: refreshedTokens.access_token,
        //     accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
        //     refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        // }

    } catch (e) {
        console.log(e)

        return {
            ...token,
            error: "RefreshAccessTokenError",
        }
    }
}

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            credentials: {
                email: { label: "Name", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials: any) {
                try {
                    const res = await fetch("http://95.165.94.222:8090/api/v1/admin/staff/login", {
                        method: 'POST',
                        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
                        headers: { "Content-Type": "application/json" }
                    })
                    let user = await res.json()

                    if (res.ok && user) {
                        return user
                    }
                    console.log(0)
                    return null
                } catch (error: any) {
                    throw new Error(error);
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }: any) {
            if (user) {
                token.accessToken = user.result.accessToken
                token.accessTokenExpires = Date.now() + 900 * 1000
                token.refreshToken = user.result.refreshToken
            }

            if (Date.now() < token.accessTokenExpires) {
                return token
            }
            return refreshAccessToken(token)
        },
        async session(session: any, token: any) {
            if (token) {
                session.user = token.user
                session.accessToken = token.accessToken
                session.error = token.error
            }

            return session
        },
    }
}