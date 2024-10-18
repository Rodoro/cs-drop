import React, { ButtonHTMLAttributes } from 'react'
import { FaDoorOpen } from "react-icons/fa6";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}

const ButtonExit: React.FC<ButtonProps> = ({className, ...props}) => {
    return (
        <button
            {...props}
            className={`flex items-center justify-self-center justify-center font-sans text-[#FF8585] py-2 px-3 rounded-xl w-[122px] h-[50px] transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}
            style={{
                border: '1px solid transparent',
                background: 'linear-gradient(#2A1B36, #2A1B36) padding-box, linear-gradient(to right, #6A3B4D, #38223C) border-box',
            }}
        >
            <p className='mr-[10px]'>Exit</p><FaDoorOpen className=''/>
        </button>
    )
}

ButtonExit.displayName = 'ButtonExit';
export default ButtonExit