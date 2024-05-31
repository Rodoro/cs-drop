import React from 'react'

const Case = () => {
  return (

    <div className="cursor-pointer w-64">

      <div className="relative flex flex-col items-center justify-end overflow-hidden w-64 h-[16.6875rem] rounded-[1.375rem] border-[1.12px] border-[#ffffff]/[.30] gap-4" style={{ backgroundImage: "url(/img/interface/bg/case.png)" }}>
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
        <div className="button flex flex-shrink-0 justify-center py-4 items-center w-28 h-[2.0625rem] rounded-xl border-[1.192px] " style={{background: "linear-gradient(rgba(17,22,46,1), rgba(17,22,46,1)) padding-box, linear-gradient(90deg, #1F79FF 0%, #6A12FA 50%, #B8A6FF 100%) border-box", border: "1.5px solid transparent"}}>
          <div className="frame_1597887053 flex justify-center items-center text-gray-50 text-center text-[.8125rem] font-semibold leading-[normal]">
            $3,99
          </div>
        </div>
        <div className="mb-8 text-[1.1875rem] font-bold leading-[normal]">BATMAN</div>
      </div >
    </div>
  )
}

export default Case
