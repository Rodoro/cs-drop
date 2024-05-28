import React from 'react'
import Image from 'next/image'

const SelectLanguage = () => {
  return (
    <div className='flex flex-row items-center space-x-2 px-6 bg-[#242f54] rounded-2xl border-[1.111px] border-[#ffffff]/[.30] py-3'>
      <Image
        src="/img/interface/nav/flag/gb.png"
        alt="flag"
        width={20}
        height={50}
      />
      <span>English</span>
      <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00021 1.29797L5.44466 5.03535L9.8891 1.29797" stroke="white" strokeWidth="0.808081" />
      </svg>
    </div>
  )
}

export default SelectLanguage
