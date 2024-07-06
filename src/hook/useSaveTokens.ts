"use client";
import { saveTokensStorage } from '@/services/auth/auth.helper';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react'

const useSaveTokens = () => {
    const queryParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const accessToken = queryParams.get('accessToken');
        const refreshToken = queryParams.get('refreshToken');

        if (accessToken && refreshToken) {
            refreshToken.replace(/%20/g, '+')
            saveTokensStorage(accessToken, refreshToken);
        }
        router.push('/')

    }, [queryParams, router]);
}

export default useSaveTokens
