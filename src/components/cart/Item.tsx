import React from 'react'
import Image from 'next/image'
import { IItem } from '@/types/ui.types'

export function getColorByRarity(rarity: string | undefined | null, isPrimary: boolean) {
    switch (rarity) {
        case "Ширпотреб":
            return isPrimary ? "#CACDE4" : '#8287B1'
        case "Промышленное качество":
            return isPrimary ? "#818BE9" : '#6E7BEB'
        case "Армейское качество":
            return isPrimary ? "#5969FF" : '#2438EF'
        case "Запрещенное":
            return isPrimary ? "#E74FFF" : '#D324EF'
        case "Засекреченное":
            return isPrimary ? "#FF7CF2" : '#FF7CF2'
        case "Тайное":
            return isPrimary ? "#FF2F2D" : '#EF2424'
        case "Редкое":
            return isPrimary ? "#FFC772" : '#EF9E24'

        default:
            return isPrimary ? "#FF7CF2" : '#FF7CF2'
    }
}

const Item = () => {
    return (
        <div className="relative rounded-[0.9375rem] w-[180px] min-w-44 overflow-hidden p-[2px]" style={{ background: "linear-gradient(150deg,rgba(64, 57, 108, 1),rgba(43, 33, 98, 1))" }}>
            <div className="w-full h-[117px] overflow-hidden relative rounded-[0.9375rem] bg-[#2B2162]">
                <div className="flex flex-col absolute bottom-0 mb-3 ml-3 gap-1">
                    <div className="opacity-50 text-white text-[11.41px] font-medium leading-[normal]">AK-47</div>
                    <div className="text-[#f1f1f1] text-[.8125rem] font-medium leading-[normal]">Legion of Anubis</div>
                </div>
                <Image className="z-10 absolute left-0 mt-1" src={'/img/example/ak47.png'} alt={'Оружие'} width={150} height={95}></Image>
            </div>
            <svg className='absolute top-0 right-0 bottom-0 my-auto' width={158} height={121} viewBox="0 0 158 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_22_451)">
                    <ellipse cx="152.512" cy="59.3279" rx="58.9516" ry="77.0174" fill="#EF2424" fillOpacity="0.3" />
                </g>
                <defs>
                    <filter id="filter0_f_22_451" x="0.940544" y="-110.309" width="303.143" height="339.275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="46.31" result="effect1_foregroundBlur_22_451" />
                    </filter>
                </defs>
            </svg>
            <div className='absolute h-full w-3 bg-[#E23432] top-0 -right-[0.55rem] opacity-50' />
        </div>
    )
}

const ItemBox = ({ item }: { item: IItem | null }) => {
    return (
        <div className='relative rounded-[41px] w-[160px] h-[160px] sm:w-[210px] sm:h-[210px] overflow-hidden p-[2px]' style={{ background: "linear-gradient(150deg,rgba(30, 33, 52, 1),rgba(14, 16, 38, 1))" }}>
            <div className='w-full h-full relative rounded-[41px] bg-[#0E1026]'>
                <div className='flex flex-col items-center justify-between py-4 h-full'>
                    <div className="inline-flex flex-col justify-center items-center gap-0.5">
                        <div className="opacity-[0.3] text-white text-center text-[10px] sm:text-[.8125rem] font-semibold leading-[normal]">{item?.weaponName ? item?.weaponName : 'AK-47'}</div>
                        <div className="text-white text-center text-[8.5px] sm:text-[10.953px] font-semibold leading-[normal]">{item?.skinName ? item?.skinName : 'Legion of Anubis'}</div>
                    </div>
                    <div className="inline-flex flex-col items-center">
                        <div className="text-[19.75px] sm:text-[1.5625rem] font-bold leading-[120%]">${item?.price ? item?.price : '1500'}</div>
                        <div className="opacity-[0.3] text-white text-center text-[9.4px] sm:text-xs font-semibold leading-[normal]">{item?.chance ? Math.round(item?.chance * 10000) / 10000 : '0.0001'}%</div>
                    </div>
                </div>
                <div className='z-10 absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center mb-16 m-7 my-12'>
                    <Image className="" src={item?.image ? item?.image : '/img/example/ak47.png'} alt={'Оружие'} width={140} height={80} />
                </div>
            </div>
            <svg className='absolute top-0 left-0 m-auto' width={177} height={172} viewBox="0 0 177 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2034_5837)">
                    <circle cx="46.2013" cy="41.0618" r="67.0872" fill={getColorByRarity(item?.rarity, false)} fillOpacity="0.2" />
                </g>
                <defs>
                    <filter id="filter0_f_2034_5837" x="-84.2901" y="-89.4296" width="260.983" height="260.982" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="31.7021" result="effect1_foregroundBlur_2034_5837" />
                    </filter>
                </defs>
            </svg>
            <svg className='absolute bottom-0 right-0 m-auto' width={166} height={185} viewBox="0 0 166 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2034_5846)">
                    <circle cx="131.107" cy="130.753" r="67.0872" fill={getColorByRarity(item?.rarity, false)} fillOpacity="0.06" />
                </g>
                <defs>
                    <filter id="filter0_f_2034_5846" x="0.616013" y="0.261765" width="260.983" height="260.982" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="31.7021" result="effect1_foregroundBlur_2034_5846" />
                    </filter>
                </defs>
            </svg>
            <div className={"absolute z-10 left-0 right-0 mx-auto -top-4 w-[0.1875rem] h-[2.375rem]  -rotate-90 "} style={{ background: getColorByRarity(item?.rarity, true) }} />
        </div >
    )
}

export { Item, ItemBox }
