import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props}) => {
    return (
        <button {...props} className={`flex flex-row items-center font-sans text-xm font-semibold text-[#f9fafb] py-2 px-3 rounded-xl bg-blue-500 hover:bg-blue-600 bg-[rgba(17,22,46,0.3)] ${className}`}>
            {children}
        </button>
    )
}

export default Button