/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { User } from '@/types/admin.interface';
import Link from 'next/link';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ButtonExit from '@/components/interface/admin/ButtonExit';

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/users/get-all');
                setUsers(res.data.result);
            } catch (error) {
                console.error("Ошибка при получении списка пользователей:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const columns = [
        { key: 'id' as keyof User, label: 'ID' },
        { key: 'username' as keyof User, label: 'Name' },
        { key: 'uUid' as keyof User, label: 'UUID' },
        { key: 'steamId' as keyof User, label: 'Steam ID' },
        { key: 'steamCreated' as keyof User, label: 'Steam Created' },
        { key: 'link' as keyof User, label: 'Link' },
    ];

    return (
        <div style={{ height: users.length === 0 ? 400 : '' }} className="mt-20 ml-8 xl:ml-[110px] lg:ml-[250px] md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8  ">
            <div className = "flex justify-end mb-6">
                <ButtonExit/>
            </div>
            <DataGrid
                data={users}
                columns={columns}
            />
        </div>
    );
}

export default UsersPage;
