"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { VkLink } from '@/components/icons/vk'
import { TgLink } from '@/components/icons/tg'
import { YtLink } from '@/components/icons/yt'
import LogoText from '@/components/icons/LogoText'

import { AuthButton, EarnMoneyButton, PurpurButonNav } from '@/components/interface/Buttons'
import { SettingsButton } from '@/components/icons/setting'
import { SelectLanguage, SelectPage } from '@/components/interface/Select'
import ChatIcon from '@/components/icons/chat'
import Logo from '@/components/icons/Logo'
import { useTranslation } from '@/hook/useLanguageStore'
import SupportVidget from '@/components/SupportVidget'
import useProfile from '@/hook/useProfile'
import Profile from '@/components/common/Profile'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname()
  const { getTranslation } = useTranslation();
  const user = useProfile()
  return (
    <>
      {pathname.startsWith('/admin') ? (
        <div></div>
      ) : (
        < div className="flex flex-col" >
          <nav className="hidden xl:flex fixed flex-col justify-center top-0 left-0 bottom-0 w-[124px] transition-all bg-[#0A0D1D] pl-3 pr-3">
            <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? '' : 'opacity-40'} ` + (pathname === '/' ? '' : 'py-[20px]')}>
              <div className={"relative flex flex-col items-center justify-center "}>
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
              {getTranslation('nav.cases')}
            </Link>
            <Link href="/match" className={`flex flex-col items-center ${pathname.startsWith('/match') ? '' : 'opacity-40'} ` + (pathname.startsWith('/match') ? '' : 'py-[20px]')}>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/img/interface/nav/match.png"
                  alt="Match"
                  width={pathname.startsWith('/match') ? '100' : '60'}
                  height={pathname.startsWith('/match') ? '100' : '60'}
                />
                {pathname.startsWith('/match') ? (
                  <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
                  </svg>
                ) : (
                  <></>
                )}
                <div className="absolute w-9 h-9 -z-10 bg-[#7643ff] blur-xl" />
              </div>
              {getTranslation('nav.match')}
            </Link>
            <Link href="/casino" className={`flex flex-col items-center ${pathname === '/casino' ? '' : 'opacity-40'} ` + (pathname === '/casino' ? '' : 'py-[20px]')}>
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
              {getTranslation('nav.casino')}
            </Link>
          </nav>
          <nav className="hidden xl:flex flex-row justify-between items-center px-12 pt-8 ml-32 mb-11">
            <Link href='/'>
              <LogoText />
            </Link>
            <div className="flex flex-row items-center justify-between gap-6">
              <div className="flex flex-row items-center justify-between gap-4">
                <VkLink />
                <TgLink />
                <YtLink />
              </div>
              <div className='flex flex-row gap-7 items-center'>
                <SelectLanguage />
                {user ?
                  <>
                    <Profile images={user.image} />
                    <SettingsButton />
                    <EarnMoneyButton />
                  </> :
                  <AuthButton />
                }
              </div>
            </div>
          </nav>
          <nav className={(isOpen ? "" : "invisible") + " fixed z-40 w-screen flex xl:hidden flex-row justify-between items-center pt-6 pb-4 px-3 mb-7"} >
            <Link href={'/'}>
              <Logo />
            </Link>
            <div className='flex flex-row gap-3'>
              {user ?
                <Profile images={user.image} /> :
                <AuthButton />
              }
              <SettingsButton />
              <div className="cursor-pointer flex flex-col flex-shrink-0 justify-center items-end gap-1.5 w-[1.375rem]" onClick={() => setIsOpen(!isOpen)}>
                <svg width={24} height={3} viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 0.134766C1.24061 0.134766 0.625 0.750374 0.625 1.50977C0.625 2.26916 1.24061 2.88477 2 2.88477V0.134766ZM2 2.88477H24V0.134766H2V2.88477Z" fill="white" />
                </svg>
                <svg width={18} height={3} viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04401 0.115234C1.28461 0.115234 0.669006 0.730843 0.669006 1.49023C0.669006 2.24963 1.28461 2.86523 2.04401 2.86523L2.04401 0.115234ZM2.04401 2.86523L18.0001 2.86523L18.0001 0.115233L2.04401 0.115234L2.04401 2.86523Z" fill="white" />
                </svg>
              </div>
            </div>
          </nav>
          <div className={"xl:hidden w-screen h-32"} />
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
                  {/* TODO: Привязка количества валюты, по умалчанию 0 */}
                  <div className="opacity-[0.6] text-white text-[.8125rem] font-medium leading-[normal]">4,468</div>
                </div>
              </div>
              <Link href={''} className="flex items-start rounded-[0.9375rem] p-[1px] justify-center shadow-[0_0_54px_0_rgba(106,18,250,0.50)] bg-[linear-gradient(150deg,rgba(81,60,169,1),rgba(76,51,172,1))]">
                <div className='w-full h-full p-2 bg-[#4B35A8] rounded-[0.9375rem]'>
                  <ChatIcon />
                </div>
              </Link>
            </div>
          </nav>
          <div className={isOpen ? "hidden" : "flex" + " fixed z-30 w-screen h-screen bg-[#0A0D1D]/[.80] flex-col justify-start"}>
            <div className="flex xl:hidden flex-row justify-between items-center pt-6 mb-11 mx-3">
              <Link href={'/'}>
                <Logo />
              </Link>
              <div className='flex flex-row gap-3'>
                {user ?
                  <Profile images={user.image} /> :
                  <AuthButton />
                }
                <SettingsButton />
                <div className="cursor-pointer flex flex-col flex-shrink-0 justify-center items-end gap-1.5 w-[1.375rem]" onClick={() => setIsOpen(!isOpen)}>
                  <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.22192 17.7783L18.7783 2.22197" stroke="white" strokeWidth="2.75" strokeLinecap="round" />
                    <path d="M3.22192 2.22168L18.7783 17.778" stroke="white" strokeWidth="2.75" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-8 gap-y-6 justify-center">
              <SelectLanguage style={{ height: "56px" }} />
              <div className='flex flex-col gap-5'>
                <Link href={''}>
                  <PurpurButonNav>
                    <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2006_8386)">
                        <path d="M17.3333 7.7498V7.85293L19.5114 5.6748C20.1958 4.99043 20.1958 3.88418 19.5114 3.1998L17.0708 0.762305C16.3864 0.0779297 15.2801 0.0779297 14.5958 0.762305L13.3426 2.01543C13.2583 2.00605 13.1708 1.9998 13.0833 1.9998H9.58325C8.42388 1.9998 7.47075 2.8748 7.34575 3.9998H7.33325V7.7498C7.33325 8.44043 7.89263 8.9998 8.58325 8.9998C9.27388 8.9998 9.83325 8.44043 9.83325 7.7498V4.9998H14.8333C16.2145 4.9998 17.3333 6.11855 17.3333 7.4998V7.7498ZM10.8333 5.9998V7.7498C10.8333 8.99355 9.827 9.9998 8.58325 9.9998C7.3395 9.9998 6.33325 8.99355 6.33325 7.7498V4.04355C5.21138 4.2373 4.277 5.05293 3.95825 6.1748L3.44263 7.9748L1.15513 10.2623C0.470752 10.9467 0.470752 12.0529 1.15513 12.7373L3.59575 15.1779C4.28013 15.8623 5.38638 15.8623 6.07075 15.1779L7.24888 13.9998C7.277 13.9998 7.30513 14.0029 7.33325 14.0029H12.3333C13.1614 14.0029 13.8333 13.3311 13.8333 12.5029C13.8333 12.3279 13.802 12.1592 13.7489 12.0029H13.8333C14.6614 12.0029 15.3333 11.3311 15.3333 10.5029C15.3333 10.1029 15.177 9.74043 14.9208 9.47168C15.7239 9.31543 16.3301 8.60918 16.3333 7.75918V7.74668C16.3301 6.78418 15.5489 6.00293 14.5833 6.00293H10.8333V5.9998Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2006_8386">
                          <rect width={20} height={16} fill="white" transform="translate(0.333252)" />
                        </clipPath>
                      </defs>
                    </svg>
                    {getTranslation('nav.partnerships')}
                  </PurpurButonNav>
                </Link>
                <Link href={''}>
                  <PurpurButonNav>
                    <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9363 12.2994C16.2279 11.5911 16.3863 10.8328 16.3863 9.99942C16.3863 9.39942 16.2946 8.82442 16.1363 8.29109C15.5946 8.41609 15.0279 8.48276 14.4363 8.48276C13.2246 8.48406 12.0303 8.19402 10.9542 7.63711C9.87809 7.08019 8.95163 6.27272 8.25293 5.28276C7.50551 7.09123 6.09554 8.54592 4.31126 9.34942C4.27793 9.55775 4.27793 9.78275 4.27793 9.99942C4.27793 10.795 4.43463 11.5828 4.73909 12.3178C5.04356 13.0529 5.48981 13.7207 6.05238 14.2833C7.18854 15.4195 8.7295 16.0577 10.3363 16.0577C11.2113 16.0577 12.0529 15.8661 12.8113 15.5244C13.2863 16.4327 13.5029 16.8827 13.4863 16.8827C12.1196 17.3411 11.0613 17.5661 10.3363 17.5661C8.3196 17.5661 6.3946 16.7744 4.97793 15.3494C4.11626 14.4904 3.47574 13.4353 3.11126 12.2744H2.00293V8.48276H2.91126C3.18647 7.14318 3.81918 5.9031 4.74226 4.89408C5.66534 3.88507 6.84436 3.14477 8.15421 2.75172C9.46406 2.35868 10.8559 2.32757 12.182 2.66168C13.5081 2.99579 14.719 3.68267 15.6863 4.64942C16.7365 5.69547 17.4528 7.02951 17.7446 8.48276H18.6696V12.2744H18.6196L15.6529 14.9994L11.2363 14.4994V13.1078H15.2613L15.9363 12.2994ZM8.06127 9.80775C8.31127 9.80775 8.55293 9.90775 8.72793 10.0911C8.90381 10.2684 9.00249 10.508 9.00249 10.7578C9.00249 11.0075 8.90381 11.2471 8.72793 11.4244C8.55293 11.5994 8.31127 11.6994 8.06127 11.6994C7.53627 11.6994 7.11127 11.2828 7.11127 10.7578C7.11127 10.2328 7.53627 9.80775 8.06127 9.80775ZM12.6029 9.80775C13.1279 9.80775 13.5446 10.2328 13.5446 10.7578C13.5446 11.2828 13.1279 11.6994 12.6029 11.6994C12.0779 11.6994 11.6529 11.2828 11.6529 10.7578C11.6529 10.5058 11.753 10.2642 11.9312 10.086C12.1093 9.90784 12.351 9.80775 12.6029 9.80775Z" fill="white" />
                    </svg>
                    {getTranslation('nav.support')}
                  </PurpurButonNav>
                </Link>
                <Link href={''}>
                  <PurpurButonNav>
                    <svg width={17} height={18} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.48306 10.6818L9.79045 11.4629C9.91497 11.5421 10.0368 11.5394 10.1558 11.4547C10.2749 11.37 10.3173 11.2539 10.2828 11.1063L9.94327 9.62911L11.0978 8.62734C11.211 8.52546 11.245 8.40389 11.1997 8.26263C11.1544 8.12136 11.0526 8.04484 10.8941 8.03307L9.38295 7.91421L8.78868 6.50494C8.73209 6.36911 8.63021 6.30119 8.48306 6.30119C8.3359 6.30119 8.23403 6.36911 8.17743 6.50494L7.58316 7.91421L6.07202 8.03307C5.91354 8.04439 5.81167 8.12091 5.76639 8.26263C5.72111 8.40435 5.75507 8.52592 5.86827 8.62734L7.02285 9.62911L6.68327 11.1063C6.64931 11.2534 6.69187 11.3696 6.81095 11.4547C6.93003 11.5398 7.0516 11.5425 7.17566 11.4629L8.48306 10.6818ZM6.20785 14.4342H4.40806C4.03452 14.4342 3.71485 14.3013 3.44907 14.0355C3.18329 13.7698 3.05018 13.4499 3.04972 13.0759V11.2761L1.74233 9.95171C1.61781 9.81588 1.5216 9.66601 1.45368 9.5021C1.38576 9.3382 1.35181 9.17112 1.35181 9.00088C1.35181 8.83109 1.38576 8.66424 1.45368 8.50033C1.5216 8.33643 1.61781 8.18633 1.74233 8.05005L3.04972 6.72567V4.92588C3.04972 4.55234 3.18284 4.23268 3.44907 3.9669C3.71531 3.70112 4.03497 3.568 4.40806 3.56755H6.20785L7.53222 2.26015C7.66806 2.13564 7.81815 2.03942 7.98251 1.9715C8.14687 1.90359 8.31372 1.86963 8.48306 1.86963C8.65285 1.86963 8.81992 1.90359 8.98428 1.9715C9.14864 2.03942 9.29851 2.13564 9.43389 2.26015L10.7583 3.56755H12.5581C12.9316 3.56755 13.2515 3.70066 13.5177 3.9669C13.784 4.23313 13.9168 4.55279 13.9164 4.92588V6.72567L15.2238 8.05005C15.3483 8.18588 15.4445 8.33598 15.5124 8.50033C15.5803 8.66469 15.6143 8.83154 15.6143 9.00088C15.6143 9.17067 15.5803 9.33775 15.5124 9.5021C15.4445 9.66646 15.3483 9.81633 15.2238 9.95171L13.9164 11.2761V13.0759C13.9164 13.4494 13.7835 13.7693 13.5177 14.0355C13.2519 14.3018 12.9321 14.4347 12.5581 14.4342H10.7583L9.43389 15.7416C9.29806 15.8661 9.14819 15.9623 8.98428 16.0303C8.82038 16.0982 8.6533 16.1321 8.48306 16.1321C8.31327 16.1321 8.14642 16.0982 7.98251 16.0303C7.81861 15.9623 7.66851 15.8661 7.53222 15.7416L6.20785 14.4342Z" fill="white" />
                    </svg>
                    {getTranslation('nav.top')}
                  </PurpurButonNav>
                </Link>
              </div>
              <div className='flex flex-row items-center justify-start gap-2'>
                <VkLink />
                <TgLink />
                <YtLink />
              </div>
              <EarnMoneyButton />
            </div>
          </div>
          <SupportVidget />
        </div >
      )
      }
    </>
  )
}

export default Navbar
