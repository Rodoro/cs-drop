import { axiosClassic } from "@/api/intreceptors";
import { IAuthResponseAdmin, ILogForm, IUserJWT } from "@/types/auth.types";
import { getAccessToken, getRefreshToken, getRefreshTokenAdmin, getUserIdByToken, getUserIdByTokenAdmin, removeFromStorage, saveTokensAdminStorage, saveTokensStorage } from "./auth.helper";
import { jwtDecode } from "jwt-decode";

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken',
    'ACCESS_TOKEN_ADMIN' = 'accessTokenAdmin',
    'REFRESH_TOKEN_ADMIN' = 'refreshTokenAdmin',
}

export const authService = {
    async loginAdmin( data: ILogForm) {
        const response = await axiosClassic.post<IAuthResponseAdmin>(
            `/admin/staff/login`,
            data
        )
        if (response.data.result.accessToken) saveTokensAdminStorage(response.data.result.accessToken, response.data.result.refreshToken)
        return response
    },

    async getNewTokensAdmin() {
        const data = {
            staffId: getUserIdByTokenAdmin(),
            refreshToken: getRefreshTokenAdmin(),
        }
        const response = await axiosClassic.post<IAuthResponseAdmin>(
            'admin/staff/refresh_token',
            data
        )

        if (response.data.result.accessToken) saveTokensAdminStorage(response.data.result.accessToken, response.data.result.refreshToken)

        return response
    },

    async getNewTokens() {

        const response = await axiosClassic.post<IAuthResponseAdmin>(
            'ui/users/refresh_token?UserId=' + getUserIdByToken() + "&RefreshToken=" + getRefreshToken())

        if (response.data.result.accessToken) saveTokensStorage(response.data.result.accessToken, response.data.result.refreshToken)

        return response
    },

    async logout() {
        removeFromStorage()
    }
}