"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PurpurButon } from '@/components/interface/Buttons'

const NotFount = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="absolute top-[-7rem] -z-20 left-8 flex-shrink-0 w-[587px] h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <Image className='mix-blend-plus-lighter mt-20' src={'/img/404.png'} alt={'404'} width={574} height={287} />
            <div className="flex flex-col items-center mt-16">
                <div className="flex flex-col items-center gap-5">
                    <div className="text-white text-[1.5625rem] font-semibold leading-[normal]">Something went wrong...</div>
                    <div className="opacity-50 text-white font-medium leading-[normal]">The page you’re looking for might not exist. Please go back to the main page</div>
                    <Link href={'/'} className='w-72 mt-4'>
                        <PurpurButon>
                            Main page
                        </PurpurButon>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFount
