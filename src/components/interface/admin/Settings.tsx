import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoDocuments, IoEye } from "react-icons/io5";

type Settingprops = {
    onClick1: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Setting: React.FC<Settingprops> = ({onClick1, onClick2}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSettingsMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleSettingsMenu}>
                <IoMdSettings />
            </button>
            {isOpen && (
                <div>
                    <div>
                        <button onClick={onClick1}><IoDocuments /></button>
                        <p>Duplicate</p>
                    </div>
                    <div>
                        <button onClick={onClick2}><IoEye /></button>
                        <p>View</p>
                    </div>
                </div>
            )}
        </div>
    );
};

Setting.displayName = 'Setting';
export default Setting;