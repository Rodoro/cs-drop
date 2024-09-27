"use client"
import Link from 'next/link'
import React, {ForwardRefRenderFunction , ForwardedRef, useImperativeHandle, forwardRef, useRef} from 'react'
import Image from 'next/image'
import Button from '@/components/interface/admin/Buttоn';
import Button1 from '@/components/interface/Button'
import { usePathname } from 'next/navigation'
import { GoHomeFill } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { HiMiniBriefcase } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"
import { FaDoorOpen } from "react-icons/fa6";
import { authService } from '@/services/auth/auth.services';

const drawerWidth = 240;

interface NavbarProps {
    isVisible: boolean;
    onClose: () => void;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible, onClose, className }) => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
        onClose(); // Закрываем компонент через onClose при закрытии
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <div
            className={`w-[273px] max-md:w-full bg-[#0A0D1D33] z-[2] h-full fixed left-0 top-0 px-[40px] py-[35px] transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'} ${className}`}
        >
            <div className='flex justify-between items-center mb-[40px] max-md:hidden'>
                <Link href="/">
                    <Image
                        src='/img/interface/nav/logo+text.png'
                        alt="Логотип"
                        width={180}
                        height={40}
                    />
                </Link>
            </div>
            <div className='md:hidden flex justify-between mb-[50px]'>
                <div><img src='/img/interface/nav/logo.png' alt="Логотип" width={'39px'} height={'41px'}/></div>
                <div>
                    <button onClick={onClose}>
                        <RxCross2 className='text-white text-[32px]' />
                    </button>
                </div>
            </div>
            <div>
                <div className='mb-[10px]'>
                    <Link href="/admin">
                        <Button className={`w-full ${pathname === '/admin' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]' : 'bg-transparent'}`}>
                            <GoHomeFill /><p className='ml-[10px]'>Main</p>
                        </Button>
                    </Link>
                </div>
                <div className='mb-[10px]'>
                    <Link href="/admin/batches">
                        <Button className={`w-full ${pathname === '/admin/batches' || pathname === '/admin/batches/create' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)]' : 'bg-transparent'}`}>
                            <IoIosDocument /><p className='ml-[10px]'>Batches</p>
                        </Button>
                    </Link>
                </div>
                <div className='mb-[10px]'>
                    <Link href="/admin/items">
                        <Button className={`w-full ${pathname === '/admin/items' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] ' : 'bg-transparent'}`}>
                            <HiMiniBriefcase /><p className='ml-[10px]'>Items</p>
                        </Button>
                    </Link>
                </div>
                <div className='mb-[10px]'>
                    <Link href="/admin/loot-cases">
                        <Button className={`w-full ${pathname === '/admin/loot-cases' || pathname === '/admin/loot-cases/create' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] ' : 'bg-transparent'}`}>
                            <GiTrophyCup /><p className='ml-[10px]'>Loot case</p>
                        </Button>
                    </Link>
                </div>
                <div className='mb-[10px]'>
                    <Link href="/admin/staff">
                        <Button className={`w-full ${pathname === '/admin/staff' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] ' : 'bg-transparent'}`}>
                            <BiSupport /><p className='ml-[10px]'>Staff</p>
                        </Button>
                    </Link>
                </div>
                <div className='mb-[20px]'>
                    <Link href="/admin/users">
                        <Button className={`w-full ${pathname === '/admin/users' ? 'bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] ' : 'bg-transparent'}`}>
                            <FaUsers /><p className='ml-[10px]'>Users</p>
                        </Button>
                    </Link>
                </div>
                <div className='md:hidden'>
                    <Button1 className='w-full' onClick={() => { authService.logout(); window.location.reload(); }}>
                        <p className='mr-[10px]'>Exit</p>
                        <FaDoorOpen className=''/>
                    </Button1>
                </div>
            </div>
        </div>
        // <div className="fixed flex flex-col justify-start top-0 left-0 bottom-0 items-start pt-28 pl-6 pr-6 bg-[#0A0D1D] space-y-6">
        //     <div className="mb-6">
        //         <Link href='/'>
        //             <Image
        //                 src="/img/interface/nav/logo+text.png"
        //                 alt="Логотип"
        //                 width={180}
        //                 height={40}
        //             />
        //         </Link>
        //     </div>
        //     <div className="flex flex-col justify-between space-y-3 m-3">
        //         <Link href='/admin' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin' ? "bg-blue-500" : ""}`}>
        //             <svg className="mr-3" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.756 20 14.0829 20H16.0438C16.9596 20.0024 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z" fill="white" />
        //             </svg>
        //             Main
        //         </Link>
        //         <Link href='/admin/batches' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/batches' ? "bg-blue-500" : ""}`}>
        //             Batches
        //         </Link>
        //         <Link href='/admin/games' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/games' ? "bg-blue-500" : ""}`}>
        //             Games
        //         </Link>
        //         <Link href='/admin/items' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/items' ? "bg-blue-500" : ""}`}>
        //             Items
        //         </Link>
        //         <Link href='/admin/loot-cases' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/loot-cases' ? "bg-blue-500" : ""}`}>
        //             Loot cases
        //         </Link>
        //         <Link href='/admin/staff' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/staff' ? "bg-blue-500" : ""}`}>
        //             Staff
        //         </Link>
        //         <Link href='/admin/users' className={`flex flex-row items-cente py-2 px-3 rounded-xl ${pathname === '/admin/users' ? "bg-blue-500" : ""}`}>
        //             Users
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Navbar
