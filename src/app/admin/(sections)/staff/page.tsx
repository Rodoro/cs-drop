/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Staff } from '@/types/admin.interface';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";
import Button from '@/components/interface/Button'

const StafsPage = () => {
    const [stafs, setStafs] = useState<Staff[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('/admin/staff/get-all');
            setStafs(res.data.result)
            setLoading(false);
        };
        fetchData();
    }, [])

    const columns: GridColDef[] = [
        { field: 'guid', headerName: 'ID', flex: 150, minWidth: 110 },
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
        <Box style={{ height: stafs.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <div className="flex flex-row justify-end m-6 mt-20 md:mt-8 align-middle">
                <Button onClick={() => { authService.logout(); window.location.reload() }}><p className = 'mr-[10px]'>Exit</p><FaDoorOpen/></Button>
            </div>
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
                    '& .MuiDataGrid-columnHeader:focus': { outline: '#fff' },
                    '& .MuiDataGrid-columnHeader:focus-within': { outline: '#fff' },
                }}
            />
        </Box>
    )
}

export default StafsPage
