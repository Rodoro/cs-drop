'use client'
import { CartButton } from "@/components/cart/Cart"
import { IoFootballOutline } from "react-icons/io5";
import { TbAwardFilled } from "react-icons/tb";
import { FaPiggyBank } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import style from './NavbarMatch.module.css'
import { SelectPages } from "@/components/interface/Select";

const NavbarMatch = () => {
    const pathname = usePathname()
    return (
        <>
            <div
                style={{
                    background: 'linear-gradient(150deg,rgba(42,26,82,1),rgba(22,25,64,1)) padding-box, linear-gradient(150deg,rgba(71,55,105,1),rgba(22,25,64,1)) border-box',
                    border: '2px solid transparent'
                }}
                className="hidden xl:flex w-full bg-red-300 px-9 py-[30px] justify-between  gap-4 rounded-[30px]"
            >
                <div className="flex items-center justify-center gap-4">
                    <CartButton href={"/match"} isActive={pathname == '/match'} >
                        <IoFootballOutline className="text-[26px]" />
                        All matches
                    </CartButton>
                    <CartButton href={"/match/rating"} isActive={pathname == '/match/rating'}>
                        <TbAwardFilled className="text-[26px]" />
                        Rating
                    </CartButton>
                    <CartButton href={"/match/mybets"} isActive={pathname == '/match/mybets'}>
                        <FaPiggyBank className="text-[26px]" />
                        My bets
                    </CartButton>
                    <CartButton href={"/match/previous"} isActive={pathname == '/match/previous'}>
                        <FaArrowRotateLeft className="text-[26px] -rotate-45" />
                        Previous matches
                    </CartButton>
                </div>
                <div className="flex flex-col items-end">
                    <span className="opacity-50 text-[12px]">Overall in pool</span>
                    <span>
                        <span
                            className={"text-[30px] font-bold " + style.textGradient}
                        >12,425,832</span> <span className="font-bold">$</span>
                        {/* TODO:Откуда и куда это значение */}
                    </span>
                </div>
            </div>
            <div className="flex xl:hidden w-full justify-between items-center">
                <SelectPages
                    url={pathname}
                    items={[
                        { value: '/match', div: <><IoFootballOutline className="text-[26px]" />All matches</> },
                        { value: '/match/rating', div: <><TbAwardFilled className="text-[26px]" />Rating</> },
                        { value: '/match/mybets', div: <><FaPiggyBank className="text-[26px]" />My bets</> },
                        { value: '/match/previous', div: <><FaArrowRotateLeft className="text-[26px] -rotate-45" />Previous matches</> },
                    ]}
                />
                <div className="flex flex-col items-end min-w-[130px]">
                    <span className="opacity-50 text-[12px]">Overall in pool</span>
                    <span>
                        <span
                            className={"text-[18px] font-bold " + style.textGradient}
                        >12,425,832</span> <span className="font-bold">$</span>
                        {/* TODO:Откуда и куда это значение */}
                    </span>
                </div>
            </div>
        </>

    )
}

export default NavbarMatch
