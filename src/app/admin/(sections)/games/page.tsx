/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Game } from '@/types/admin.interface';
import Avatar from "@mui/material/Avatar";
import {
    GridActionsCellItem,
    GridRowId,
} from '@mui/x-data-grid';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import Button from '@/components/interface/Button'

const GamesPage = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('/admin/games/get-all');
            setGames(res.data)
            setLoading(false);
        };
        fetchData();
    }, [])

    const editGame = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/games/" + id + "/edit")
        },
        [],
    );

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 90, minWidth: 70 },
        {
            field: 'name',
            headerName: 'Name',
            flex: 150,
            minWidth: 120
        },
        {
            field: 'steamGameID',
            headerName: 'Steam Game ID',
            flex: 150,
            minWidth: 120
        },
        {
            field: 'isMain',
            headerName: 'Is Main',
            flex: 90,
            type: 'boolean',
            minWidth: 70
        },
        {
            field: 'iconUrl',
            headerName: 'Icon',
            flex: 150,
            renderCell: (params: any) => {
                return (
                    <div>
                        {!params.value ? (<>Нет</>) : (<Avatar src={params.value} sx={{ width: 54, height: 54 }} alt="Нету" />)}
                    </div>
                );
            }
        },
        {
            field: 'actions',
            type: 'actions',
            resizable: false,
            getActions: (params: any) => [
                <GridActionsCellItem
                    icon={<SettingsIcon />}
                    label="Edit"
                    onClick={editGame(params.id)}
                />,
            ],
        },
    ];

    return (
        <Box style={{ height: games.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <div className="flex flex-row justify-end m-6 mt-20 md:mt-8 align-middle">
                <Button onClick={() => { authService.logout(); window.location.reload() }}><p className = 'mr-[10px]'>Exit</p><FaDoorOpen/></Button>
            </div>
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
                    '& .MuiDataGrid-booleanCell[data-value="true"]': { color: '#1e9a19' },
                    '& .MuiDataGrid-booleanCell[data-value="false"]': { color: '#cd2a4d' },
                    '--DataGrid-rowBorderColor': "#272B35",
                    '--DataGrid-containerBackground': "#272B35",
                    '& .MuiButtonBase-root.MuiIconButton-root': { color: '#fff' },
                    '& .MuiDataGrid-footerContainer': { background: '#272B35' },
                    '& .MuiTablePagination-root': { color: '#fff' },
                    '& .MuiCheckbox-root': { color: '#fff' },
                    '& .MuiDataGrid-cell:focus': { outlineColor: '#fff' },
                    '& .MuiDataGrid-overlay': { background: '#191D3E' },
                    '& .MuiDataGrid-columnHeader:focus': { outline: '#fff' },
                    '& .MuiDataGrid-columnHeader:focus-within': { outline: '#fff' },
                }}
            />
        </Box>
    )
}

export default GamesPage
