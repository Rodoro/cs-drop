/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Item } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ButtonExit from '@/components/interface/admin/ButtonExit';
import Image from 'next/image'

const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/items/get-all');
                console.log("Fetched items:", res.data); 
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
        { key: 'id', label: 'ID' },
        { key: 'game', label: 'Game' },
        { key: 'title', label: 'Title' },
        {
            key: 'imageUrl',
            label: 'Image',
            render: (record: Item) => (
                <Image
                src={record.imageUrl.replace(/ /g, '%20')}
                alt={record.title}
                onError={(e) => {
                    e.currentTarget.src = 'fallback-image-url';
                }}
                style={{ width: 50, height: 50 }}
            />
            ),
        },
        { key: 'price', label: 'Price' },
        { key: 'rarity', label: 'Rarity' },
    ];

    return (
        <div className="mt-20 ml-8 xl:ml-[110px] lg:ml-[250px] md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8 ">
            <div className = "flex justify-end mb-[50px]">
                <ButtonExit/>
            </div>
            <DataGrid
                data={items}
                columns={columns}
            />
        </div>
    );
};

export default ItemsPage;