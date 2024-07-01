"use client"
import React from 'react'
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';

const page = () => {
    return (
        <div className="flex flex-row justify-end m-6 mt-20 md:mt-8">
            <Button onClick={() => { authService.logout(); window.location.reload() }}>Выйти</Button>
        </div>
    )
}

export default page
