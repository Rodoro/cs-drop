import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { IoDocuments, IoEye } from "react-icons/io5";

type Settingprops = {
    onClick1: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Still: React.FC<Settingprops> = ({ onClick1, onClick2 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const toggleSettingsMenu = () => {
        if (isOpen) {
            setIsExiting(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsExiting(false);
            }, 300); // Длительность должна совпадать с `duration-300`
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="relative">
            <button onClick={toggleSettingsMenu}>
                <IoEllipsisVertical className="text-[#69648F] text-[20px]" />
            </button>
            {isOpen && (
                <div 
                    className={`shadow-[4px_4px_34px_0_rgba(139,50,252,0.2) 
                                bg-[#171741] w-[148px] h-[99px] 
                                absolute left-0 top-full z-50 rounded-[18px] 
                                border border-[#FFFFFF26] 
                                transition-all 
                                duration-300 py-[17px] px-[10px]
                                ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                    style={{
                        border:'2px solid transparent',
                        background: 'linear-gradient(to right, #2B2162, #171741) padding-box, linear-gradient(to right, #FFFFFF26, #FFFFFF01) border-box',
                    }}
                >
                    <div>
                        {/* //FIX: Больше гибкости окну. Сделать где нужно кнопки, где нужно ссылки */}
                        <button onClick={onClick1} className="inline-block mb-[5px] text-[15px]">
                            <IoDocuments className="inline-block"/> <p className="inline-block">Duplicate</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={onClick2} className="inline-block text-[15px]">
                            <IoEye className="inline-block"/> <p className="inline-block">View</p>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Still.displayName = 'Still';
export default Still;