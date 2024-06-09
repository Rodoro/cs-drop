"use client"
import LiveDrops from '@/components/LiveDrops'
import { CaseStatic } from '@/components/cart/Case'
import { ItemBox } from '@/components/cart/Item'
import SoundButton from '@/components/icons/sound'
import { GradientButton, GradientButton2, PurpurButon } from '@/components/interface/Buttons'
import { SelectContent, SelectCount, SelectCustom } from '@/components/interface/Select'
import Switch from '@/components/interface/Switch'
import { useTranslation } from '@/hook/useLanguageStore'
import Link from 'next/link'
import React, { useState } from 'react'

const OpenCase = () => {
    const { getTranslation } = useTranslation();
    const [content, setContent] = useState<string>("cases")
    const [count, setCount] = useState<number>(1)
    const [isAnim, setIsAnim] = useState<boolean>(false)
    const [position, setPosition] = useState<string>("view")

    const openCase = () => {
        if (isAnim) {
            setPosition('win')
        }
    }

    return (
        <div>
            <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <LiveDrops />
            <div className='hidden sm:flex my-8 flex-row items-center justify-between'>
                <Link className="flex justify-center items-center gap-1.5 opacity-50" href={'/'}>
                    <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.49995 9.42136L2.88132 10.04L2.2627 9.42136L2.88132 8.80273L3.49995 9.42136ZM18.3749 16.4214C18.3749 16.6534 18.2828 16.876 18.1187 17.0401C17.9546 17.2042 17.732 17.2964 17.4999 17.2964C17.2679 17.2964 17.0453 17.2042 16.8812 17.0401C16.7171 16.876 16.6249 16.6534 16.6249 16.4214H18.3749ZM7.25632 14.415L2.88132 10.04L4.11857 8.80273L8.49357 13.1777L7.25632 14.415ZM2.88132 8.80273L7.25632 4.42773L8.49357 5.66498L4.11857 10.04L2.88132 8.80273ZM3.49995 8.54636H12.2499V10.2964H3.49995V8.54636ZM18.3749 14.6714V16.4214H16.6249V14.6714H18.3749ZM12.2499 8.54636C13.8744 8.54636 15.4323 9.19167 16.581 10.3403C17.7296 11.489 18.3749 13.0469 18.3749 14.6714H16.6249C16.6249 13.511 16.164 12.3982 15.3435 11.5778C14.5231 10.7573 13.4103 10.2964 12.2499 10.2964V8.54636Z" fill="white" />
                    </svg>
                    <div className="w-[4.3125rem] h-[1.125rem] text-white font-semibold leading-[normal]">
                        {getTranslation('page.case.back')}
                    </div>
                </Link>
                <SelectContent value={content} setValue={setContent} />
                <div className="flex justify-center items-center gap-2.5">
                    <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.56784 3.92672V5.37572H12.4318V3.92672C12.4318 3.79862 12.381 3.67577 12.2904 3.58519C12.1998 3.49461 12.0769 3.44372 11.9488 3.44372H9.05084C8.92274 3.44372 8.79989 3.49461 8.70931 3.58519C8.61873 3.67577 8.56784 3.79862 8.56784 3.92672ZM6.63584 5.37572V3.92672C6.63584 2.59364 7.71776 1.51172 9.05084 1.51172H11.9488C13.2819 1.51172 14.3638 2.59364 14.3638 3.92672V5.37572H16.2958C17.3206 5.37572 18.3035 5.78282 19.0281 6.50746C19.7527 7.2321 20.1598 8.21492 20.1598 9.23972V10.2057C20.1598 10.9743 19.8545 11.7114 19.311 12.2549C18.7676 12.7984 18.0304 13.1037 17.2618 13.1037H12.4318V12.1377C12.4318 11.8815 12.3301 11.6358 12.1489 11.4547C11.9677 11.2735 11.722 11.1717 11.4658 11.1717H9.53384C9.27764 11.1717 9.03194 11.2735 8.85078 11.4547C8.66962 11.6358 8.56784 11.8815 8.56784 12.1377V13.1037H3.73784C2.96925 13.1037 2.23213 12.7984 1.68865 12.2549C1.14517 11.7114 0.839844 10.9743 0.839844 10.2057V9.23972C0.839844 8.21492 1.24694 7.2321 1.97158 6.50746C2.69622 5.78282 3.67905 5.37572 4.70384 5.37572H6.63584ZM0.839844 14.0697V16.9677C0.839844 17.9925 1.24694 18.9753 1.97158 19.7C2.69622 20.4246 3.67905 20.8317 4.70384 20.8317H16.2958C17.3206 20.8317 18.3035 20.4246 19.0281 19.7C19.7527 18.9753 20.1598 17.9925 20.1598 16.9677V14.0697C19.3523 14.6764 18.3496 15.0357 17.2618 15.0357H12.4318V16.0017C12.4318 16.2579 12.3301 16.5036 12.1489 16.6848C11.9677 16.8659 11.722 16.9677 11.4658 16.9677H9.53384C9.27764 16.9677 9.03194 16.8659 8.85078 16.6848C8.66962 16.5036 8.56784 16.2579 8.56784 16.0017V15.0357H3.73784C2.69253 15.0373 1.67517 14.6981 0.839844 14.0697Z" fill="white" />
                    </svg>
                    <div className="h-[1.0625rem] text-white font-semibold leading-[normal]">Batman</div>
                </div>
            </div>
            <div className='flex sm:hidden my-6 flex-row items-center justify-between gap-4'>
                <SelectCustom value={content} setValue={setContent}
                    items={[
                        { value: 'cases', div: <><svg width={20} height={21} viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><path d="M1.48714 11.4959L1.74928 11.6484L3.94428 12.9842C4.4775 13.3084 5.21714 13.2159 5.6525 12.7695L6.06678 12.3445L6.97107 13.7252C7.39892 14.3788 8.24178 14.3745 8.66571 13.7195L10.6464 10.6567L12.9143 14.5352C13.3564 15.2913 14.2657 15.1817 14.5118 14.3388L16.9871 5.85416L17.0557 5.62916C18.0461 7.05985 18.5753 8.75914 18.5725 10.4992C18.5725 15.2331 14.735 19.0706 10.0011 19.0706C5.60464 19.0706 1.98142 15.7602 1.48714 11.4959ZM1.44214 10.0245C1.68928 5.51131 5.42642 1.92773 10.0011 1.92773C12.3804 1.92773 14.5332 2.89702 16.0861 4.46273L15.8118 5.51131L13.5629 13.2184L11.5107 9.70881C11.1093 9.02238 10.2571 9.00381 9.82571 9.67095L7.815 12.7795L7.00821 11.5477C6.60821 10.9374 5.80464 10.8595 5.29535 11.382L4.77571 11.9145C4.73892 11.952 4.62714 11.9663 4.58071 11.9381L2.38571 10.6024L1.44214 10.0245Z" fill="white" /></svg><div className="flex flex-col items-start gap-1 text-white text-center text-sm font-medium leading-[normal]">{getTranslation('components.interface.select.content.cases')}</div></> },
                        { value: 'contracts', div: <div className="flex flex-col items-start gap-1 text-white text-center text-sm font-medium leading-[normal]">{getTranslation('components.interface.select.content.contracts')}</div> },
                        { value: 'upgrade', div: <div className="flex flex-col items-start gap-1 text-white text-center text-sm font-medium leading-[normal]">{getTranslation('components.interface.select.content.upgrade')}</div> },
                        { value: 'cards', div: <div className="flex flex-col items-start gap-1 text-white text-center text-sm font-medium leading-[normal]">{getTranslation('components.interface.select.content.cards')}</div> }
                    ]}
                />
                <Link className="flex justify-center items-center gap-1.5 opacity-50" href={'/'}>
                    <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.49995 9.42136L2.88132 10.04L2.2627 9.42136L2.88132 8.80273L3.49995 9.42136ZM18.3749 16.4214C18.3749 16.6534 18.2828 16.876 18.1187 17.0401C17.9546 17.2042 17.732 17.2964 17.4999 17.2964C17.2679 17.2964 17.0453 17.2042 16.8812 17.0401C16.7171 16.876 16.6249 16.6534 16.6249 16.4214H18.3749ZM7.25632 14.415L2.88132 10.04L4.11857 8.80273L8.49357 13.1777L7.25632 14.415ZM2.88132 8.80273L7.25632 4.42773L8.49357 5.66498L4.11857 10.04L2.88132 8.80273ZM3.49995 8.54636H12.2499V10.2964H3.49995V8.54636ZM18.3749 14.6714V16.4214H16.6249V14.6714H18.3749ZM12.2499 8.54636C13.8744 8.54636 15.4323 9.19167 16.581 10.3403C17.7296 11.489 18.3749 13.0469 18.3749 14.6714H16.6249C16.6249 13.511 16.164 12.3982 15.3435 11.5778C14.5231 10.7573 13.4103 10.2964 12.2499 10.2964V8.54636Z" fill="white" />
                    </svg>
                    <div className="w-[4.3125rem] h-[1.125rem] text-white font-semibold leading-[normal]">
                        {getTranslation('page.case.back')}
                    </div>
                </Link>
            </div>
            <div className={(position == 'view' ? "" : "hidden") + " relative bg-contain sm:pt-8 bg-center bg-no-repeat items-center justify-center flex flex-col w-full min-[1150px]:bg-[url(/img/interface/bg/case-open.png)]"} >
                <div className="absolute bg-[#821FFF] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] blur-[307px] rounded-full top-6 z-0" />
                <CaseStatic />
                <div className="z-10 py-4 flex flex-col items-center justify-center gap-5">
                    <div className="opacity-[0.6] text-white text-sm font-medium leading-[normal]">{getTranslation('page.case.selectNumber')}</div>
                    <div className='flex flex-row gap-4'>
                        <SelectCount value={count} setValue={setCount} />
                        <div className="hidden sm:flex">
                            <SoundButton />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <Switch value={isAnim} setValue={setIsAnim} />
                        <div className="opacity-[0.6] text-white text-sm font-semibold leading-[normal]">{getTranslation('page.case.skipAnim')}</div>
                    </div>
                    <div className='flex flex-row gap-3 w-full items-center justify-center sm:mb-12'>
                        <div className="max-w-64 w-full">
                            <PurpurButon onClick={openCase}>
                                <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.625 11.4414H5.25M10.5 3.56641V6.19141M6.825 7.76641L4.9 5.84141M14.175 7.76641L16.1 5.84141M6.825 15.1164L4.9 17.0414M10.5 11.4414L18.375 14.0664L14.875 15.8164L13.125 19.3164L10.5 11.4414Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="text-white text-center text-sm font-medium leading-[normal]">{getTranslation('page.case.openButton')}</div>
                            </PurpurButon>
                        </div>
                        <div className="flex sm:hidden">
                            <SoundButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className={(position == 'win' ? '' : 'hidden ') + 'flex flex-col items-center justify-center w-full gap-7'}>
                <div className='relative bg-[url(/img/interface/bg/case-win.png)] w-full bg-center bg-no-repeat rounded-[30px] py-5 items-center justify-center flex' style={{ backgroundSize: "auto 100%" }}>
                    <ItemBox />
                    <div className='absolute bg-gradient-to-l z-10 from-black/[.25] blur-[8px] sm:blur-xl right-0 h-full w-[20%]' />
                    <div className='absolute bg-gradient-to-r z-10 from-black/[.25] blur-[8px] sm:blur-xl left-0 h-full w-[20%]' />
                    <svg className='absolute hidden sm:flex' width={474} height={474} viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ mixBlendMode: 'hard-light' }} opacity="0.2" filter="url(#filter0_f_579_48593)">
                            <path d="M330 237C330 288.362 288.362 330 237 330C185.638 330 144 288.362 144 237C144 185.638 185.638 144 237 144C288.362 144 330 185.638 330 237Z" fill="#821FFF" />
                        </g>
                        <defs>
                            <filter id="filter0_f_579_48593" x="0.143097" y="0.143097" width="473.714" height="473.714" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="71.9285" result="effect1_foregroundBlur_579_48593" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-row justify-center max-w-56 w-full sm:max-w-44 z-10">
                    <GradientButton2 onClick={() => setPosition('view')}>
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_588_56777)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.91778 0.398995C6.19606 0.0519144 7.54986 0.103643 8.79793 0.547255C10.046 0.990867 11.1288 1.80519 11.9012 2.88118V1.59337C11.9012 1.43175 11.9654 1.27676 12.0797 1.16248C12.194 1.0482 12.349 0.983995 12.5106 0.983995C12.6722 0.983995 12.8272 1.0482 12.9415 1.16248C13.0558 1.27676 13.12 1.43175 13.12 1.59337V5.0465H9.66684C9.50522 5.0465 9.35023 4.98229 9.23595 4.86801C9.12167 4.75373 9.05746 4.59874 9.05746 4.43712C9.05746 4.2755 9.12167 4.12051 9.23595 4.00623C9.35023 3.89195 9.50522 3.82775 9.66684 3.82775H11.07C10.4336 2.83202 9.48154 2.07852 8.36624 1.68781C7.25094 1.29709 6.03682 1.29173 4.91812 1.67259C3.79941 2.05344 2.84077 2.7985 2.19554 3.78856C1.55032 4.77863 1.2558 5.9565 1.35911 7.13374C1.46242 8.31097 1.95758 9.41954 2.76538 10.2821C3.57318 11.1447 4.64694 11.7114 5.81488 11.8916C6.98282 12.0717 8.17745 11.855 9.20765 11.276C10.2379 10.697 11.0441 9.78923 11.4974 8.69787C11.5268 8.62221 11.5711 8.55319 11.6275 8.49486C11.684 8.43654 11.7516 8.39008 11.8262 8.35823C11.9009 8.32638 11.9812 8.30977 12.0624 8.30937C12.1436 8.30898 12.224 8.32481 12.299 8.35594C12.374 8.38707 12.442 8.43287 12.499 8.49064C12.556 8.54842 12.601 8.61701 12.6311 8.69238C12.6613 8.76775 12.6761 8.8484 12.6746 8.92957C12.6732 9.01074 12.6555 9.0908 12.6227 9.16506C12.1992 10.1844 11.5232 11.0791 10.6583 11.7648C9.79333 12.4505 8.76802 12.9047 7.67899 13.0845C6.58996 13.2643 5.47308 13.1638 4.43363 12.7925C3.39418 12.4212 2.4664 11.7914 1.73774 10.9623C1.00909 10.1332 0.503561 9.13221 0.268817 8.05369C0.0340727 6.97516 0.077843 5.85463 0.396002 4.7977C0.714161 3.74077 1.29623 2.78228 2.08734 2.01256C2.87844 1.24284 3.85253 0.688072 4.91778 0.398995Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_588_56777">
                                    <rect width={13} height={13} fill="white" transform="translate(0.120117 0.171875)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="text-gray-50 text-center text-sm font-semibold leading-[normal]">{getTranslation('page.case.playAgain')}</div>
                    </GradientButton2>
                </div>
            </div>
            <div className="my-8 flex items-center gap-1.5 opacity-[0.6]">
                <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.56784 3.92672V5.37572H12.4318V3.92672C12.4318 3.79862 12.381 3.67577 12.2904 3.58519C12.1998 3.49461 12.0769 3.44372 11.9488 3.44372H9.05084C8.92274 3.44372 8.79989 3.49461 8.70931 3.58519C8.61873 3.67577 8.56784 3.79862 8.56784 3.92672ZM6.63584 5.37572V3.92672C6.63584 2.59364 7.71776 1.51172 9.05084 1.51172H11.9488C13.2819 1.51172 14.3638 2.59364 14.3638 3.92672V5.37572H16.2958C17.3206 5.37572 18.3035 5.78282 19.0281 6.50746C19.7527 7.2321 20.1598 8.21492 20.1598 9.23972V10.2057C20.1598 10.9743 19.8545 11.7114 19.311 12.2549C18.7676 12.7984 18.0304 13.1037 17.2618 13.1037H12.4318V12.1377C12.4318 11.8815 12.3301 11.6358 12.1489 11.4547C11.9677 11.2735 11.722 11.1717 11.4658 11.1717H9.53384C9.27764 11.1717 9.03194 11.2735 8.85078 11.4547C8.66962 11.6358 8.56784 11.8815 8.56784 12.1377V13.1037H3.73784C2.96925 13.1037 2.23213 12.7984 1.68865 12.2549C1.14517 11.7114 0.839844 10.9743 0.839844 10.2057V9.23972C0.839844 8.21492 1.24694 7.2321 1.97158 6.50746C2.69622 5.78282 3.67905 5.37572 4.70384 5.37572H6.63584ZM0.839844 14.0697V16.9677C0.839844 17.9925 1.24694 18.9753 1.97158 19.7C2.69622 20.4246 3.67905 20.8317 4.70384 20.8317H16.2958C17.3206 20.8317 18.3035 20.4246 19.0281 19.7C19.7527 18.9753 20.1598 17.9925 20.1598 16.9677V14.0697C19.3523 14.6764 18.3496 15.0357 17.2618 15.0357H12.4318V16.0017C12.4318 16.2579 12.3301 16.5036 12.1489 16.6848C11.9677 16.8659 11.722 16.9677 11.4658 16.9677H9.53384C9.27764 16.9677 9.03194 16.8659 8.85078 16.6848C8.66962 16.5036 8.56784 16.2579 8.56784 16.0017V15.0357H3.73784C2.69253 15.0373 1.67517 14.6981 0.839844 14.0697Z" fill="white" />
                </svg>
                <div className="h-[1.1875rem] text-white font-medium leading-[normal]">{getTranslation('page.case.inside')}</div>
            </div>
            <div className='flex mt-12 flex-row justify-start' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "16px", rowGap: "16px" }}>
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
            </div>
        </div >
    )
}

export default OpenCase
