"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { VkLink } from '@/components/icons/vk'
import { TgLink } from '@/components/icons/tg'
import { YtLink } from '@/components/icons/yt'
import LogoText from '@/components/icons/LogoText'

import { AuthButton, EarnMoneyButton } from '@/components/interface/Buttons'
import { SettingsButton } from '@/components/icons/setting'
import { SelectLanguage, SelectPage } from '@/components/interface/Select'
import ChatIcon from '@/components/icons/chat'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname.startsWith('/admin') ? (
        <div></div>
      ) : (
        < div className="flex flex-col" >
          <nav className="hidden xl:flex fixed flex-col justify-center top-0 left-0 bottom-0 bg-[#0A0D1D] space-y-6 pl-3 pr-3">
            <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? '' : 'opacity-40'}`}>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/img/interface/nav/cases.png"
                  alt="Cases"
                  width={pathname === '/' ? '100' : '60'}
                  height={pathname === '/' ? '100' : '60'}
                />
                {pathname === '/' ? (
                  <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
                  </svg>
                ) : (
                  <></>
                )}
                <div className="absolute w-16 h-16 -z-10 bg-[#7643ff] blur-xl" />
              </div>
              Cases
            </Link>
            <Link href="/match" className={`flex flex-col items-center ${pathname === '/match' ? '' : 'opacity-40'}`}>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/img/interface/nav/match.png"
                  alt="Match"
                  width={pathname === '/match' ? '100' : '60'}
                  height={pathname === '/match' ? '100' : '60'}
                />
                {pathname === '/match' ? (
                  <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
                  </svg>
                ) : (
                  <></>
                )}
                <div className="absolute w-9 h-9 -z-10 bg-[#7643ff] blur-xl" />
              </div>
              Match
            </Link>
            <Link href="/casino" className={`flex flex-col items-center ${pathname === '/casino' ? '' : 'opacity-40'}`}>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/img/interface/nav/casino.png"
                  alt="Casino"
                  width={pathname === '/casino' ? '100' : '70'}
                  height={pathname === '/casino' ? '100' : '70'}
                />
                {pathname === '/casino' ? (
                  <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
                  </svg>
                ) : (
                  <></>
                )}
                <div className="absolute w-9 h-9 -z-10 bg-[#7643ff] blur-xl" />
              </div>
              Casino
            </Link>
          </nav>
          <nav className="hidden xl:flex flex-row justify-between items-center px-12 pt-8 ml-32 mb-11">
            <Link href='/'>
              <LogoText />
            </Link>
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-row items-center justify-between gap-2">
                <VkLink />
                <TgLink />
                <YtLink />
              </div>
              <div className='flex flex-row gap-7 items-center'>
                <SelectLanguage />
                <AuthButton />
                <SettingsButton />
                <EarnMoneyButton />
              </div>
            </div>
          </nav>
          <nav className="fixed z-40 flex xl:hidden w-full h-24 bg-[#0A0D1D] bottom-0 rounded-t-3xl flex-row items-center justify-between px-4">
            <SelectPage />
            <div className='flex flex-row items-center justify-between gap-3'>
              <div className="h-full flex items-center gap-2 rounded-xl border-[0.84px] border-[#ffffff]/[.10] bg-[#22276e]/[.30] pr-3">
                <div className="flex items-center">
                  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_363_3898)">
                      <path d="M20.2141 26.5889C16.5772 26.5889 13.6291 23.6408 13.6291 20.0039C13.6291 16.367 16.5772 13.4189 20.2141 13.4189C23.851 13.4189 26.7991 16.367 26.7991 20.0039C26.7991 23.6408 23.851 26.5889 20.2141 26.5889ZM20.2141 17.2099L17.4201 20.0039L20.2141 22.7973L23.0074 20.0039L20.2141 17.2099Z" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d_363_3898" x="0.614031" y="0.403887" width="39.2001" height="39.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.50753" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_3898" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_363_3898" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                  <div className="opacity-[0.6] text-white text-[.8125rem] font-medium leading-[normal]">4,468</div>
                </div>
              </div>
              <Link href={''} className="flex items-start rounded-[0.9375rem] border-[1.066px] border-[#ffffff]/[.10] bg-[#6a4aeb]/[.60] justify-center p-2 opacity-[0.9] shadow-[0_0_54px_0_rgba(106,18,250,0.50)]">
                <ChatIcon />
              </Link>
            </div>
          </nav>
        </div >
      )
      }
    </>
  )
}

export default Navbar
