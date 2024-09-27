'use client'
import { CartButton } from "@/components/cart/Cart"
import { IoWallet } from "react-icons/io5";
import { FaGun } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { SelectPages } from "@/components/interface/Select";
import { HiUser } from "react-icons/hi2";
import { RiFolderReceivedFill } from "react-icons/ri";

const NavbarProfile = () => {
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
                    <CartButton href={"/profile"} isActive={pathname == '/profile'} >
                        <HiUser className="text-[26px]" />
                        Profile
                    </CartButton>
                    <CartButton href={"/profile/inventory"} isActive={pathname == '/profile/inventory'}>
                        <FaGun className="text-[26px]" />
                        Inventory
                    </CartButton>
                    <CartButton href={"/profile/deposits"} isActive={pathname == '/profile/deposits'}>
                        <IoWallet  className="text-[26px]" />
                        Deposits
                    </CartButton>
                    <CartButton href={"/profile/withdrawals"} isActive={pathname == '/profile/withdrawals'}>
                        <RiFolderReceivedFill  className="text-[26px]" />
                        Withdrawals
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
                        { value: '/profile', div: <><HiUser className="text-[26px]" />Profile</> },
                        { value: '/profile/inventory', div: <><FaGun className="text-[26px]" />Inventory</> },
                        { value: '/profile/deposits', div: <><IoWallet  className="text-[26px]" />Deposits</> },
                        { value: '/profile/withdrawals', div: <><RiFolderReceivedFill  className="text-[26px]" />Withdrawals</> },
                    ]}
                />
                <div className="flex flex-col items-end min-w-[130px]">
                    {/* TODO:Logout из системы */}
                </div>
            </div>
        </>

    )
}

export default NavbarProfile
