/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { LootCases } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';
import Button from '@/components/interface/Button';
import { useRouter } from 'next/navigation';
import {
    GridActionsCellItem,
    GridRowId,
} from '@mui/x-data-grid';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

const LootsPage = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [loots, setLoots] = useState<LootCases[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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

    const duplicateLoot = React.useCallback(
        (index: GridRowId) => async () => {
            const res = await axios.post('http://95.165.94.222:8090/api/v1/admin/lootcases/replicate', { caseId: index }, {
                headers: {
                    'Authorization': session?.token.accessToken
                }
            })
            setLoots((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === index)!;
                return [...prevRows, { ...rowToDuplicate, id: res.data.result.id }];
            });
        },
        [],
    );

    const editLoot = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/loot-cases/" + id + "/edit")
        },
        [],
    );

    const viewLoot = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/loot-cases/" + id + "/view")
        },
        [],
    );

    const deleteLoot = React.useCallback(
        (id: GridRowId) => async () => {
          await axios.delete('http://95.165.94.222:8090/api/v1/admin/lootcases/remove-case?caseId=' + id, {
            headers: {
              'Authorization': session?.token.accessToken
            }
          }).then(() => {
            setTimeout(() => {
                setLoots((prevRows) => prevRows.filter((row) => row.id !== id));
            });
          });
        },
        [],
      );

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 90, minWidth: 80},
        {
            field: 'game',
            headerName: 'Game',
            flex: 90,
            minWidth: 80
        },
        {
            field: 'title',
            headerName: 'Title',
            flex: 200,
            minWidth: 180
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 120,
            minWidth: 110,
            valueGetter: (value: string) => '$ ' + value,
        },
        {
            field: 'netPrice',
            headerName: 'Net Price',
            flex: 120,
            minWidth: 110,
            valueGetter: (value: string) => '$ ' + value,
        },
        {
            field: 'batch',
            headerName: 'Batch',
            flex: 200,
            minWidth: 150
        },
        {
            field: 'isVisible',
            headerName: 'Is Visible',
            flex: 90,
            type: 'boolean',
            minWidth: 80
        },
        {
            field: 'actions',
            type: 'actions',
            resizable: false,
            getActions: (params: any) => [
                <GridActionsCellItem
                    icon={<FileCopyIcon />}
                    label="Duplicate"
                    onClick={duplicateLoot(params.id)}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<SettingsIcon />}
                    label="Edit"
                    onClick={editLoot(params.id)}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<VisibilityIcon />}
                    label="View"
                    onClick={viewLoot(params.id)}
                />,
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={deleteLoot(params.id)}
                />,
            ],
        },
    ];

    return (
        <Box style={{ height: loots.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <Button className="px-2 mb-6" onClick={() => router.push("/admin/loot-cases/create")}>Create Loot Cases</Button>
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
                }}
            />
        </Box>
    )
}

export default LootsPage
