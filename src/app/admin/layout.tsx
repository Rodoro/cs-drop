import CheckAuth from '@/containers/admin/CheckAuth'
import Navbar from '@/containers/admin/Navbar'
import React from 'react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <CheckAuth>
                <Navbar />
                {children}
            </CheckAuth>
        </section >
    )
}
