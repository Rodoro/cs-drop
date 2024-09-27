"use client"
import Link from 'next/link'
import React, { ButtonHTMLAttributes, useState } from 'react'
import AuthIcon from '../icons/auth'
import style from './Buttons.module.css'
import { ModalAuth } from './Modal'
import { useTranslation } from '@/hook/useLanguageStore'

const AuthButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getTranslation } = useTranslation();
    return (
        <div className="min-h-full cursor-pointer">
            <div onClick={() => setIsOpen(true)} className='hover:scale-105 transition-all active:scale-95 select-none flex flex-row justify-center items-center self-stretch px-3 w-[10.25rem] py-4 rounded-[0.625rem] bg-[#7e50ff] gap-1  shadow-[0_0_24px_0_rgba(139,50,252,0.75)]'>
                <AuthIcon />
                <div className="text-white text-[.8125rem] font-medium leading-[normal]">{getTranslation('components.interface.button.auth')}</div>
            </div>
            <ModalAuth visible={isOpen} setVisible={setIsOpen} />
        </div>

    )
}

const EarnMoneyButton = () => {
    const { getTranslation } = useTranslation();
    return (
        <Link href={'/referral'} className='hover:scale-105 transition-all active:scale-95 select-none h-auto flex flex-row justify-center items-center rounded-2xl p-0.5 shadow-[0_10px_79px_0_rgba(146,105,213,0.20)] bg-gradient-to-r from-[#1F79FF] via-[#6A12FA] to-[#B8A6FF]'>
            <span className='flex flex-row justify-center items-center rounded-2xl bg-[#1E1C41] gap-2 px-8 py-4 w-full h-full'>
                <div className="text-gray-50 text-center text-sm font-semibold leading-[normal]">{getTranslation('components.interface.button.earnMoney')}</div>
                <svg width={11} height={11} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96918 1.0893C8.96241 0.744001 8.677 0.469567 8.3317 0.476337L2.70467 0.586671C2.35937 0.593441 2.08493 0.878853 2.0917 1.22416C2.09847 1.56946 2.38389 1.84389 2.72919 1.83712L7.73099 1.73905L7.82906 6.74085C7.83583 7.08615 8.12125 7.36059 8.46655 7.35381C8.81185 7.34704 9.08628 7.06163 9.07951 6.71633L8.96918 1.0893ZM0.977907 9.66448L8.79473 1.53499L7.89319 0.66813L0.0763681 8.79762L0.977907 9.66448Z" fill="white" />
                </svg>
            </span>
        </Link>
    )
}

const GradientButton = ({ children, ...props }: any) => {
    return (
        <div className='w-full h-full flex flex-row justify-center items-center rounded-lg lg:rounded-2xl p-0.5 shadow-[0_10px_79px_0_rgba(146,105,213,0.20)] bg-gradient-to-r from-[#1F79FF] via-[#6A12FA] to-[#B8A6FF]'>
            <div {...props} className="h-full w-full flex justify-center items-center gap-2 pl-2 pr-2 rounded-lg lg:rounded-2xl bg-[#262470]" style={{ backdropFilter: "blur(16.122806549072266px)" }}>
                <div className="h-full w-full py-1 flex justify-center items-center gap-1 text-gray-50 text-center text-[.8125rem] font-semibold leading-[normal]">
                    {children}
                </div>
            </div >
        </div>
    )
}

const GradientButton2 = ({ children, ...props }: any) => {
    return (
        <div {...props} className='cursor-pointer flex flex-row gap-2 w-full h-full py-5 items-center justify-center rounded-2xl shadow-[0_10px_79px_0_rgba(146,105,213,0.20)]' style={{ border: "2px solid transparent", background: "linear-gradient(0deg,rgba(17, 22, 45, 1),rgba(17, 22, 45, 1)) padding-box, linear-gradient(90deg,rgba(31, 161, 255, 0.3),rgba(106, 18, 250, 0.3),rgba(184, 166, 255, 0.3)) border-box" }} >
            {children}
        </div >
    )
}

const PurpurButon = ({ children, ...props }: any) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props} className='cursor-pointer h-full w-full flex flex-row justify-center items-center self-stretch rounded-[0.625rem] bg-[#7e50ff] gap-1 border-[1px] border-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)] hover:shadow hover:border-[#7e50ff]/[.0]' style={{ ...(hover && { background: "linear-gradient(170deg,rgba(34, 39, 110, 1),rgba(34, 39, 110, 1)) padding-box, linear-gradient(170deg,rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0)) border-box" }) }}>
            <div className="text-white text-[.8125rem] font-medium leading-[normal] justify-center items-center flex flex-row gap-1 py-4">
                {children}
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

export { AuthButton, EarnMoneyButton, GradientButton, PurpurButon, PurpurButonNav, GradientButton2 }