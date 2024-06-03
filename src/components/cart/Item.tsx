import React from 'react'
import Image from 'next/image'

const Item = () => {
    return (
        <div className="relative rounded-[0.9375rem] w-[180px] min-w-44 overflow-hidden p-[2px]" style={{ background: "linear-gradient(150deg,rgba(64, 57, 108, 1),rgba(43, 33, 98, 1))" }}>
            <div className="w-full h-[117px] overflow-hidden relative rounded-[0.9375rem] bg-[#2B2162]">
                <div className="flex flex-col absolute bottom-0 mb-3 ml-3 gap-1">
                    <div className="opacity-50 text-white text-[11.41px] font-medium leading-[normal]">AK-47</div>
                    <div className="text-[#f1f1f1] text-[.8125rem] font-medium leading-[normal]">Legion of Anubis</div>
                </div>
                <Image className="absolute left-0 mt-1" src={'/img/example/ak47.png'} alt={'Оружие'} width={150} height={95}></Image>

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

export default Item
