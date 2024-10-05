"use client"
import React from 'react'
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import { BsListNested } from "react-icons/bs";

const page = () => {
    return (
        <div className="flex flex-row xl:justify-end m-6 mt-20 md:mt-8">
            <div className = "flex justify-end">
                <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
                    <p className='mr-[10px]'>Exit</p>
                    <FaDoorOpen className=''/>
                </Button>
            </div>
        </div>
    )
}

export default page
