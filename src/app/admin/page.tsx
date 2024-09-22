"use client"
import React from 'react'
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";

const page = () => {
    return (
        <div className="flex flex-row justify-end m-6 mt-20 md:mt-8">
            <Button onClick={() => { authService.logout(); window.location.reload() }}><p className = 'mr-[10px]'>Exit</p><FaDoorOpen/></Button>
        </div>
    )
}

export default page
