"use client"
import Button from '@/components/interface/Button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const NotFount = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center mt-60 md:ml-72">
            <div className="justify-center flex flex-col items-center">
                <center className="m-auto">
                    <div className=" tracking-widest mt-4">
                        <span className="text-white text-6xl block font-sans font-extrabold mb-6"><span>4  0  4</span></span>
                        <span className="text-white text-xl font-sans font-extrabold">Извините, но мы не смогли найти то, что вы искали!</span>
                    </div>
                </center>
                <center className="mt-6">
                    <Button className="rounded-md" onClick={() => router.replace("/")}>
                        ВЕРНУТСЯ
                    </Button>
                </center>
            </div>
        </div>
    )
}

export default NotFount
