/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { User } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const UsersPage = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/users/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setUsers(res.data.result)
                setLoading(false);
            }
        };
        fetchData();
    }, [sessionStatus])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 90 },
        {
            field: 'username',
            headerName: 'Name',
            flex: 150,
        },
        {
            field: 'uUid',
            headerName: 'UUID',
            flex: 150,
        },
        {
            field: 'steamId',
            headerName: 'Steam Id',
            flex: 150,
        },
        {
            field: 'steamCreated',
            headerName: 'Steam Created',
            flex: 150,
            type: 'dateTime',
            valueGetter: (value: string) => value && new Date(value),
        },
        {
            field: 'link',
            headerName: 'Link',
            flex: 150,
            renderCell: (params: any) => {
                return (
                    <Link href={params.value}>
                        {params.value}
                    </Link>
                );
            }
        },
    ];

    return (
        <Box style={{ height: users.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <DataGrid
                rows={users}
                columns={columns}
                rowHeight={60}
                checkboxSelection
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                loading={loading}
                sx={{
                    color: "#fff",
                    borderWidth: '0px',
                    '--DataGrid-rowBorderColor': "#272B35",
                    '--DataGrid-containerBackground': "#272B35",
                    '& .MuiButtonBase-root.MuiIconButton-root': { color: '#fff' },
                    '& .MuiDataGrid-footerContainer': { background: '#272B35' },
                    '& .MuiTablePagination-root': { color: '#fff' },
                    '& .MuiCheckbox-root': { color: '#fff' },
                    '& .MuiDataGrid-cell:focus': { outlineColor: '#fff' },
                    '& .MuiDataGrid-overlay': { background: '#191D3E' },
                    '& .MuiDataGrid-columnHeader:focus': { outline: '#fff'},
                    '& .MuiDataGrid-columnHeader:focus-within': { outline: '#fff'},
                }}
            />
        </Box>
    )
}

export default UsersPage
