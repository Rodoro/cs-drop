"use client"
import React, { JSXElementConstructor, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { create } from 'zustand'
import { useLanguageStore, useTranslation } from '@/hook/useLanguageStore'
import style from './Select.module.css'
import { motion } from "framer-motion";
import useMenuAnimation from '@/hook/animation/useMenuAnimation'
import useSelectPage from '@/hook/animation/useSelectPage'

export type SelectProps = {
  value: any;
  setValue: (value: any) => void;
}

export interface SelectCustomProps extends SelectProps {
  items: ListItemProps[]
}
interface ListItemProps {
  div: any;
  value: string;
}

const SelectLanguage = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="relative" ref={scope}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
        className='min-w-[162px] cursor-pointer flex flex-row items-center justify-between space-x-2 px-6 bg-[#242f54] rounded-2xl py-3'
        style={{ background: "linear-gradient(150deg,rgba(38,48,86,1),rgba(38,48,86,1)) padding-box, linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1)) border-box", border: "1px solid transparent" }}
      >
        <div className='flex flex-row space-x-2 items-center select-none'>
          <Image
            src={"/img/interface/nav/flag/" + language + ".png"}
            alt="flag"
            width={20}
            height={50}
          />
          <span>{language == 'gb' ? "English" : "Русский"}</span>
        </div>
        <div className='arrow' style={{ transformOrigin: "50% 55%" }}>
          <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00021 1.29797L5.44466 5.03535L9.8891 1.29797" stroke="white" strokeWidth="0.808081" />
          </svg>
        </div>
      </motion.div>
      <ul
        className={"rounded-2xl cursor-pointer z-10 absolute top-14 inset-x-0 flex-col items-center justify-center bg-[#242f54]"}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
          background: "linear-gradient(150deg,rgba(38,48,86,1),rgba(38,48,86,1)) padding-box, linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1)) border-box",
          border: "1px solid transparent"
        }}
      >
        {/* TODO: Более красочние наводка на выбранный флаг */}
        <li onClick={() => { setIsOpen(!isOpen); setLanguage('gb') }} className="select-none pl-6 flex flex-row items-center justify-start w-full gap-3 rounded-2xl hover:bg-black/15 py-2">
          <Image
            src="/img/interface/nav/flag/gb.png"
            alt="flag"
            width={20}
            height={50}
          />
          <span>English</span>
        </li>
        <li onClick={() => { setIsOpen(!isOpen); setLanguage('ru') }} className='select-none pl-6 flex flex-row items-center justify-start w-full gap-3 rounded-2xl hover:bg-black/15 py-2'>
          <Image
            src="/img/interface/nav/flag/ru.png"
            alt="flag"
            width={20}
            height={50}
          />
          <span>Русский</span>
        </li>
      </ul>
    </div>
  )
}

const SelectTop: React.FC<SelectProps> = ({ value, setValue }) => {
  const { getTranslation } = useTranslation();
  return (
    <div className='p-[1px] rounded-[0.625rem]' style={{ background: "linear-gradient(150deg,rgba(68, 72, 113, 1),rgba(39, 49, 87, 1))" }}>
      <div className="flex-row flex items-center justify-between rounded-[0.625rem] bg-[#263056] px-2 py-2">
        <div onClick={() => setValue('all')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "all" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06879 3.29359V5.78787C7.06879 5.9944 7.028 6.1989 6.94877 6.38963C6.86954 6.58036 6.75343 6.75356 6.60709 6.8993C6.46075 7.04504 6.28708 7.16045 6.09603 7.2389C5.90498 7.31735 5.70031 7.35729 5.49379 7.35645H3.01236C2.80639 7.3577 2.60228 7.31734 2.41228 7.23781C2.22229 7.15827 2.0503 7.04119 1.90664 6.89359C1.76108 6.74873 1.64577 6.57638 1.56741 6.38656C1.48905 6.19674 1.44921 5.99323 1.45021 5.78787V3.30002C1.45021 2.88512 1.61459 2.48712 1.90736 2.19314C2.20014 1.89916 2.59746 1.73315 3.01236 1.73145H5.50021C5.70597 1.73164 5.90964 1.77265 6.09944 1.8521C6.28924 1.93155 6.46139 2.04787 6.60593 2.1943C6.75246 2.33743 6.8689 2.50841 6.94838 2.6972C7.02787 2.88598 7.06881 3.08875 7.06879 3.29359ZM13.9795 3.30002V5.78787C13.9762 6.20175 13.8107 6.59781 13.5187 6.89107C13.2266 7.18433 12.8312 7.35141 12.4174 7.35645H9.92307C9.50727 7.3539 9.10864 7.1903 8.81093 6.90002C8.66546 6.75376 8.55026 6.58025 8.47194 6.38941C8.39362 6.19857 8.35371 5.99416 8.3545 5.78787V3.30002C8.35362 3.0941 8.39414 2.89011 8.47365 2.70016C8.55316 2.51021 8.67005 2.33819 8.81736 2.1943C8.9619 2.04787 9.13405 1.93155 9.32385 1.8521C9.51364 1.77265 9.71732 1.73164 9.92307 1.73145H12.4109C12.8259 1.73481 13.2229 1.90114 13.5164 2.19458C13.8098 2.48802 13.9761 2.88505 13.9795 3.30002ZM13.9795 10.2107V12.6986C13.9762 13.1125 13.8107 13.5085 13.5187 13.8018C13.2266 14.0951 12.8312 14.2621 12.4174 14.2672H9.92307C9.50463 14.2714 9.10102 14.1123 8.79807 13.8236C8.65202 13.6778 8.53645 13.5043 8.45809 13.3134C8.37973 13.1225 8.34015 12.9178 8.34164 12.7114V10.2236C8.3408 10.0177 8.38133 9.8137 8.46084 9.62375C8.54036 9.43381 8.65722 9.26178 8.8045 9.11788C8.94906 8.97147 9.12122 8.85517 9.31101 8.77573C9.5008 8.69628 9.70446 8.65525 9.91022 8.65502H12.3981C12.813 8.65838 13.2101 8.82472 13.5035 9.11816C13.7969 9.41159 13.9633 9.80862 13.9666 10.2236L13.9795 10.2107ZM7.06879 10.2172V12.705C7.06373 13.12 6.89576 13.5163 6.60112 13.8086C6.30648 14.1008 5.90877 14.2655 5.49379 14.2672H3.01236C2.80698 14.268 2.60346 14.2282 2.41355 14.15C2.22363 14.0718 2.05109 13.9567 1.90586 13.8115C1.76063 13.6663 1.6456 13.4937 1.56739 13.3038C1.48919 13.1139 1.44936 12.9104 1.45021 12.705V10.2172C1.45187 9.80217 1.61658 9.40447 1.90882 9.10983C2.20105 8.81518 2.5974 8.64722 3.01236 8.64216H5.50021C5.91706 8.64575 6.31605 8.81181 6.61236 9.10502C6.90556 9.4008 7.06967 9.80068 7.06879 10.2172Z" fill="white" />
            </svg>
            {getTranslation('components.interface.select.top.all')}
          </div>
        </div>
        <div onClick={() => setValue('top')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "top" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.6498 10.0787L8.87699 10.8118C8.99387 10.8862 9.10819 10.8836 9.21997 10.8042C9.33174 10.7247 9.37148 10.6157 9.33918 10.4771L9.02043 9.09057L10.1042 8.15025C10.2104 8.05463 10.2423 7.94052 10.1998 7.80792C10.1573 7.67532 10.0617 7.60349 9.91293 7.59244L8.49449 7.48088L7.93668 6.15807C7.88355 6.03057 7.78793 5.96682 7.6498 5.96682C7.51168 5.96682 7.41605 6.03057 7.36293 6.15807L6.80512 7.48088L5.38668 7.59244C5.23793 7.60307 5.1423 7.67489 5.0998 7.80792C5.0573 7.94094 5.08918 8.05505 5.19543 8.15025L6.27918 9.09057L5.96043 10.4771C5.92856 10.6153 5.9685 10.7243 6.08028 10.8042C6.19205 10.8841 6.30617 10.8866 6.42262 10.8118L7.6498 10.0787ZM5.51418 13.6009H3.8248C3.47418 13.6009 3.17413 13.4761 2.92465 13.2267C2.67518 12.9772 2.55023 12.6769 2.5498 12.3259V10.6365L1.32262 9.39338C1.20574 9.26588 1.11543 9.1252 1.05168 8.97135C0.98793 8.8175 0.956055 8.66068 0.956055 8.50088C0.956055 8.3415 0.98793 8.18489 1.05168 8.03104C1.11543 7.87719 1.20574 7.7363 1.32262 7.60838L2.5498 6.36525V4.67588C2.5498 4.32525 2.67475 4.0252 2.92465 3.77573C3.17455 3.52625 3.4746 3.4013 3.8248 3.40088H5.51418L6.7573 2.17369C6.8848 2.05682 7.02569 1.9665 7.17997 1.90275C7.33424 1.839 7.49085 1.80713 7.6498 1.80713C7.80918 1.80713 7.966 1.839 8.12028 1.90275C8.27455 1.9665 8.41523 2.05682 8.5423 2.17369L9.78543 3.40088H11.4748C11.8254 3.40088 12.1257 3.52583 12.3756 3.77573C12.6255 4.02563 12.7502 4.32568 12.7498 4.67588V6.36525L13.977 7.60838C14.0939 7.73588 14.1842 7.87677 14.2479 8.03104C14.3117 8.18532 14.3436 8.34193 14.3436 8.50088C14.3436 8.66025 14.3117 8.81708 14.2479 8.97135C14.1842 9.12563 14.0939 9.2663 13.977 9.39338L12.7498 10.6365V12.3259C12.7498 12.6765 12.6251 12.9768 12.3756 13.2267C12.1261 13.4766 11.8259 13.6013 11.4748 13.6009H9.78543L8.5423 14.8281C8.4148 14.9449 8.27413 15.0353 8.12028 15.099C7.96643 15.1628 7.8096 15.1946 7.6498 15.1946C7.49043 15.1946 7.33382 15.1628 7.17997 15.099C7.02612 15.0353 6.88523 14.9449 6.7573 14.8281L5.51418 13.6009Z" fill="white" />
            </svg>
            {getTranslation('components.interface.select.top.top')}
          </div>
        </div>
      </div>
    </div>
  )
}

const SelectPage = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2 pl-[1.0625rem] pr-[1.0625rem] p-0 h-[2.625rem] rounded-xl border-[0.84px] border-[#ffffff]/[.10] bg-[#22276E]/[.30]">
      <div className="flex items-center gap-1">
        <Image src={'/img/interface/nav/cases.png'} alt={'Cases'} width={29} height={22} />
        <div className="text-white text-[.8125rem] font-medium leading-[normal]">Cases</div>
      </div>
      <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.28888 4.86865L4.84444 1.13128L0.39999 4.86865" stroke="white" strokeWidth="0.808081" />
      </svg>
    </div>
  )
}

const SelectMoneyValue: React.FC<SelectProps> = ({ value, setValue }) => {
  return (
    <div className="flex items-start justify-around w-full gap-2 h-[2.5rem] sm:h-[3.125rem]">
      <div
        onClick={() => { setValue('0'); if (value == "0") setValue('') }}
        className={((value == "0" ? "bg-[linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1))] w-[3.5rem] sm:w-[4.75rem] p-[1px]" : "opacity-[0.6]")) + " cursor-pointer flex justify-center items-center gap-2.5 self-stretch rounded-[0.625rem] text-white text-[.8rem] sm:text-[.9375rem] font-medium leading-[normal]"}>
        <div className={((value == "0" ? "bg-[#242f54]" : "")) + " w-full h-full flex justify-center items-center rounded-[0.625rem] py-1 px-2 sm:py-2 sm:px-3"}>
          $ 0-5
        </div>
      </div>
      <div
        onClick={() => { setValue('5'); if (value == "5") setValue('') }}
        className={((value == "5" ? "bg-[linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1))] w-[3.9rem] sm:w-[4.9rem] p-[1px]" : "opacity-[0.6]")) + " cursor-pointer flex justify-center items-center gap-2.5 self-stretch rounded-[0.625rem] text-white text-[.8rem] sm:text-[.9375rem] font-medium leading-[normal]"}>
        <div className={((value == "5" ? "bg-[#242f54]" : "")) + " w-full h-full flex justify-center items-center rounded-[0.625rem] py-1 px-2 sm:py-2 sm:px-3"}>
          $ 5-15
        </div>
      </div>
      <div
        onClick={() => { setValue('15'); if (value == "15") setValue('') }}
        className={((value == "15" ? "bg-[linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1))] w-[4.8rem] sm:w-[5.9rem] p-[1px]" : "opacity-[0.6]")) + " cursor-pointer flex justify-center items-center gap-2.5 self-stretch rounded-[0.625rem] text-white text-[.8rem] sm:text-[.9375rem] font-medium leading-[normal]"}>
        <div className={((value == "15" ? "bg-[#242f54]" : "")) + " w-full h-full flex justify-center items-center rounded-[0.625rem] py-1 px-2 sm:py-2 sm:px-3"}>
          $ 15-50
        </div>
      </div>
      <div
        onClick={() => { setValue('50'); if (value == "50") setValue('') }}
        className={((value == "50" ? "bg-[linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1))] w-[4.8rem] sm:w-[5.9rem] p-[1px]" : "opacity-[0.6]")) + " cursor-pointer flex justify-center items-center gap-2.5 self-stretch rounded-[0.625rem] text-white text-[.8rem] sm:text-[.9375rem] font-medium leading-[normal]"}>
        <div className={((value == "50" ? "bg-[#242f54]" : "")) + " w-full h-full flex justify-center items-center rounded-[0.625rem] py-1 px-2 sm:py-2 sm:px-3"}>
          $ 50-100
        </div>
      </div>
      <div
        onClick={() => { setValue('100'); if (value == "100") setValue('') }}
        className={((value == "100" ? "bg-[linear-gradient(150deg,rgba(68,72,113,1),rgba(39,49,87,1))] w-[3.9rem] sm:w-[4.9rem] p-[1px]" : "opacity-[0.6]")) + " cursor-pointer flex justify-center items-center gap-2.5 self-stretch rounded-[0.625rem] text-white text-[.8rem] sm:text-[.9375rem] font-medium leading-[normal]"}>
        <div className={((value == "100" ? "bg-[#242f54]" : "")) + " w-full h-full flex justify-center items-center rounded-[0.625rem] py-1 px-2 sm:py-2 sm:px-3"}>
          $ 100+
        </div>
      </div>
    </div>
  )
}

const SelectContent: React.FC<SelectProps> = ({ value, setValue }) => {
  const { getTranslation } = useTranslation();
  return (
    <div className='p-[1px] rounded-[0.625rem]' style={{ background: "linear-gradient(150deg,rgba(68, 72, 113, 1),rgba(39, 49, 87, 1))" }}>
      <div className="flex-row flex items-center justify-between rounded-[0.625rem] bg-[#263056] px-1 py-1">
        <div onClick={() => setValue('cases')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "cases" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06879 3.29359V5.78787C7.06879 5.9944 7.028 6.1989 6.94877 6.38963C6.86954 6.58036 6.75343 6.75356 6.60709 6.8993C6.46075 7.04504 6.28708 7.16045 6.09603 7.2389C5.90498 7.31735 5.70031 7.35729 5.49379 7.35645H3.01236C2.80639 7.3577 2.60228 7.31734 2.41228 7.23781C2.22229 7.15827 2.0503 7.04119 1.90664 6.89359C1.76108 6.74873 1.64577 6.57638 1.56741 6.38656C1.48905 6.19674 1.44921 5.99323 1.45021 5.78787V3.30002C1.45021 2.88512 1.61459 2.48712 1.90736 2.19314C2.20014 1.89916 2.59746 1.73315 3.01236 1.73145H5.50021C5.70597 1.73164 5.90964 1.77265 6.09944 1.8521C6.28924 1.93155 6.46139 2.04787 6.60593 2.1943C6.75246 2.33743 6.8689 2.50841 6.94838 2.6972C7.02787 2.88598 7.06881 3.08875 7.06879 3.29359ZM13.9795 3.30002V5.78787C13.9762 6.20175 13.8107 6.59781 13.5187 6.89107C13.2266 7.18433 12.8312 7.35141 12.4174 7.35645H9.92307C9.50727 7.3539 9.10864 7.1903 8.81093 6.90002C8.66546 6.75376 8.55026 6.58025 8.47194 6.38941C8.39362 6.19857 8.35371 5.99416 8.3545 5.78787V3.30002C8.35362 3.0941 8.39414 2.89011 8.47365 2.70016C8.55316 2.51021 8.67005 2.33819 8.81736 2.1943C8.9619 2.04787 9.13405 1.93155 9.32385 1.8521C9.51364 1.77265 9.71732 1.73164 9.92307 1.73145H12.4109C12.8259 1.73481 13.2229 1.90114 13.5164 2.19458C13.8098 2.48802 13.9761 2.88505 13.9795 3.30002ZM13.9795 10.2107V12.6986C13.9762 13.1125 13.8107 13.5085 13.5187 13.8018C13.2266 14.0951 12.8312 14.2621 12.4174 14.2672H9.92307C9.50463 14.2714 9.10102 14.1123 8.79807 13.8236C8.65202 13.6778 8.53645 13.5043 8.45809 13.3134C8.37973 13.1225 8.34015 12.9178 8.34164 12.7114V10.2236C8.3408 10.0177 8.38133 9.8137 8.46084 9.62375C8.54036 9.43381 8.65722 9.26178 8.8045 9.11788C8.94906 8.97147 9.12122 8.85517 9.31101 8.77573C9.5008 8.69628 9.70446 8.65525 9.91022 8.65502H12.3981C12.813 8.65838 13.2101 8.82472 13.5035 9.11816C13.7969 9.41159 13.9633 9.80862 13.9666 10.2236L13.9795 10.2107ZM7.06879 10.2172V12.705C7.06373 13.12 6.89576 13.5163 6.60112 13.8086C6.30648 14.1008 5.90877 14.2655 5.49379 14.2672H3.01236C2.80698 14.268 2.60346 14.2282 2.41355 14.15C2.22363 14.0718 2.05109 13.9567 1.90586 13.8115C1.76063 13.6663 1.6456 13.4937 1.56739 13.3038C1.48919 13.1139 1.44936 12.9104 1.45021 12.705V10.2172C1.45187 9.80217 1.61658 9.40447 1.90882 9.10983C2.20105 8.81518 2.5974 8.64722 3.01236 8.64216H5.50021C5.91706 8.64575 6.31605 8.81181 6.61236 9.10502C6.90556 9.4008 7.06967 9.80068 7.06879 10.2172Z" fill="white" />
            </svg>
            {getTranslation('components.interface.select.content.cases')}
          </div>
        </div>
        <div onClick={() => setValue('contracts')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "contracts" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            {getTranslation('components.interface.select.content.contracts')}
          </div>
        </div>
        <div onClick={() => setValue('upgrade')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "upgrade" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            {getTranslation('components.interface.select.content.upgrade')}
          </div>
        </div>
        <div onClick={() => setValue('cards')}>
          <div className={"cursor-pointer flex flex-row items-center rounded-[0.625rem] gap-1 py-2 px-4 " + (value == "cards" ? "bg-[#7e50ff] shadow-[0_0_17px_0_rgba(139,50,252,0.75)]" : "")}>
            {getTranslation('components.interface.select.content.cards')}
          </div>
        </div>
      </div>
    </div>
  )
}

const SelectCount: React.FC<SelectProps> = ({ value, setValue }) => {
  return (
    <div className="flex items-center rounded-xl gap-1">
      <div onClick={() => setValue(1)}
        className={(value == 1 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6 rounded-tl-xl rounded-bl-xl"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x1</div>
      </div>
      <div onClick={() => setValue(2)}
        className={(value == 2 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x2</div>
      </div>
      <div onClick={() => setValue(3)}
        className={(value == 3 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x3</div>
      </div>
      <div onClick={() => setValue(4)}
        className={(value == 4 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x4</div>
      </div>
      <div onClick={() => setValue(5)}
        className={(value == 5 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x5</div>
      </div>
      <div onClick={() => setValue(10)}
        className={(value == 10 ? "bg-[#7e50ff] shadow-[0_0_24px_0_rgba(139,50,252,0.75)]" : " bg-[#22276e]/[.60]") + " cursor-pointer flex justify-center items-center gap-6 self-stretch py-3 px-4 sm:px-6 rounded-tr-xl rounded-br-xl"}>
        <div className="text-[#fffbff] text-center text-sm font-semibold leading-[normal]">x10</div>
      </div>
    </div>
  )
}

const SelectCustom: React.FC<SelectCustomProps> = ({ value, setValue, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div onClick={() => setIsOpen(!isOpen)} className="w-full py-4 px-6 gap-1 bg-[#7e50ff] rounded-[0.9375rem] flex flex-row items-center justify-between shadow-[0_0_34px_0_rgba(139,50,252,0.75)]">
        <div className="flex items-center flex-row gap-1 h-[21px]">
          {items.find(item => item.value === value)?.div}
        </div>
        <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <path d="M8.99988 3.5C8.80097 3.5 8.6102 3.57902 8.46955 3.71967C8.3289 3.86032 8.24988 4.05109 8.24988 4.25C8.24988 4.44891 8.3289 4.63968 8.46955 4.78033C8.6102 4.92098 8.80097 5 8.99988 5C9.19879 5 9.38956 4.92098 9.53021 4.78033C9.67086 4.63968 9.74988 4.44891 9.74988 4.25C9.74988 4.05109 9.67086 3.86032 9.53021 3.71967C9.38956 3.57902 9.19879 3.5 8.99988 3.5ZM8.99988 8.75C8.80097 8.75 8.6102 8.82902 8.46955 8.96967C8.3289 9.11032 8.24988 9.30109 8.24988 9.5C8.24988 9.69891 8.3289 9.88968 8.46955 10.0303C8.6102 10.171 8.80097 10.25 8.99988 10.25C9.19879 10.25 9.38956 10.171 9.53021 10.0303C9.67086 9.88968 9.74988 9.69891 9.74988 9.5C9.74988 9.30109 9.67086 9.11032 9.53021 8.96967C9.38956 8.82902 9.19879 8.75 8.99988 8.75ZM8.99988 14C8.80097 14 8.6102 14.079 8.46955 14.2197C8.3289 14.3603 8.24988 14.5511 8.24988 14.75C8.24988 14.9489 8.3289 15.1397 8.46955 15.2803C8.6102 15.421 8.80097 15.5 8.99988 15.5C9.19879 15.5 9.38956 15.421 9.53021 15.2803C9.67086 15.1397 9.74988 14.9489 9.74988 14.75C9.74988 14.5511 9.67086 14.3603 9.53021 14.2197C9.38956 14.079 9.19879 14 8.99988 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <div className={(isOpen ? "flex" : "hidden") + " rounded-2xl cursor-pointer z-30 p-5 absolute inset-x-0 top-14 gap-3 flex-col items-center justify-center bg-[#19192E]"} style={{ background: "linear-gradient(150deg,rgba(25,25,46,1),rgba(25,25,46,1)) padding-box, linear-gradient(150deg,rgba(28,27,47,1),rgba(14,16,38,1)) border-box", border: "2px solid transparent" }}>
        {items.map((item, index) => (
          <div
            onClick={() => { setValue(item.value); setIsOpen(false) }}
            key={index}
            className={(value == item.value ? "bg-[#7e50ff] shadow-[0_0_16px_0_rgba(139,50,252,0.75)]" : style.selectButton) + " rounded-[12px] py-5 flex flex-row items-center w-full justify-center gap-1 h-5"}>
            {item.div}
          </div>
        ))}
      </div>
    </div>

  )
}

const SelectPages = ({ items }: { items: ListItemProps[] }) => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useSelectPage(isOpen);

  return (
    <div className='relative w-full' ref={scope}>
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className='select-none cursor-pointer h-[59px] flex items-center w-full max-w-[400px] shadow-[0_0_34px_0_rgba(139,50,252,0.75)] justify-between space-x-2 px-6 bg-[#7e50ff] rounded-[0.9375rem]'
        style={{

        }}
      >
        <div className='flex items-center justify-start gap-2'>
          {items[value].div}
        </div>
        <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
            <path d="M8.99988 3.5C8.80097 3.5 8.6102 3.57902 8.46955 3.71967C8.3289 3.86032 8.24988 4.05109 8.24988 4.25C8.24988 4.44891 8.3289 4.63968 8.46955 4.78033C8.6102 4.92098 8.80097 5 8.99988 5C9.19879 5 9.38956 4.92098 9.53021 4.78033C9.67086 4.63968 9.74988 4.44891 9.74988 4.25C9.74988 4.05109 9.67086 3.86032 9.53021 3.71967C9.38956 3.57902 9.19879 3.5 8.99988 3.5ZM8.99988 8.75C8.80097 8.75 8.6102 8.82902 8.46955 8.96967C8.3289 9.11032 8.24988 9.30109 8.24988 9.5C8.24988 9.69891 8.3289 9.88968 8.46955 10.0303C8.6102 10.171 8.80097 10.25 8.99988 10.25C9.19879 10.25 9.38956 10.171 9.53021 10.0303C9.67086 9.88968 9.74988 9.69891 9.74988 9.5C9.74988 9.30109 9.67086 9.11032 9.53021 8.96967C9.38956 8.82902 9.19879 8.75 8.99988 8.75ZM8.99988 14C8.80097 14 8.6102 14.079 8.46955 14.2197C8.3289 14.3603 8.24988 14.5511 8.24988 14.75C8.24988 14.9489 8.3289 15.1397 8.46955 15.2803C8.6102 15.421 8.80097 15.5 8.99988 15.5C9.19879 15.5 9.38956 15.421 9.53021 15.2803C9.67086 15.1397 9.74988 14.9489 9.74988 14.75C9.74988 14.5511 9.67086 14.3603 9.53021 14.2197C9.38956 14.079 9.19879 14 8.99988 14Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </motion.div>
      <ul
        className={"select-none rounded-2xl cursor-pointer z-30 p-5 max-w-[400px] absolute inset-x-0 top-16 gap flex-col items-center space-y-4 justify-center bg-[#19192E]"}
        style={{
          background: "linear-gradient(150deg,rgba(25,25,46,1),rgba(25,25,46,1)) padding-box, linear-gradient(150deg,rgba(28,27,47,1),rgba(14,16,38,1)) border-box",
          border: "2px solid transparent",
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        {items.map((item, index) => {
          return <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => { setValue(index); setIsOpen(!isOpen) }}
            className={(value == index ? "bg-[#7e50ff] shadow-[0_0_16px_0_rgba(139,50,252,0.75)]" : style.selectButton) + ' h-[59px] flex gap-2 items-center justify-center rounded-[12px] py-5'}
          >
            <Link href={item.value} className='flex gap-2 items-center justify-center'>
              {item.div}
            </Link>
          </motion.li>
        })}
      </ul>
    </div>
  )
}

export { SelectPages, SelectCustom, SelectLanguage, SelectTop, SelectPage, SelectMoneyValue, SelectContent, SelectCount }
