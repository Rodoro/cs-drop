/* eslint-disable react/jsx-key */
"use client"
import Button from '@/components/interface/Button'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import { DataGrid } from '@mui/x-data-grid';
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
    const [lootcase, setLootcase] = useState()
    const { data: session, status: sessionStatus } = useSession();
    const [items, setItems] = useState([])
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const [lowItems, setLowItems] = React.useState<number>(30);
    const [topItems, setTopItems] = React.useState<number>(10);
    const [midItems, setMidItems] = React.useState<number>(40);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/lootcases/get-case?caseId=' + params?.id, {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setLootcase(res.data.result)
                const res2 = await axios.get('http://95.165.94.222:8090/api/v1/admin/content-generator/get?caseId=' + params?.id, {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setItems(res2.data.result)
                setLoading(false)
            }
        };
        fetchData();
    }, [session])

    const handleChangeLowItems = (event: Event, newValue: number | number[]) => {
        setLowItems(newValue as number);
    };
    const handleChangeMidItems = (event: Event, newValue: number | number[]) => {
        setMidItems(newValue as number);
    };
    const handleChangeTopItems = (event: Event, newValue: number | number[]) => {
        setTopItems(newValue as number);
    };

    const viewItem = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/items/" + id + "/view")
        },
        [],
    );

    const deleteItem = React.useCallback(
        (id: GridRowId) => async () => {
            const res = await axios.delete('http://95.165.94.222:8090/api/v1/admin/content-generator/remove-item?contentId=' + params?.id + '&itemId=' + id, {
                headers: {
                    'Authorization': session?.token.accessToken
                }
            })
            setItems(res.data.result);
        },
        [],
    );

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            "caseId": params?.id,
            "excludeWords": [],
            "includeWords": [],
            "lowItemCount": e.target[4].value,
            "lowItemsPrice": e.target[4].value,
            "midItemsCount": e.target[4].value,
            "midItemsPrice": e.target[4].value,
            "topItemsCount": e.target[4].value,
            "topItemsPrice": e.target[4].value
        }
        console.log(data);
        //TODO: Добавить отправку к серверу
    }

    const handleAddItem = (e: any) => {
        e.preventDefault();
        const fetchData = async () => {
            if (session) {
                const res = await axios.post('http://95.165.94.222:8090/api/v1/admin/content-generator/add-item?contentId=' + params?.id + '&itemId=' + e.target[0].value, {}, {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setItems(res.data.result)
                setOpen(false)
            }
        };
        fetchData();
    }

    const columns = [
        { field: 'id', headerName: 'ID', flex: 50, minWidth: 50,},
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
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={deleteItem(params.row.itemId)}
                />,
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
        <div className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
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
                                                <input disabled value={locale.title} onChange={e => handleChangeTitle(index, e.target.value)} required className="flex flex-row border rounded-l-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </td>
                                            <td>
                                                <input disabled value={locale.text} onChange={e => handleChangeText(index, e.target.value)} required className="flex flex-row border rounded-r-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
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
                            <input value={lootcase?.imageUrl} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Image hover URL</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={lootcase?.imageHoverUrl} disabled required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
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

            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between my-4 mt-12">
                    <div className="text-2xl">
                        Content Generator
                    </div>
                    <Button type="submit">Generate</Button>
                </div>
                <table className="table-auto w-full">
                    <tbody>
                        <tr className="bg-[#272B35] border-gray-700 border-b">
                            <td className="px-6 py-4 whitespace-nowrap">Exclude words</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input id="exclude" placeholder="word1, word2..." className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35] border-gray-700 border-b">
                            <td className="px-6 py-4 whitespace-nowrap">Include words</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input id="include" placeholder="knife" className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35]">
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">Low items count: {lowItems}</td>
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">
                                <Slider value={lowItems} onChange={handleChangeLowItems} />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35]">
                            <td className="px-6 py-2 whitespace-nowrap">Low items min price</td>
                            <td className="px-6 py-2 whitespace-nowrap">
                                <input id="lowItemMin" value={0.01} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35] border-gray-700 border-b">
                            <td className="px-6 py-2 whitespace-nowrap">Low items max price</td>
                            <td className="px-6 py-2 pb-4 whitespace-nowrap">
                                <input id="lowItemMax" value={100} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>

                        <tr className="bg-[#272B35]">
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">Mid items count: {midItems}</td>
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">
                                <Slider value={midItems} onChange={handleChangeMidItems} />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35]">
                            <td className="px-6 py-2 whitespace-nowrap">Mid items min price</td>
                            <td className="px-6 py-2 whitespace-nowrap">
                                <input id="midItemMin" value={0.01} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35] border-gray-700 border-b">
                            <td className="px-6 py-2 whitespace-nowrap">Mid items max price</td>
                            <td className="px-6 py-2 pb-4 whitespace-nowrap">
                                <input id="midItemMax" value={10000} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>

                        <tr className="bg-[#272B35]">
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">Top items count: {topItems}</td>
                            <td className="px-6 pb-2 pt-6 whitespace-nowrap">
                                <Slider value={topItems} onChange={handleChangeTopItems} />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35]">
                            <td className="px-6 py-2 whitespace-nowrap">Top items min price</td>
                            <td className="px-6 py-2 whitespace-nowrap">
                                <input id="topItemMin" value={0.01} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                        <tr className="bg-[#272B35]">
                            <td className="px-6 py-2 whitespace-nowrap">Top items max price</td>
                            <td className="px-6 py-2 pb-4 whitespace-nowrap">
                                <input id="topItemMax" value={100000} type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <div style={{ height: items.length === 0 ? 400 : '' }} className="mb-20">
                <div className="flex flex-row justify-between my-4 mt-12">
                    <div className="text-2xl">
                        Contents
                    </div>
                    <Button onClick={() => setOpen(true)}>Create Loot Case Content</Button>
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={handleAddItem}>
                                <div className='mb-3'>Add item:</div>
                                <input placeholder='Id item' min='0' type='number' className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                <div className='flex flex-row justify-end'>
                                    <Button className='mt-3' type='submit'>Create</Button>
                                </div>
                            </form>
                        </Box>
                    </Modal>
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
                    }}
                />
            </div>
        </div>
    )
}

export default ViewLootcase
