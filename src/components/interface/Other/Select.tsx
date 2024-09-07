import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const Select = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    () => {
        const [isChecked, setIsChecked] = useState(false);

        const handleToggle = () => {
            setIsChecked(!isChecked);
        };
    
        return (
            <div className="">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <div
                        className={`relative w-6 h-6 border-2 rounded-md border-[#AABCF9] transition duration-200 ease-in-out hover:bg-[#22276E] ${isChecked ? 'bg-[#7E50FF]  border-[#7E50FF] shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]' : ' border-[#AABCF9]'}`}
                    >
                        {isChecked && (
                            <IoIosCheckmark className="absolute w-5 h-5 text-white  top-0 left-0" />
                        )}
                    </div>
                </label>
            </div>
        );
    }
);

export default Select;