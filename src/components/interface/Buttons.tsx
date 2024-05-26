import Link from 'next/link'
import React from 'react'
import AuthIcon from '../icons/auth'

const AuthButton = () => {
    return (
        <Link href='#' className='flex flex-row justify-center items-center self-stretch px-3 w-[10.25rem] rounded-[0.625rem] bg-[#7e50ff] gap-1  shadow-[0_0_24px_0_rgba(139,50,252,0.75)]'>
            <AuthIcon />
            <div className="text-white text-[.8125rem] font-medium leading-[normal]">Authorization</div>
        </Link>
    )
}

const EarnMoneyButton = () => {
    return (
        <Link href={'#'} className='flex flex-row justify-center items-center rounded-2xl p-0.5 shadow-[0_10px_79px_0_rgba(146,105,213,0.20)] bg-gradient-to-r from-[#1F79FF] via-[#6A12FA] to-[#B8A6FF]'>
            <span className='flex flex-row justify-center items-center rounded-2xl bg-[#1E1C41] gap-2 px-2 w-40 h-full'>
                <div className="text-gray-50 text-center text-sm font-semibold leading-[normal]">Earn money</div>
                <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.96918 1.0893C8.96241 0.744001 8.677 0.469567 8.3317 0.476337L2.70467 0.586671C2.35937 0.593441 2.08493 0.878853 2.0917 1.22416C2.09847 1.56946 2.38389 1.84389 2.72919 1.83712L7.73099 1.73905L7.82906 6.74085C7.83583 7.08615 8.12125 7.36059 8.46655 7.35381C8.81185 7.34704 9.08628 7.06163 9.07951 6.71633L8.96918 1.0893ZM0.977907 9.66448L8.79473 1.53499L7.89319 0.66813L0.0763681 8.79762L0.977907 9.66448Z" fill="white" />
                </svg>
            </span>
        </Link>
    )
}

export { AuthButton, EarnMoneyButton }