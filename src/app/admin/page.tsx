"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import Button from '@/components/interface/Button'

const page = () => {
    return (
        <div className="flex flex-row justify-end m-6 mt-20 md:mt-8">
            <Button onClick={() => { signOut() }}>Выйти</Button>
        </div>
    )
}

export default page
