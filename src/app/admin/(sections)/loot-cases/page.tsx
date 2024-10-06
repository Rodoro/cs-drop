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
    { key: "title" as keyof LootCases, label: "Title" },
    { key: "price" as keyof LootCases, label: "Price", render: (record: LootCases) => `$${record.price.toFixed(2)}` },
    { key: "netPrice" as keyof LootCases, label: "Net Price", render: (record: LootCases) => `$${record.netPrice.toFixed(2)}` }, 
    { key: "isVisible" as keyof LootCases, label: "Is Visible"}, 
];
    return (
        <div style={{ height: loading ? 400 : loots.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-60 lg:ml-[270px] max-md:ml-[0px] md:mt-8 mb-8 ">
        <div className = "flex justify-between">
            <Button2 className="px-2 mb-6 max-md:w-full" onClick={() => router.push("/admin/loot-cases/create")}>+ Create Loot case</Button2>
            <Button className='max-md:hidden ' onClick={() => { authService.logout(); window.location.reload(); }}>
                <p className='mr-[10px]'>Exit</p>
                <FaDoorOpen className=''/>
            </Button>
        </div>
            <DataGrid
                data={loots}  
                columns={columns}
                showDeleteButton={true} 
                showSettingsButton={true}
                showStillButton={true}
            />
        </div>
    )
}

export default LootsPage;
