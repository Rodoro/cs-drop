import { Account, User as AuthUser, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

            //if (Date.now() < token.accessTokenExpires) {
                return token
            //}
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