/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const ChekToken = () => {
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.token.error === "RefreshAccessTokenError") {
            router.push('/login')
        }
    }, [session]);
    
    return (
        <div />
    )
}

export default ChekToken
