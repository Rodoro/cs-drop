/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Staff } from '@/types/admin.interface';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ButtonExit from '@/components/interface/admin/ButtonExit';

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
        { key: 'guid' as keyof Staff, label: 'ID' },
        { key: 'name' as keyof Staff, label: 'Name' },
        { key: 'email' as keyof Staff, label: 'Email' },
        { key: 'createdAt' as keyof Staff, label: 'Updated of' },
        { key: 'updatedAt' as keyof Staff, label: 'Created of' },
    ];

    return (
        <div style={{ height: loading ? 400 : stafs.length === 0 ? 400 : 'auto' }} className="mt-20 ml-8 xl:ml-[110px] lg:ml-[250px] md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8 ">
            <div className = "flex justify-end mb-6">
                <ButtonExit/>
            </div>
            <DataGrid
                data={stafs}
                columns={columns}
            />
        </div>
    );
}

export default StafsPage;