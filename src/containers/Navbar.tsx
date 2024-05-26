"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { VkLink } from '@/components/icons/vk'
import { TgLink } from '@/components/icons/tg'
import { YtLink } from '@/components/icons/yt'
import LogoText from '@/components/icons/LogoText'
import SelectLanguage from '@/components/interface/Select'
import { AuthButton, EarnMoneyButton } from '@/components/interface/Buttons'
import { SettingsButton } from '@/components/icons/setting'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname.startsWith('/admin') ? (
        <div></div>
      ) : (
        < div className="flex flex-col" >
          <nav className="fixed flex flex-col justify-center top-0 left-0 bottom-0 bg-[#0A0D1D] space-y-6 pl-3 pr-3">
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
          <nav className="flex flex-row justify-between items-center px-12 pt-8 ml-32">
            <Link href='/'>
              <LogoText />
            </Link>
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-row items-center justify-between gap-2">
                <VkLink />
                <TgLink />
                <YtLink />
              </div>
              <div className='flex flex-row gap-7'>
                <SelectLanguage />
                <AuthButton />
                <SettingsButton />
                <EarnMoneyButton />
              </div>
            </div>
          </nav>
        </div >
      )
      }
    </>
  )
}

export default Navbar
