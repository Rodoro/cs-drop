/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import Button from '@/components/interface/Button'
import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from 'next/link'
import {
    GridActionsCellItem,
    GridRowId,
} from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation'
import DeleteIcon from '@mui/icons-material/Delete';
import { LootCases } from '@/types/admin.interface'
import { axiosWithAuthAdmin } from '@/api/intreceptors';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#191D3E',
    border: '1px solid rgb(75,85,99)',
    boxShadow: 24,
    p: 4,
};

const ViewLootcase = ({ params }: { params: { id: number } }) => {
    const [loading, setLoading] = useState(true)
    const [lootcase, setLootcase] = useState<LootCases>()
    const [items, setItems] = useState([])
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('/admin/lootcases/get-case?caseId=' + params?.id);
            setLootcase(res.data.result)
            const res2 = await axiosWithAuthAdmin.get('/admin/content-generator/get?caseId=' + params?.id);
            setItems(res2.data.result)
            setLoading(false)
        };
        fetchData();
    }, [])

    const viewItem = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/items/" + id + "/view")
        },
        [],
    );

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 50, minWidth: 50, },
        {
            field: 'itemId',
            headerName: 'Item ID',
            flex: 90,
            minWidth: 60,
            renderCell: (params: any) => {
                return (
                    <Link href={"/admin/items/" + params.value.toString() + "/view"} className=" text-cyan-500">
                        {params.value}
                    </Link>
                );
            }
        },
        {
            field: 'price',
            headerName: 'Item Price',
            flex: 200,
            minWidth: 150,
            valueGetter: (value: string) => '$ ' + value,
        },
        {
            field: 'chance',
            headerName: 'Chance',
            minWidth: 120,
            flex: 120,
        },
        {
            field: 'actions',
            type: 'actions',
            resizable: false,
            getActions: (params: any) => [
                <GridActionsCellItem
                    icon={<VisibilityIcon />}
                    label="View"
                    onClick={viewItem(params.id)}
                />,
            ],
        },
    ];

    if (loading) return <h1 className="flex min-h-screen flex-col items-center mt-6">Загрузка...</h1>

    return (
        <div className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <table className="table-auto w-full">
                <tbody>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Game</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.game.name} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Batch</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.batch.title} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title (EN)</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.title} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title locales</td>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-col space-y-3">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lootcase?.locales.map((locale, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input disabled value={locale.title} required className="flex flex-row border rounded-l-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </td>
                                            <td>
                                                <input disabled value={locale.text} required className="flex flex-row border rounded-r-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Image URL</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.image} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Image hover URL</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.imageHover} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Price</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={"$ " + lootcase?.price} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Net Price</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={"$ " + lootcase?.netPrice} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Is Visible</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input checked={lootcase?.isVisible} disabled type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={{ height: items.length === 0 ? 400 : '' }} className="mb-20">
                <div className="flex flex-row justify-between my-4 mt-12">
                    <div className="text-2xl">
                        Contents
                    </div>
                </div>
                <DataGrid
                    rows={items}
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
            </div>
        </div>
    )
}

export default ViewLootcase
