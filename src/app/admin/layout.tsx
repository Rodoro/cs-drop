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

    const [isNavVisible, setIsNavVisible] = useState(false); // Изначально Nav скрыт
    const toggleNavbar = () => setIsNavVisible((prev) => !prev); // Функция для переключения Nav

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsNavVisible(true); // Показываем Navbar при ширине больше 768px
            } else {
                setIsNavVisible(false); // Скрываем Navbar при меньшей ширине
            }
        };

        handleResize(); // Установить значение при первом рендере

        window.addEventListener('resize', handleResize); // Добавляем слушатель изменения размера окна
        return () => window.removeEventListener('resize', handleResize); // Удаляем слушатель при размонтировании
    }, []);

    return (
        <section>
            <div className='w-[511px] h-[511px] rounded-full bg-[#821FFF] absolute z-[-1] top-[585px] left-[1181px] blur-[130px] opacity-25'></div>
            <div className='w-[511px] h-[511px] rounded-full bg-[#C51FFF] absolute z-[-1] top-[-114px] left-[-76px] blur-[130px] opacity-25'></div>
            <div>
                <Navbar isVisible={isNavVisible} onClose={toggleNavbar} />
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
                        <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
                            <p className='mr-[10px]'>Exit</p>
                            <FaDoorOpen className=''/>
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}
