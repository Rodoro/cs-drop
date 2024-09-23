import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const Select = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ checked, onChange }) => {
        return (
            <div className='w-6 h-6'>
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={onChange}
                    />
                    <div
                        className={`relative w-6 h-6 border-2 rounded-md border-[#AABCF9] transition duration-200 ease-in-out hover:bg-[#22276E] ${checked ? 'bg-[#7E50FF] border-[#7E50FF] shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]' : 'border-[#AABCF9]'}`}
                    >
                        {checked && (
                            <IoIosCheckmark className="absolute w-5 h-5 text-white top-0 left-0" />
                        )}
                    </div>
                </label>
            </div>
        );
    }
);

Select.displayName = 'Select';

export { Select } 