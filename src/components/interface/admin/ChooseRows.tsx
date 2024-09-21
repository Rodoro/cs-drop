import React, { useState, ForwardedRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface ChooseRowsProps {
    onChange: (value: number) => void;
}


const ChooseRows = React.forwardRef<HTMLButtonElement, ChooseRowsProps>((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(5);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleSelect = (value: number) => {
        setSelectedValue(value);
        props.onChange(value); 
        setIsOpen(false); 
    };

    return (
        <div className="relative inline-block">
            <div>
                <button
                    ref={ref}
                    onClick={toggleDropdown}
                    className="flex items-center w-[46px] h-[30px] rounded-md pl-[8px] py-[8px] bg-[#22276E99] text-sm text-[#AABCF9] hover:bg-[#22276E] hover:text-[#D0DBFF] active:bg-[#7E50FF] active:text-[#FFFFFF] active:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] transition-colors duration-300"
                >
                    {selectedValue}
                    {isOpen ? (
                        <IoIosArrowUp className="ml-1 transition-transform duration-200 transform rotate-0" />
                    ) : (
                        <IoIosArrowUp className="ml-1 transition-transform duration-200 transform rotate-180" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-[47px] rounded-md shadow-lg bg-[#22276E99] ring-1 ring-black ring-opacity-5 transition-opacity duration-200 ease-in-out">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <div onClick={() => handleSelect(5)} className="block text-white hover:bg-[#22276E] px-[19px] transition-colors duration-200" role="menuitem">
                            5
                        </div>
                        <div onClick={() => handleSelect(10)} className="block text-white hover:bg-[#22276E] px-[15px] transition-colors duration-200" role="menuitem">
                            10
                        </div>
                        <div onClick={() => handleSelect(20)} className="block text-white hover:bg-[#22276E] px-[15px] transition-colors duration-200" role="menuitem">
                            20
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

ChooseRows.displayName = 'ChooseRows'; 

export default ChooseRows 