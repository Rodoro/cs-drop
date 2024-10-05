"use client"
import Navbar from '@/containers/admin/Navbar'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState} from 'react'
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import { BsListNested } from "react-icons/bs";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    // const { status: sessionStatus } = useSession();

    // if (sessionStatus === "loading") {
    //     return <h1 className="flex min-h-screen flex-col items-center mt-6">Загрузка...</h1>
    // }
    // if (sessionStatus === "unauthenticated") {
    //     router.replace("/login");
    // }

    const [isNavVisible, setIsNavVisible] = useState(false); 
    const toggleNavbar = () => setIsNavVisible((prev) => !prev);  

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsNavVisible(true); 
            } else {
                setIsNavVisible(false); 
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <section>
            <div className='fixed inset-0 pointer-events-none'>
                <div className='w-[511px] h-[511px] rounded-full bg-[#821FFF] absolute z-[-1] top-[585px] left-[1181px] blur-[130px] opacity-25'></div>
                <div className='w-[511px] h-[511px] rounded-full bg-[#C51FFF] absolute z-[-1] top-[-114px] left-[-76px] blur-[130px] opacity-25'></div>
            </div>
            <div>
                <Navbar isVisible={isNavVisible} onClose={toggleNavbar} className = 'max-lg:w-[240px]'/>
                <div>
                    <div className="flex flex-row md:justify-end mt-[40px]">
                        <div className='flex justify-between w-full'>
                            <div className='inline-block md:hidden'>
                                <img src='/img/interface/nav/logo.png' alt="Логотип" width={'39px'} height={'41px'} />
                            </div>
                            <div className='inline-block'>
                                <button onClick={toggleNavbar}>
                                    <BsListNested className='inline-block text-[32px] md:hidden' />
                                </button>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}
