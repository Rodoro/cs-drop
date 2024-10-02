/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Staff } from '@/types/admin.interface';
import { axiosWithAuthAdmin } from '@/api/intreceptors';



const StafsPage = () => {
    const [stafs, setStafs] = useState<Staff[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/staff/get-all');
                setStafs(res.data.result);
            } catch (error) {
                console.error("Ошибка при получении списка сотрудников:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);



    const columns = [
        { key: 'guid' as keyof Staff, label: 'GUID' },
        { key: 'name' as keyof Staff, label: 'Имя' },
        { key: 'email' as keyof Staff, label: 'Email' },
        { key: 'createdAt' as keyof Staff, label: 'Дата создания' },
        { key: 'updatedAt' as keyof Staff, label: 'Дата обновления' },
        {
            key: 'action' as keyof Staff, 
            label: 'Действия'
        } as const, 
    ];

    return (
        <div style={{ height: loading ? 400 : stafs.length === 0 ? 400 : 'auto' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <DataGrid
                data={stafs}
                columns={columns}
            />
        </div>
    );
}

export default StafsPage;