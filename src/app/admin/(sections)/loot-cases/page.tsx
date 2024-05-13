"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { LootCases } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';

const LootsPage = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [loots, setLoots] = useState<LootCases[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/lootcases/get-cases', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                console.log(res.data)
                setLoots(res.data.result)
                setLoading(false);
            }
        };
        fetchData();
    }, [sessionStatus])

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'game',
            headerName: 'Game',
            width: 90,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120,
        },
        {
            field: 'netPrice',
            headerName: 'Net Price',
            width: 120,
        },
        {
            field: 'batch',
            headerName: 'Batch',
            width: 200,
        },
        {
            field: 'isVisible',
            headerName: 'Is Visible',
            width: 90,
        },
    ];

    return (
        <Box style={{ height: loots.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <DataGrid
                rows={loots}
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
                    '& .MuiDataGrid-footerContainer': { background: '#272B35' },
                    '& .MuiTablePagination-root': { color: '#fff' },
                    '& .MuiCheckbox-root': { color: '#fff' },
                    '& .MuiDataGrid-cell:focus': { outlineColor: '#fff' },
                    '& .MuiDataGrid-overlay': { background: '#191D3E' },
                }}
            />
        </Box>
    )
}

export default LootsPage
