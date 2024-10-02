/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { LootCases } from '@/types/admin.interface';
import Button2 from '@/components/interface/admin/Button2';
import { useRouter } from 'next/navigation';
import {
    GridActionsCellItem,
    GridRowId,
} from '@mui/x-data-grid';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import { useQueries, useQuery } from '@tanstack/react-query';
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import Button from '@/components/interface/Button'


const getData = async () => {
    return await axiosWithAuthAdmin.get('/admin/lootcases/get-cases');
}


const LootsPage = () => {
    const [loots, setLoots] = useState<LootCases[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/lootcases/get-cases');
                setLoots(res.data.result);
            } catch (error) {
                console.error("Ошибка при получении лут-кейсов:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const duplicateLoot = React.useCallback(
        (index: GridRowId) => async () => {
            const res = await axiosWithAuthAdmin.post('/admin/lootcases/replicate', { caseId: index });
            setLoots((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === index)!;
                return [...prevRows, { ...rowToDuplicate, id: res.data.result.id }];
            });
        },
        [],
    );

    const editLoot = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/loot-cases/" + id + "/edit");
        },
        [],
    );

    const viewLoot = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/loot-cases/" + id + "/view");
        },
        [],
    );

    const deleteLoot = React.useCallback(
        (id: GridRowId) => async () => {
            await axiosWithAuthAdmin.delete('/admin/lootcases/remove-case?caseId=' + id);
            setLoots((prevRows) => prevRows.filter((row) => row.id !== id));
        },
        [],
    );

const columns = [
    { key: "id" as keyof LootCases, label: "ID" },
    { key: "game" as keyof LootCases, label: "Game", render: (record: LootCases) => record.game.title }, 
    { key: "locales" as keyof LootCases, label: "Locales", render: (record: LootCases) => record.locales.join(", ") }, 
    { key: "title" as keyof LootCases, label: "Title" },
    { key: "price" as keyof LootCases, label: "Price", render: (record: LootCases) => `$${record.price.toFixed(2)}` },
    { key: "netPrice" as keyof LootCases, label: "Net Price", render: (record: LootCases) => `$${record.netPrice.toFixed(2)}` }, 
    { key: "isVisible" as keyof LootCases, label: "Visible", render: (record: LootCases) => (record.isVisible ? "Yes" : "No") },
    { key: "image" as keyof LootCases, label: "Image", render: (record: LootCases) => <img src={record.image} alt={record.title} style={{ width: 50, height: 50 }} /> }, 
    { key: "imageHover" as keyof LootCases, label: "Image Hover", render: (record: LootCases) => <img src={record.imageHover} alt={record.title} style={{ width: 50, height: 50 }} /> }, 
];
    return (
        <div style={{ height: loading ? 400 : loots.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <div className="flex flex-row justify-between m-6 mt-20 md:mt-8 align-middle">
                <Button2 className="px-2 mb-6 w-[177px] h-[56px]" onClick={() => router.push("/admin/loot-cases/create")}>+ Создать лут-кейсы</Button2>
            </div>
            <DataGrid
                data={loots}
                columns={columns}
            />
        </div>
    )
}

export default LootsPage;
