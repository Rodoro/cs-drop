"use client"
import Navbar from '@/containers/admin/Navbar'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState} from 'react'
import Logo from '@/components/icons/Logo';
import { RxCross2 } from "react-icons/rx"
import { BsListNested } from "react-icons/bs";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
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
                <div className={`transition-opacity duration-300 ${isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {isNavVisible && <Navbar isVisible={isNavVisible} onClose={toggleNavbar} className='max-lg:w-[240px] items-end' />}
                </div>
                <div>
                    <div className="flex flex-row md:justify-end ">
                        <div className='flex justify-between w-full'>
                            <div className='inline-block md:hidden'>
                                <Logo/>
                            </div>
                            <div className='inline-block'>
                                <button onClick={toggleNavbar} className={`transition-transform duration-300`}>
                                    {isNavVisible ? (
                                        <RxCross2 className='inline-block text-[32px] md:hidden transform transition-transform duration-300' />
                                    ) : (
                                        <BsListNested className='inline-block text-[32px] md:hidden transform transition-transform duration-300' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* //FIX: Обьяснить и исправить этот ужас (у тебя нагрузка из-за этого х2)*/}
                    <div className='md:hidden'>
                        {!isNavVisible && children}
                    </div>
                    <div className='max-md:hidden'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
