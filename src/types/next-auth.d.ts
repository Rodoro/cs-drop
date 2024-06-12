import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  interface Session {
    user : {
      id: string | undefined | null,
    }
    token: {
      accessToken: string | undefined | null,
      error: string | undefined | null,
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: {
      accessToken: string | undefined | null,
      error: string | undefined | null,
    } & DefaultSession["user"]
  }
}