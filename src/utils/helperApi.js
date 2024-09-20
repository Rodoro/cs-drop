'use server'
import axios from "axios";
import { cookies } from 'next/headers'

export const api = axios.create({
    baseURL: 'http://api.cs.rodoro.ru'
})

export const authSteam = async () => {
    const res = await api.get('/api/v1/ui/steamauth/auth');
    // console.log(res.request.res.responseUrl)
    return res.request.res.responseUrl;
}

export const usersMe = async (accessToken) => {
    const res = await api.get('/api/v1/ui/users/me', {
        headers: {
            'Authorization': accessToken
        }
    });
    // console.log(res.data)
    return res.data;
}

export const refreshTokenUser = async (refreshToken) => {
    const res = await api.post()
    return res.data;
}