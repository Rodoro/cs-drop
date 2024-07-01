export interface ILogForm {
    email: string
    password: string
}

export interface IAuthResponseAdmin {
    result: {
        accessToken: string
        refreshToken: string
    }
}

export interface IUserJWT {
    nameid: string
}