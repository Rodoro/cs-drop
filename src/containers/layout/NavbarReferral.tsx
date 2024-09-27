'use client'
import { CartButton } from "@/components/cart/Cart"
import { IoDocuments } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { SelectPages } from "@/components/interface/Select";
import { HiUser } from "react-icons/hi2";
import { PiGraphBold, PiTreeStructureFill } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";

const NavbarReferral = () => {
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
                    <CartButton href={"/referral"} isActive={pathname == '/referral'} >
                        <PiGraphBold className="text-[26px]" />
                        Statistics
                    </CartButton>
                    <CartButton href={"/referral/structure"} isActive={pathname == '/referral/structure'}>
                        <PiTreeStructureFill className="text-[26px]" />
                        Structure
                    </CartButton>
                    <CartButton href={"/referral/description"} isActive={pathname == '/referral/description'}>
                        <IoDocuments className="text-[26px]" />
                        Description
                    </CartButton>
                    <CartButton href={"/referral/transactions"} isActive={pathname == '/referral/transactions'}>
                        <LuHistory className="text-[26px]" />
                        Transactions
                    </CartButton>
                </div>
                <div className="flex flex-col items-end">
                    {/* TODO:Logout из системы */}
                </div>
            </div>
            <div className="flex xl:hidden w-full justify-between items-center">
                <SelectPages
                    url={pathname}
                    items={[
                        { value: '/referral', div: <><PiGraphBold className="text-[26px]" />Statistics</> },
                        { value: '/referral/structure', div: <><PiTreeStructureFill className="text-[26px]" />Structure</> },
                        { value: '/referral/description', div: <><IoDocuments className="text-[26px]" />Description</> },
                        { value: '/referral/transactions', div: <><LuHistory className="text-[26px]" />Transactions</> },
                    ]}
                />
                <div className="flex flex-col items-end min-w-[130px]">
                    {/* TODO:Logout из системы */}
                </div>
            </div>
        </>

    )
}

export default NavbarReferral
