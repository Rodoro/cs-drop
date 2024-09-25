import React, {ButtonHTMLAttributes, ForwardedRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref} 
                className={`flex items-center px-[13px] h-[57px] rounded-2xl text-[#AABCF9] default:text-[#AABCF9]
                    hover:text-[#D0DBFF] hover:bg-[#22276E] 
                    hover:border-[1.5px] hover:border-[#FFFFFF26] 
                    active:text-[#FFFFFF] 
                    active:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] 
                    disabled:text-[#AABCF9] ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button'; 

export default Button;