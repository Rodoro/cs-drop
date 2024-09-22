"use client"
import Navbar from '@/containers/admin/Navbar'
//import Navbar from '@/containers/Navbar';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    // const { status: sessionStatus } = useSession();

    // if (sessionStatus === "loading") {
    //     return <h1 className="flex min-h-screen flex-col items-center mt-6">Загрузка...</h1>
    // }
    // if (sessionStatus === "unauthenticated") {
    //     router.replace("/login");
    // }

    return (
        <section className='w-full'>
            <div className = 'w-[511px] h-[511px] rounded-full bg-[#821FFF] absolute z-[-1] top-[585px] left-[1181px] blur-[130px] opacity-25'></div>
            <div className = 'w-[511px] h-[511px] rounded-full bg-[#C51FFF] absolute z-[-1] top-[-114px] left-[-76px] blur-[130px] opacity-25'></div>
            <Navbar />
            {children}
        </section >
    )
}
