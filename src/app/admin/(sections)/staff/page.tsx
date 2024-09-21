/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Staff } from '@/types/admin.interface';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";


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
        <div style={{ height: loading ? 400 : stafs.length === 0 ? 400 : 'auto' }} className="mt-20 mr-8 ml-8 md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8 ">
            <div className = "flex justify-end mb-6">
                <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
                    <p className='mr-[10px]'>Exit</p>
                    <FaDoorOpen className=''/>
                </Button>
            </div>
            <DataGrid
                data={stafs}
                columns={columns}
            />
        </div>
    );
}

export default StafsPage;