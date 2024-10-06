/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Item } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";

const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/items/get-all');
                console.log("Fetched items:", res.data); // Выводим данные
                setItems(res.data);
            } catch (error) {
                console.error("Ошибка при получении предметов:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const viewItem = (id: number) => () => {
        router.push("/admin/items/" + id + "/view");
    };

    const columns = [
        { key: "id" as keyof Item, label: "ID" },
        { key: "game" as keyof Item, label: "Game" },
        { key: "title" as keyof Item, label: "Title" },
        {
            key: "imageUrl" as keyof Item,
            label: "Image",
            render: (record: Item) => (
                <img
                    src={record.imageUrl.replace(/ /g, '%20')} // Заменяем пробелы на %20
                    alt={record.title}
                    style={{ width: 50, height: 50 }}
                    onError={(e) => { e.currentTarget.src = 'fallback-image-url'; }} // Замените на URL изображения по умолчанию
                />
            ),
        },
        { key: "price" as keyof Item, label: "Price" },
        { key: "rarity" as keyof Item, label: "Rarity" },
    ];

    return (
        <div className="mt-20 mr-8 ml-8 md:ml-60 lg:ml-[270px] max-md:ml-[0px] md:mt-8 mb-8 ">
            <div className = "flex justify-end mb-[50px]">
                <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
                    <p className='mr-[10px]'>Exit</p>
                    <FaDoorOpen className=''/>
                </Button>
            </div>
            <DataGrid
                data={items}
                columns={columns}
            />
        </div>
    );
};

export default ItemsPage;