import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { refreshTokenUser, usersMe } from "./helperApi";

async function refreshAccessToken(token: any) {
    try {
        const refreshedTokens = await refreshTokenUser(token.refreshToken);
        console.log(refreshedTokens)
        if (refreshedTokens.data.error.code != 200) {
            throw refreshedTokens
        }
        token.accessToken = 
        token.accessTokenExpires = Date.now() + 900 * 1000
        token.refreshToken = 
        console.log(token)
        return token
    } catch (err) {
        return {
            ...token,
            error: "RefreshAccessTokenError"
        }
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Name", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                try {
                    const data = await usersMe(credentials.access)
                    console.log(data)
                    const user = data.user;
                    user.accessToken = credentials.access;
                    user.refreshToken = credentials.refresh;
                    return user
                } catch (error: any) {
                    throw new Error(error);
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user, account, profile }: any) => {
            if (user) {
                token.uUid = user.uUid;
                token.username = user.username;
                token.steamId = user.steamId;
                token.steamCreated = user.steamCreated;
                token.link = user.link;
                token.image = user.image;
                token.balance = user.balance;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.accessTokenExpires = Date.now() + 900 * 1000;
            }

            if (Date.now() < token.accessTokenExpires) {
                return token
            }
            console.log("refresh")
            return refreshAccessToken(token)
        },
        session: async ({ session, token }: any) => {
            session.user.uUid = token.uUid;
            session.user.username = token.username;
            session.user.steamId = token.steamId;
            session.user.steamCreated = token.steamCreated;
            session.user.link = token.link;
            session.user.image = token.image;
            session.user.balance = token.balance;
            session.user.accessToken = token.accessToken;
            session.user.accessTokenExpires = token.accessTokenExpires;

            return session
        },
    }
})












// import axios from "axios";
// import { Account, User as AuthUser, Session } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// async function refreshAccessToken(token: any) {
//     try {
//         const data = {
//             staffId: token.staffId,
//             refreshToken: token.refreshToken
//         }
//         console.log(token);
//         console.log(data)
//         const res = await axios.post('http://95.165.94.222:8090/api/v1/admin/staff/refresh_token', data);
//         const refreshedTokens = await res.data;
//         console.log(refreshedTokens)
//         // if (res.data.status != 200) {
//         //     throw refreshedTokens
//         // }
//         token.accessToken = refreshedTokens.result.accessToken
//         token.accessTokenExpires = Date.now() + 900 * 1000
//         token.refreshToken = refreshedTokens.result.refreshtoken
//         console.log(token)
//         return token
//     } catch (e: any) {
//         console.log("Error")
//         console.log(e.response.data)

//         return {
//             ...token,
//             error: "RefreshAccessTokenError",
//         }
//     }
// }

// export const authOptions: any = {
//     providers: [
//         CredentialsProvider({
//             id: 'credentials',
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Name", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },

//             async authorize(credentials: any) {
//                 try {
//                     const res: any = await fetch("http://95.165.94.222:8090/api/v1/admin/staff/login", {
//                         method: 'POST',
//                         body: JSON.stringify({ email: credentials.email, password: credentials.password }),
//                         headers: { "Content-Type": "application/json" }
//                     })
//                     let user = await res.json()

//                     if (res.ok && user) {
//                         const res2: any = await fetch("http://95.165.94.222:8090/api/v1/admin/staff/me", {
//                             method: 'GET',
//                             headers: { "Authorization": user.result.accessToken }
//                         })
//                         const resJson = await res2.json()
//                         user.staffId = resJson.result
//                         return user
//                     }
//                     console.log(0)
//                     return null
//                 } catch (error: any) {
//                     throw new Error(error);
//                 }
//             }
//         })
//     ],
//     callbacks: {
//         async jwt({ token, user, account, profile, isNewUser }: any) {
//             if (user) {
//                 token.accessToken = user.result.accessToken
//                 token.accessTokenExpires = Date.now() + 900 * 1000
//                 token.refreshToken = user.result.refreshToken
//                 token.staffId = user.staffId
//             }

//             if (Date.now() < token.accessTokenExpires) {
//                 return token
//             }
//             console.log("refresh")
//             return refreshAccessToken(token)
//         },
//         async session(session: any, token: any) {
//             if (token) {
//                 session.user = token.user
//                 session.accessToken = token.accessToken
//                 session.error = token.error
//             }

//             return session
//         },
//     }
// }