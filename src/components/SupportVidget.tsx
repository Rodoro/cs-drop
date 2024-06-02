import Link from 'next/link'
import React from 'react'
import ChatIcon from './icons/chat'
import SupportIcon from './icons/support'

const SupportVidget = () => {
  return (
    <div className="invisible xl:visible fixed right-4 bottom-4 z-50">
      <div className="flex flex-row gap-2">
        <Link href={''} className="flex items-start rounded-[0.9375rem] border-[1.066px] border-[#ffffff]/[.10] bg-[#6a4aeb]/[.60] justify-center p-2 opacity-[0.9] shadow-[0_0_54px_0_rgba(106,18,250,0.50)]">
            <ChatIcon />
        </Link>
        <Link href={''} className="flex items-start rounded-[0.9375rem] border-[1.066px] border-[#ffffff]/[.10] bg-[#6a4aeb]/[.60] justify-center p-2 opacity-[0.9] shadow-[0_0_54px_0_rgba(106,18,250,0.50)]">
            <SupportIcon />
        </Link>
      </div>
    </div>
  )
}

export default SupportVidget
