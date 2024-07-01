import { jwtDecode } from "jwt-decode";
import { EnumTokens } from "./auth.services"
import Cookies from 'js-cookie';
import { IUserJWT } from "@/types/auth.types";

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

export const getRefreshToken = () => {
    const accessToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
    return accessToken || null
}

export const getAccessTokenAdmin = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN_ADMIN)
    return accessToken || null
}

export const getRefreshTokenAdmin = () => {
    const accessToken = Cookies.get(EnumTokens.REFRESH_TOKEN_ADMIN)
    return accessToken || null
}

export const getUserIdByTokenAdmin = () => {
    const accessToken = getAccessTokenAdmin()
    if (accessToken) {
        try {
            const decoded = jwtDecode<IUserJWT>(accessToken);
            return decoded.nameid
        } catch (error) {
            console.error('Ошибка декодирования JWT:', error);
        }
    }
}

export const getUserIdByToken = () => {
    const accessToken = getAccessToken()
    if (accessToken) {
        try {
            const decoded = jwtDecode<IUserJWT>(accessToken);
            return decoded.nameid
        } catch (error) {
            console.error('Ошибка декодирования JWT:', error);
        }
    }
}

export const saveTokensStorage = (accessToken: string, refreshToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        // domain: 'localhost',
        // sameSite: 'strict',
        // expires: 1
    })
    Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
        // domain: 'localhost',
        // sameSite: 'strict',
        // expires: 1
    })
}

export const saveTokensAdminStorage = (accessToken: string, refreshToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN_ADMIN, accessToken, {})
    Cookies.set(EnumTokens.REFRESH_TOKEN_ADMIN, refreshToken, {})
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
    Cookies.remove(EnumTokens.REFRESH_TOKEN)
    Cookies.remove(EnumTokens.ACCESS_TOKEN_ADMIN)
    Cookies.remove(EnumTokens.REFRESH_TOKEN_ADMIN)
}