'use client'
import { CartButton } from "@/components/cart/Cart"
import { IoFootballOutline } from "react-icons/io5";
import { TbAwardFilled } from "react-icons/tb";
import { FaPiggyBank } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const NavbarMatch = () => {
    const pathname = usePathname()
    return (
        <div
            style={{
                background: 'linear-gradient(150deg,rgba(42,26,82,1),rgba(22,25,64,1)) padding-box, linear-gradient(150deg,rgba(71,55,105,1),rgba(22,25,64,1)) border-box',
                border: '2px solid transparent'
            }}
            className="w-full bg-red-300 px-9 py-[30px] flex gap-4 rounded-[30px]"
        >
            <CartButton href={"/match"} isActive={pathname == '/match'} >
                <IoFootballOutline className="text-[25px]" />
                All matches
            </CartButton>
            <CartButton href={"/match/rating"} isActive={pathname == '/match/rating'}>
                <TbAwardFilled className="text-[25px]" />
                Rating
            </CartButton>
            <CartButton href={"/match/mybets"} isActive={pathname == '/match/mybets'}>
                <FaPiggyBank className="text-[25px]" />
                My bets
            </CartButton>
            <CartButton href={"/match/previous"} isActive={pathname == '/match/previous'}>
                <FaArrowRotateLeft className="text-[25px] -rotate-45" />
                Previous matches
            </CartButton>
        </div>
    )
}

export default NavbarMatch
