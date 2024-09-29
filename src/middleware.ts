import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth/auth.services";

export async function middleware(request: NextRequest, response: NextResponse) {

    const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)
    if (!accessToken && configUser.some(route => request.url.includes(route))) {
    return NextResponse.redirect(new URL('/404', request.url))
    }

    const accessTokenAdmin = request.cookies.get(EnumTokens.ACCESS_TOKEN_ADMIN)
    if (!accessTokenAdmin && configAdmin.some(route => request.url.includes(route))) {
        return NextResponse.redirect(new URL('/404', request.url))
    }
}

export const configUser = ['/profile']
export const configAdmin = ['/admin', '/admin/:path']