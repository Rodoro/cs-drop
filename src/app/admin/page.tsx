"use client"
import React from 'react'
import Button from '@/components/interface/Button'
import ButtonExit from '@/components/interface/admin/ButtonExit';
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import { BsListNested } from "react-icons/bs";

const page = () => {
    return (
        <div className="flex flex-row justify-end  ">
            <div className = "flex justify-end">
                <ButtonExit className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }} />
                {/* //FIX: Перенести в лояут и сделать как компонент  */}
            </div>
        </div>
    )
}

export default page
