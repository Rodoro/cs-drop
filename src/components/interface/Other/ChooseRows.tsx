import React, { useState, ForwardedRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ChooseRows = React.forwardRef<HTMLButtonElement>((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(10);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (value: number) => {
        setSelectedValue(value);
        setIsOpen(false); 
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    ref={ref}
                    onClick={toggleDropdown}
                    className="flex items-center w-[46px] h-[30px] rounded-md px-[7px] py-[8px] bg-[#22276E99] text-sm text-[#AABCF9] hover:bg-[#22276E] hover:text-[#D0DBFF] active:bg-[#7E50FF] active:text-[##FFFFFF] active:shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]"
                >
                    {selectedValue}
                    {isOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-[#22276E99] ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" onClick={() => handleSelect(5)} className="block text-white hover:bg-[#22276E]" role="menuitem">
                            5
                        </a>
                        <a href="#" onClick={() => handleSelect(10)} className="block text-white hover:bg-[#22276E]" role="menuitem">
                            10
                        </a>
                        <a href="#" onClick={() => handleSelect(20)} className="block text-white hover:bg-[#22276E]" role="menuitem">
                            20
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
});


export default ChooseRows;