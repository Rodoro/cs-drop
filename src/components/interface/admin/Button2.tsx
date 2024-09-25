import React, { ButtonHTMLAttributes, ForwardedRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}
const Button2 = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref} 
                style= {{
                    border:'2px solid transparent',
                    background: 'linear-gradient(#11162E, #11162E) padding-box, linear-gradient(to right, #1F79FF, #1FA1FF, #6A12FA, #B8A6FF ) border-box',
                }}
                className={`max-w-[177px] min-h-[56px] py-[12px] px-[9px] rounded-2xl bg-[#11162E4D]  text-[#F9FAFB] hover:bg-[#11162E] hover:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button2.displayName = 'Button2'

export default Button2