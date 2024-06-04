import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
    return (
        <input
            type={type}
            className='border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            {...props}
        />
    )
}

const InputSearch = ({ ...props }: any) => {
    return (
        <div className="relative w-full sm:w-[482px] p-[1px] rounded-[0.9375rem]" { ...props } style={{background: "linear-gradient(150deg,rgba(68, 72, 113, 1),rgba(39, 49, 87, 1))"}}>
            <svg className='absolute inset-y-0 left-1 start-0 flex items-center ps-3 pt-3 pointer-events-none' width={40} height={40} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M18.375 18.5464L14.5687 14.7401M16.625 9.79639C16.625 13.6624 13.491 16.7964 9.625 16.7964C5.75901 16.7964 2.625 13.6624 2.625 9.79639C2.625 5.93039 5.75901 2.79639 9.625 2.79639C13.491 2.79639 16.625 5.93039 16.625 9.79639Z" stroke="white" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
            <input className="ps-12 flex items-center gap-3 py-4 px-5 w-full sm:w-[480px] h-[3.125rem] rounded-[0.9375rem] bg-[#263056] focus-visible:outline-none" placeholder="Search for cases" />
        </div>
    )
}

export { Input, InputSearch }