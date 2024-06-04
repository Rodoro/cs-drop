import Link from 'next/link'
import React from 'react'
import ChatIcon from './icons/chat'
import SupportIcon from './icons/support'

const SupportVidget = () => {
  return (
    <div className="invisible xl:visible fixed right-4 bottom-4 z-50">
      <div className="flex flex-row gap-2">
        <Link href={''} className="flex items-start rounded-[0.9375rem] p-[1px] justify-center shadow-[0_0_54px_0_rgba(106,18,250,0.50)] bg-[linear-gradient(150deg,rgba(81,60,169,1),rgba(76,51,172,1))]">
          <div className='w-full h-full p-2 bg-[#4B35A8] rounded-[0.9375rem]'>
            <ChatIcon />
          </div>
        </Link>
        <Link href={''} className="flex items-start rounded-[0.9375rem] p-[1px] justify-center shadow-[0_0_54px_0_rgba(106,18,250,0.50)] bg-[linear-gradient(150deg,rgba(81,60,169,1),rgba(76,51,172,1))]">
          <div className='w-full h-full p-2 bg-[#4B35A8] rounded-[0.9375rem]'>
            <SupportIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SupportVidget
