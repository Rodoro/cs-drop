"use client"
import { signIn } from '@/utils/authOptions';
import { login } from '@/utils/login';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

const useSaveTokens = () => {
    const queryParams = useSearchParams();

    useEffect(() => {
        const accessToken = queryParams.get('accessToken');
        const refreshToken = queryParams.get('refreshToken');

        if (accessToken && refreshToken) {
            login(accessToken, refreshToken)
        }

    }, [queryParams]);
}

export default useSaveTokens
