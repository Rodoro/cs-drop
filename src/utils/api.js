'use server'
import axios from "axios";
import { cookies } from 'next/headers'

export const api = axios.create({
    baseURL: 'http://95.165.94.222:8090'
})

export const login = async (email, password) => {
    const res = await api.post('/api/v1/admin/staff/login', {email, password});
    cookies().set('Authorization', res.data.result.accessToken);
    return res.data;
}