import React, { ReactNode, ForwardedRef } from "react";
import './Button.css'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 
    children: ReactNode; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref} 
                style= {{
                    border:'2px solid transparent',
                    background: 'linear-gradient(#11162E, #11162E) padding-box, linear-gradient(to right, #1F79FF, #1FA1FF, #6A12FA, #B8A6FF ) border-box',
                }}
                className="max-w-[177px] min-h-[56px] py-[12px] px-[9px]   rounded-2xl bg-[#11162E4D]  text-[#F9FAFB] hover:bg-[#11162E] hover:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]"
                {...props}
            >
                {children}
            </button>
        );
    }
);


export default Button