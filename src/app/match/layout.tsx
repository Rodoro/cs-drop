import NavbarMatch from '@/containers/layout/NavbarMatch'
import React from 'react'

export default function MatchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <NavbarMatch />
            {children}
        </div >
    )
}
