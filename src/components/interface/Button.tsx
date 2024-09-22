import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props}) => {
    return (
        <button {...props} 
            className={`flex items-center justify-self-center justify-center font-sans  text-[#FF8585] py-2 px-3 rounded-xl w-[122px] h-[50px] ${className}`}
            style= {{
                border:'1px solid transparent',
                background: 'linear-gradient(#2A1B36, #2A1B36) padding-box, linear-gradient(to right, #6A3B4D, #38223C) border-box',
            }}
        >
            {children}
        </button>
    )
}

export default Button