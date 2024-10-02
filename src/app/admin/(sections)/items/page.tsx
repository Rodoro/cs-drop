/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Item } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';


const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/items/get-all');
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
        { key: "imageUrl" as keyof Item, label: "Image URL" },
        { key: "gameId" as keyof Item, label: "Game ID" },
        { key: "gameTitleRu" as keyof Item, label: "Game Title (RU)" },
        { key: "gameTitleEn" as keyof Item, label: "Game Title (EN)" },
        { key: "price" as keyof Item, label: "Price" },
        { key: "rarity" as keyof Item, label: "Rarity" },
        { key: "quality" as keyof Item, label: "Quality" },
        {
            key: "action" as keyof Item,
            label: "Action",
            renderCell: (params: any) => (
                <button onClick={viewItem(params.row.id)}>View</button>
            ),
        },
    ];

    return (
        <div style={{ height: loading ? 400 : items.length === 0 ? 400 : 'auto', width: '100%' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <DataGrid
                data={items}
                columns={columns}
            />
        </div>
    );
};

export default ItemsPage;