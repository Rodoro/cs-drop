/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import { Item } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ViewItem = ({ params }: { params: { id: number } }) => {
    const [item, setItem] = useState<Item>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('/admin/items/get?itemId=' + params?.id);
            setItem(res.data)
        };
        fetchData();
    }, []);

    return (
        <>
            {item == undefined ? (
                <>
                </>
            ) : (
                <div className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8" >
                    <table className="table-auto w-full">
                        <tbody>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">ID</td >
                                <td className="px-6 py-4">{item?.id}</td>
                            </tr >
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Game</td>
                                <td className="px-6 py-4">{item?.game}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Title</td>
                                <td className="px-6 py-4">{item?.title}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Image URL</td>
                                <td className="px-6 py-4 text-cyan-500"><Link href={item.imageUrl}>{item?.title}</Link></td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Game internal ID</td>
                                <td className="px-6 py-4">{item?.gameId}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Game title EN</td>
                                <td className="px-6 py-4">{item?.gameTitleEn}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Game title RU</td>
                                <td className="px-6 py-4">{item?.gameTitleRu}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Price</td>
                                <td className="px-6 py-4"> $ {item?.price}</td>
                            </tr>
                            <tr className="bg-[#272B35] border-gray-700 border-b">
                                <td className="px-6 py-4 whitespace-nowrap">Rarity</td>
                                <td className="px-6 py-4">{item?.rarity}</td>
                            </tr>
                            <tr className="bg-[#272B35]">
                                <td className="px-6 py-4 whitespace-nowrap">Quality</td>
                                <td className="px-6 py-4">{item?.quality}</td>
                            </tr>
                        </tbody >
                    </table >
                </div >
            )}
        </>
    )
}

export default ViewItem
