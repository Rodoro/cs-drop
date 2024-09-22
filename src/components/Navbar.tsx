import React from "react";
import Button from "./interface/admin/Buttоn";
import { GoHomeFill } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { FaGamepad } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
    return(
        <div className = "h-full w-[271px] bg-[#0A0D1D33]">
            <div></div>
            <div>
                <Button>Main <GoHomeFill/></Button>
                <Button>Batches <IoIosDocument/></Button>
                <Button>Games <FaGamepad/></Button>
                <Button>Items <FaBriefcase/></Button>
                <Button>Loot cases <GiTrophyCup/></Button>
                <Button>Staff <BiSupport/></Button>
                <Button>Users <FaUsers/></Button>
            </div>
        </div>
    )
}

export default Navbar