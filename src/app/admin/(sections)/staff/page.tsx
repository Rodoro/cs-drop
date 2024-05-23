/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Staff } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';

const StafsPage = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [stafs, setStafs] = useState<Staff[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/staff/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setStafs(res.data.result)
                setLoading(false);
            }
        };
        fetchData();
    }, [sessionStatus])

    const columns: GridColDef[] = [
        { field: 'guid', headerName: 'ID', flex: 150, minWidth:110 },
        {
            field: 'email',
            headerName: 'Email',
            flex: 150,
            minWidth: 150
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 150,
            minWidth: 110
        },
        {
            field: 'updatedAt',
            headerName: 'Updated At',
            flex: 200,
            minWidth: 170,
            type: 'dateTime',
            valueGetter: (value: string) => value && new Date(value),
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            flex: 200,
            minWidth: 170,
            type: 'dateTime',
            valueGetter: (value: string) => value && new Date(value),
        },
    ];

    return (
        <Box style={{ height: stafs.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <DataGrid
                getRowId={(row) => row.guid}
                rows={stafs}
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

export default StafsPage
