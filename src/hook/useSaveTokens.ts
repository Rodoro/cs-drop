"use client"
import { axiosWithAuthUser } from '@/api/intreceptors';
import { saveTokensStorage } from '@/services/auth/auth.helper';
import { useQuery } from '@tanstack/react-query';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react'

const getData = async () => {
    return await axiosWithAuthUser.get('/ui/users/me');
}

const useSaveTokens = () => {
    const queryParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const accessToken = queryParams.get('accessToken');
        const refreshToken = queryParams.get('refreshToken');

        if (accessToken && refreshToken) {
            saveTokensStorage(accessToken, refreshToken);
        }
        router.push('/')

    }, [queryParams]);

    // const { data } = useQuery({
    //     queryKey: ['profile'],
    //     queryFn: getData,
    //     select: data => data.data,
    // })
}

export default useSaveTokens
