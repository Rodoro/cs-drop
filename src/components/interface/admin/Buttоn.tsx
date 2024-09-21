import React, { ReactNode, ForwardedRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 
    children: ReactNode; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref} 
                className="flex items-center max-w-[203px] min-h-[57px] rounded-2xl text-[#AABCF9] default:text-[#AABCF9]
                    hover:text-[#D0DBFF] hover:bg-[#22276E] 
                    hover:border-[1.5px] hover:border-[#FFFFFF26] 
                    active:bg-[#7E50FF] active:text-[#FFFFFF] 
                    active:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] 
                    disabled:text-[#AABCF9]"
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button'; 

export default Button;