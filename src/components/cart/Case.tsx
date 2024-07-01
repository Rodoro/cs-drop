import React from 'react'
import Image from 'next/image'
import style from "./Case.module.css"
import Link from 'next/link'
import { ICase } from '@/types/ui.types'

function Case({ lootCase }: { lootCase: ICase }) {
  return (
    <Link className="relative cursor-pointer w-[10.3125rem] h-[10.8125rem] sm:w-64 sm:h-[16.6875rem]" href={'/cases/' + lootCase.id}>
      <Image className={style.image + ' absolute z-10 right-0 left-0 mx-auto my-auto -top-6 sm:-top-4 w-[145px] h-[145px] sm:w-[212px] sm:h-[212px]'} src={lootCase.image ? lootCase.image : '/img/example/batman-def.png'} alt={lootCase.title ? lootCase.title : 'None'} width={212} height={212} />
      <div className={"absolute w-full h-full rounded-[1.375rem] " + style.border} />
      <div className="relative flex flex-col items-center justify-end overflow-hidden w-[10.3125rem] h-[10.8125rem] sm:w-64 sm:h-[16.6875rem] rounded-[1.375rem] border-0 border-[#ffffff]/[.1] gap-2 sm:gap-4 bg-contain bg-repeat" style={{ background: "url(/img/interface/bg/case.png)" }}>
        <svg className="absolute" width={257} height={269} viewBox="0 0 257 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_440_18900)">
            <ellipse cx="125.832" cy="64.7732" rx="119.115" ry="78.6345" fill="#E23432" />
          </g>
          <defs>
            <filter id="filter0_f_440_18900" x="-140.874" y="-161.452" width="533.412" height="452.451" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="73.7955" result="effect1_foregroundBlur_440_18900" />
            </filter>
          </defs>
        </svg>
        <div className="button z-20 flex flex-shrink-0 justify-center py-3 items-center w-[4.5rem] h-[1.3125rem] sm:w-28 sm:h-[2.0625rem] rounded-xl border-[1.192px] " style={{ background: "linear-gradient(rgba(17,22,46,1), rgba(17,22,46,1)) padding-box, linear-gradient(90deg, #1F79FF 0%, #6A12FA 50%, #B8A6FF 100%) border-box", border: "1.5px solid transparent" }}>
          <div className="flex justify-center items-center text-gray-50 text-center text-[10px] sm:text-[.8125rem] font-semibold leading-[normal]">
            ${lootCase.price ? lootCase.price : "None"}
          </div>
        </div>
        <div className="mb-4 sm:mb-8 z-20 text-xs sm:text-[1.1875rem] font-bold leading-[normal]">{lootCase.title ? lootCase.title : 'None'}</div>
      </div >
    </Link>
  )
}

const CaseStatic = () => {
  return (
    <div className="relative cursor-pointer w-64 h-[16.6875rem]">
      <Image className={style.image + ' absolute z-10 right-0 left-0 mx-auto my-auto -top-4w-[212px] h-[212px]'} src={'/img/example/batman-def.png'} alt={'batman'} width={212} height={212} />
      <div className={"absolute w-full h-full rounded-[1.375rem] " + style.border} />
      <div className="relative flex flex-col items-center justify-end overflow-hidden w-64 h-[16.6875rem] rounded-[1.375rem] border-0 border-[#ffffff]/[.1] gap-4 bg-contain bg-repeat" style={{ background: "url(/img/interface/bg/case.png)" }}>
        <svg className="absolute" width={257} height={269} viewBox="0 0 257 269" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_440_18900)">
            <ellipse cx="125.832" cy="64.7732" rx="119.115" ry="78.6345" fill="#E23432" />
          </g>
          <defs>
            <filter id="filter0_f_440_18900" x="-140.874" y="-161.452" width="533.412" height="452.451" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="73.7955" result="effect1_foregroundBlur_440_18900" />
            </filter>
          </defs>
        </svg>
        <div className="button z-20 flex flex-shrink-0 justify-center py-3 items-center w-28 h-[2.0625rem] rounded-xl border-[1.192px] " style={{ background: "linear-gradient(rgba(17,22,46,1), rgba(17,22,46,1)) padding-box, linear-gradient(90deg, #1F79FF 0%, #6A12FA 50%, #B8A6FF 100%) border-box", border: "1.5px solid transparent" }}>
          <div className="flex justify-center items-center text-gray-50 text-center text-[.8125rem] font-semibold leading-[normal]">
            $3,99
          </div>
        </div>
        <div className="mb-8 z-20 text-[1.1875rem] font-bold leading-[normal]">BATMAN</div>
      </div >
    </div>
  )
}

export { Case, CaseStatic }
