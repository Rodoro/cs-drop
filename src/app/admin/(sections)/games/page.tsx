"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Game } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';

const GamesPage = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setGames(res.data)
                setLoading(false);
            }
        };
        fetchData();
    }, [sessionStatus])

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'steamGameID',
            headerName: 'Steam Game ID',
            width: 150,
        },
    ];

    return (
        <Box style={{ height: games.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <DataGrid
                rows={games}
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

export default GamesPage
