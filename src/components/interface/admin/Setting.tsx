import React from "react";
import { IoMdSettings } from "react-icons/io";


type SettingProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Setting: React.FC<SettingProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <IoMdSettings className=" text-[20px]" />
        </button>
    );
}

Setting.displayName = 'Setting';
export default Setting;