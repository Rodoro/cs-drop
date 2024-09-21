import React from "react";
import { IoMdSettings } from "react-icons/io";
import Link from 'next/link'



const Setting: React.FC = () => {
    return (
        <Link href="/">
            <IoMdSettings className=" text-[20px]" />
        </Link>
    );
}

Setting.displayName = 'Setting';
export default Setting;