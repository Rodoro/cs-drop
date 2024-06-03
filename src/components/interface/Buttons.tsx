"use client"
import Link from 'next/link'
import React, { ButtonHTMLAttributes, useState } from 'react'
import AuthIcon from '../icons/auth'
import style from './Buttons.module.css'
import { ModalAuth } from './Modal'

const AuthButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="min-h-full">
            <Link onClick={() => setIsOpen(true)} href='#' className='flex flex-row justify-center items-center self-stretch px-3 w-[10.25rem] py-4 rounded-[0.625rem] bg-[#7e50ff] gap-1  shadow-[0_0_24px_0_rgba(139,50,252,0.75)]'>
                <AuthIcon />
                <div className="text-white text-[.8125rem] font-medium leading-[normal]">Authorization</div>
            </Link>
            <ModalAuth visible={isOpen} setVisible={setIsOpen} />
        </div>

    )
}

const EarnMoneyButton = () => {
    return (
        <Link href={'#'} className='h-auto flex flex-row justify-center items-center rounded-2xl p-0.5 shadow-[0_10px_79px_0_rgba(146,105,213,0.20)] bg-gradient-to-r from-[#1F79FF] via-[#6A12FA] to-[#B8A6FF]'>
            <span className='flex flex-row justify-center items-center rounded-2xl bg-[#1E1C41] gap-2 px-8 py-4 w-full h-full'>
                <div className="text-gray-50 text-center text-sm font-semibold leading-[normal]">Earn money</div>
                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96918 1.0893C8.96241 0.744001 8.677 0.469567 8.3317 0.476337L2.70467 0.586671C2.35937 0.593441 2.08493 0.878853 2.0917 1.22416C2.09847 1.56946 2.38389 1.84389 2.72919 1.83712L7.73099 1.73905L7.82906 6.74085C7.83583 7.08615 8.12125 7.36059 8.46655 7.35381C8.81185 7.34704 9.08628 7.06163 9.07951 6.71633L8.96918 1.0893ZM0.977907 9.66448L8.79473 1.53499L7.89319 0.66813L0.0763681 8.79762L0.977907 9.66448Z" fill="white" />
                </svg>
            </span>
        </Link>
    )
}

const GradientButton = ({ children, ...props }: any) => {
    return (
        <div className='flex flex-row justify-center items-center rounded-2xl p-0.5 shadow-[0_10px_79px_0_rgba(146,105,213,0.20)] bg-gradient-to-r from-[#1F79FF] via-[#6A12FA] to-[#B8A6FF]'>
            <div {...props} className="h-full w-full flex justify-center items-center gap-2 pl-2 pr-2 p-3 rounded-2xl bg-[#262470]" style={{ boxShadow: "0px 10.311px 79.314px 0px rgba(146, 105, 213, 0.20)", backdropFilter: "blur(16.122806549072266px)" }}>
                <div className="h-full w-full py-1 flex justify-center items-center gap-1 text-gray-50 text-center text-[.8125rem] font-semibold leading-[normal]">
                    {children}
                </div>
            </div >
        </div>
    )
}

const PurpurButon = ({ children, ...props }: any) => {
    return (
        <div className={style.purpurButon + ' flex flex-row justify-center items-center rounded-[0.625rem] shadow-[0_0_24px_0_rgba(139,50,252,0.75)] p-0.5 bg-[#7e50ff] hover:bg-[#22276e] hover:shadow-[null]'}>
            <div {...props} className='h-full w-full flex flex-row justify-center items-center self-stretch rounded-[0.625rem] bg-[#7e50ff] gap-1 hover:bg-[#22276e]'>
                <div className="text-white text-[.8125rem] font-medium leading-[normal] justify-center items-center py-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

const PurpurButonNav = ({ children, ...props }: any) => {
    return (
        <div {...props} className='h-full w-full flex flex-row justify-start items-center self-stretch rounded-[0.625rem] bg-[#22276e] gap-1 hover:bg-[#7e50ff] hover:shadow-[0_0_24px_0_rgba(139,50,252,0.75)]'>
            <div className="text-white text-[.8125rem] font-medium leading-[normal] justify-start items-center py-5 pl-6 flex flex-row gap-2">
                {children}
            </div>
        </div>
    )
}

export { AuthButton, EarnMoneyButton, GradientButton, PurpurButon, PurpurButonNav }