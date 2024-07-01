import { getAccessToken, getAccessTokenAdmin, removeFromStorage } from "@/services/auth/auth.helper";
import { authService } from "@/services/auth/auth.services";
import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
    // TODO:Вынести в env
    baseURL: 'http://95.165.94.222:8090/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

export const errorCatch = (error: any): string => {
    const message = error?.response?.data?.message

    return message
        ? typeof error.response.data.message == 'object'
            ? message[0]
            : message
        : error.message
}

const axiosClassic = axios.create({ ...options, withCredentials: true })

const axiosWithAuthUser = axios.create({ ...options, withCredentials: true })

axiosWithAuthUser.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken)
        config.headers.Authorization = `${accessToken}`

    return config
})

axiosWithAuthUser.interceptors.response.use(
    config => config,
    async error => {
        const origionRequest = error.config

        if (
            (error?.response?.status == 401 ||
                errorCatch(error) == 'jwt expired' ||
                errorCatch(error) == 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            origionRequest._isRetry = true
            try {
                await authService.getNewTokens()
                return axiosWithAuthUser.request(origionRequest)
            } catch (error) {
                if (errorCatch(error) == 'jwt expired') removeFromStorage()
            }
        }
        throw error
    }
)


const axiosWithAuthAdmin = axios.create({ ...options, withCredentials: true })

axiosWithAuthAdmin.interceptors.request.use(config => {
    const accessToken = getAccessTokenAdmin()

    if (config?.headers && accessToken)
        config.headers.Authorization = `${accessToken}`

    return config
})

axiosWithAuthAdmin.interceptors.response.use(
    config => config,
    async error => {
        const origionRequest = error.config

        if (
            (error?.response?.status == 401 ||
                errorCatch(error) == 'jwt expired' ||
                errorCatch(error) == 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            origionRequest._isRetry = true
            try {
                await authService.getNewTokensAdmin()
                return axiosWithAuthAdmin.request(origionRequest)
            } catch (error) {
                if (errorCatch(error) == 'jwt expired') removeFromStorage()
            }
        }
        throw error
    }
)

export { axiosClassic, axiosWithAuthUser, axiosWithAuthAdmin }