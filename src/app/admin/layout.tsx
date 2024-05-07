"use client"
import Navbar from '@/containers/admin/Navbar'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const { status: sessionStatus } = useSession();

    if (sessionStatus === "loading") {
        return <h1 className="flex min-h-screen flex-col items-center mt-6">Загрузка...</h1>
    }
    if (sessionStatus === "unauthenticated") {
        router.replace("/login");
    }

    return (
        <section>
            <Navbar />
            {children}
        </section >
    )
}
