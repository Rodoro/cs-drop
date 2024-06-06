"use client"
import React, { useState } from 'react'
import { InputSearch } from './interface/Input'
import { SelectMoneyValue } from './interface/Select'
import Link from 'next/link'
import Case from './cart/Case'
import { useTranslation } from '@/hook/useLanguageStore'

const CasesList = () => {
    const [valueMoneyCase, setValueMoneyCase] = useState("0");
    const { getTranslation } = useTranslation();
    return (
        <div>
            <div className="flex items-center gap-1.5 opacity-[0.6] my-8">
                <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                        <path d="M8.56784 3.92623V5.37523H12.4318V3.92623C12.4318 3.79813 12.381 3.67528 12.2904 3.5847C12.1998 3.49412 12.0769 3.44323 11.9488 3.44323H9.05084C8.92274 3.44323 8.79989 3.49412 8.70931 3.5847C8.61873 3.67528 8.56784 3.79813 8.56784 3.92623ZM6.63584 5.37523V3.92623C6.63584 2.59315 7.71776 1.51123 9.05084 1.51123H11.9488C13.2819 1.51123 14.3638 2.59315 14.3638 3.92623V5.37523H16.2958C17.3206 5.37523 18.3035 5.78233 19.0281 6.50697C19.7527 7.23161 20.1598 8.21443 20.1598 9.23923V10.2052C20.1598 10.9738 19.8545 11.7109 19.311 12.2544C18.7676 12.7979 18.0304 13.1032 17.2618 13.1032H12.4318V12.1372C12.4318 11.881 12.3301 11.6353 12.1489 11.4542C11.9677 11.273 11.722 11.1712 11.4658 11.1712H9.53384C9.27764 11.1712 9.03194 11.273 8.85078 11.4542C8.66962 11.6353 8.56784 11.881 8.56784 12.1372V13.1032H3.73784C2.96925 13.1032 2.23213 12.7979 1.68865 12.2544C1.14517 11.7109 0.839844 10.9738 0.839844 10.2052V9.23923C0.839844 8.21443 1.24694 7.23161 1.97158 6.50697C2.69622 5.78233 3.67905 5.37523 4.70384 5.37523H6.63584ZM0.839844 14.0692V16.9672C0.839844 17.992 1.24694 18.9748 1.97158 19.6995C2.69622 20.4241 3.67905 20.8312 4.70384 20.8312H16.2958C17.3206 20.8312 18.3035 20.4241 19.0281 19.6995C19.7527 18.9748 20.1598 17.992 20.1598 16.9672V14.0692C19.3523 14.6759 18.3496 15.0352 17.2618 15.0352H12.4318V16.0012C12.4318 16.2574 12.3301 16.5031 12.1489 16.6843C11.9677 16.8655 11.722 16.9672 11.4658 16.9672H9.53384C9.27764 16.9672 9.03194 16.8655 8.85078 16.6843C8.66962 16.5031 8.56784 16.2574 8.56784 16.0012V15.0352H3.73784C2.69253 15.0368 1.67517 14.6977 0.839844 14.0692Z" fill="white" />
                    </g>
                </svg>
                <div className="w-[3.25rem] h-[1.0625rem] text-white font-medium leading-[normal]">{getTranslation('components.casesList.title')}</div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-8 flex-col lg:flex-row w-full sm:w-auto">
                    <InputSearch />
                    <SelectMoneyValue value={valueMoneyCase} setValue={setValueMoneyCase} />
                </div>
                <div className="hidden xl:flex items-start gap-2.5 rounded-[0.9375rem] border border-[#ffffff]/[.30] bg-[#242f54]/[.60]">
                    <Link href={''}>
                        <svg width={50} height={51} viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <path d="M25.6702 18.7696C25.3308 18.6052 24.9272 18.6497 24.6316 18.8838L20.1134 22.4591H16.984C16.4407 22.4591 16 22.8994 16 23.4429V27.8998C16 28.4431 16.4407 28.8833 16.984 28.8833H20.1132L24.6316 32.4588C24.8089 32.5989 25.0244 32.6714 25.2421 32.6714C25.3881 32.6714 25.534 32.6384 25.6702 32.573C26.0105 32.4086 26.2261 32.0642 26.2261 31.6874V19.6553C26.2256 19.278 26.0098 18.9336 25.6702 18.7696Z" fill="white" />
                                <path d="M29.8405 22.1882C29.4562 21.8038 28.8331 21.8038 28.4495 22.1882C28.0651 22.5725 28.0651 23.1955 28.4495 23.5792C29.6027 24.7326 29.6027 26.6096 28.4495 27.763C28.0651 28.1471 28.0651 28.7702 28.4495 29.1538C28.6412 29.3464 28.8934 29.4425 29.145 29.4425C29.3972 29.4425 29.6483 29.3464 29.8405 29.1538C30.7713 28.223 31.2836 26.9868 31.2836 25.671C31.2836 24.3554 30.7706 23.1183 29.8405 22.1882Z" fill="white" />
                                <path d="M31 19.6371C30.6161 20.0214 30.6161 20.6445 31 21.0286C33.56 23.5884 33.56 27.7537 31 30.3135C30.6161 30.6976 30.6161 31.3209 31 31.7046C31.1921 31.8967 31.4439 31.9928 31.6955 31.9928C31.9477 31.9928 32.1993 31.8967 32.3914 31.7046C35.7183 28.3777 35.7183 22.9633 32.3914 19.6364C32.0073 19.2532 31.3843 19.2532 31 19.6371Z" fill="white" />
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='flex mt-12 flex-row justify-start' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "8px", rowGap: "32px" }}>
                <Case />
                <Case />
                <Case />
                <Case />
                <Case />
                <Case />
            </div>
        </div>
    )
}

export default CasesList
