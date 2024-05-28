"use client"
import LogoText from '@/components/icons/LogoText'
import OnlineIcon from '@/components/icons/Online'
import PlayersIcon from '@/components/icons/Players'
import WonIcon from '@/components/icons/Won'
import { TgLink } from '@/components/icons/tg'
import { VkLink } from '@/components/icons/vk'
import { YtLink } from '@/components/icons/yt'
import SelectLanguage from '@/components/interface/Select'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname.startsWith('/admin') ? (
                <div></div>
            ) : (
                <div className='mt-20 flex flex-col gap-11'>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <LogoText />
                            <SelectLanguage />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="opacity-[0.4] text-[#b0acb5] text-sm font-bold leading-[120%] uppercase">Follow us on</div>
                            <VkLink />
                            <TgLink />
                            <YtLink />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-[2.0625rem] pb-[2.0625rem] pl-[5.3125rem] pr-[5.3125rem] rounded-[30px] border border-[#ffffff]/[.30] bg-[#22276e]/[.20]'>
                        <div className='flex flex-row justify-between items-center gap-12'>
                            <OnlineIcon />
                            <PlayersIcon />
                            <WonIcon />
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <div className="flex justify-center items-center gap-1">
                                    <svg width={24} height={23} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.8334 17.5494L16.8304 16.283L18.9182 22.7176L11.8334 17.5494ZM23.3334 9.23245H14.5372L11.8334 0.949707L9.12951 9.23245H0.333374L7.45243 14.3664L4.74855 22.6491L11.8676 17.5152L16.2486 14.3664L23.3334 9.23245Z" fill="#33D679" />
                                    </svg>
                                    <div className="w-[4.1875rem] h-[1.125rem] text-white font-medium leading-[1.625rem]">Trustpilot</div>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <svg width={107} height={21} viewBox="0 0 107 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2003_1604)">
                                            <path d="M20.3334 0.717773H0.333374V20.7178H20.3334V0.717773Z" fill="#33D679" />
                                            <path d="M42 0.717773H22V20.7178H42V0.717773Z" fill="#33D679" />
                                            <path d="M63.6667 0.717773H43.6667V20.7178H63.6667V0.717773Z" fill="#33D679" />
                                            <path d="M85.3334 0.717773H65.3334V20.7178H85.3334V0.717773Z" fill="#33D679" />
                                            <path d="M107 0.717773H87V20.7178H107V0.717773Z" fill="#33D679" />
                                            <path d="M10.3331 14.1969L13.3748 13.4261L14.6456 17.3428L10.3331 14.1969ZM17.3331 9.13444H11.9789L10.3331 4.09277L8.68727 9.13444H3.3331L7.66643 12.2594L6.0206 17.3011L10.3539 14.1761L13.0206 12.2594L17.3331 9.13444Z" fill="white" />
                                            <path d="M31.9998 14.1969L35.0414 13.4261L36.3123 17.3428L31.9998 14.1969ZM38.9998 9.13444H33.6456L31.9998 4.09277L30.3539 9.13444H24.9998L29.3331 12.2594L27.6873 17.3011L32.0206 14.1761L34.6873 12.2594L38.9998 9.13444Z" fill="white" />
                                            <path d="M53.6664 14.1969L56.7081 13.4261L57.9789 17.3428L53.6664 14.1969ZM60.6664 9.13444H55.3123L53.6664 4.09277L52.0206 9.13444H46.6664L50.9998 12.2594L49.3539 17.3011L53.6873 14.1761L56.3539 12.2594L60.6664 9.13444Z" fill="white" />
                                            <path d="M75.3331 14.1969L78.3748 13.4261L79.6456 17.3428L75.3331 14.1969ZM82.3331 9.13444H76.9789L75.3331 4.09277L73.6873 9.13444H68.3331L72.6664 12.2594L71.0206 17.3011L75.3539 14.1761L78.0206 12.2594L82.3331 9.13444Z" fill="white" />
                                            <path d="M96.9998 14.1969L100.041 13.4261L101.312 17.3428L96.9998 14.1969ZM104 9.13444H98.6456L96.9998 4.09277L95.3539 9.13444H89.9998L94.3331 12.2594L92.6873 17.3011L97.0206 14.1761L99.6873 12.2594L104 9.13444Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2003_1604">
                                                <rect width="106.667" height={20} fill="white" transform="translate(0.333374 0.717773)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="w-[3.25rem] h-5 opacity-[0.3] text-white text-xs leading-[1.9375rem]">Excellent</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <div className="flex flex-col justify-center items-center pt-[1.5625rem] pr-[1.5625rem] pb-[1.5625rem] pl-[1.5625rem] w-[5.625rem] h-[5.625rem] rounded-[28.124998092651367px] bg-[#371D3D]/[.30]">
                                    <div className="flex flex-col justify-center items-center gap-2.5 w-16 h-16 rounded-[1.25rem] border-2 border-[#ff5959]/[.30] top-[0.8125rem] bg-[#6e2222]/[.30] flex-shrink-0 text-[#ff5959] text-lg font-semibold leading-[1.625rem]">
                                        18+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-start gap-3">
                            <div className="opacity-[0.8] text-white text-center font-semibold leading-[normal]">© 2020-2024 Mel’s Bar</div>
                            <div className="opacity-50 text-white leading-[140%]">Experience the future of storytelling.</div>
                        </div>
                        <div className="flex flow-row items-start gap-9">
                            <div className="flex flex-col items-start gap-4">
                                <div className="opacity-50 text-white leading-[140%]">Support</div>
                                <div className="opacity-50 text-white leading-[140%]">Privacy Policy</div>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className="opacity-50 text-white leading-[140%]">Contact us</div>
                                <div className="opacity-50 text-white leading-[140%]">User agreement</div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Footer
