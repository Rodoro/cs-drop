"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Game } from '@/types/admin.interface';
import axios from 'axios';
import InputSearch from '@/components/InputSearch';
import NumberInput from '@/components/interface/NumberInput';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Games = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [games, setGames] = useState<Game[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedObj, setSortedObj] = useState<Game[]>([]);

    useEffect(() => {
        setSortedObj(games.filter(obj => obj.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm, games]);

    const handleItemsPerPageChange = (e: any) => {
        setCurrentPage(1)
        setItemsPerPage(parseInt(e.target.value, 10));
    };

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setGames(res.data)
            }
        };
        fetchData();
    }, [sessionStatus])

    const sortedGames = sortedObj.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'steamGameID',
            headerName: 'SteamGameID',
            width: 150,
        }
    ];

    return (
        <Box style={{ height: 400 }} className="mt-8 mr-8 ml-8 md:ml-72">
            <DataGrid
                rows={games}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                sx={{
                    color: "#fff",
                    '--DataGrid-containerBackground': "rgb(59 130 246)",
                    '& .MuiDataGrid-footerContainer': { background: 'rgb(59 130 246)' },
                    '& .MuiTablePagination-root': {color: '#fff'},
                    '& .MuiCheckbox-root': {color: '#fff'},
                    '& .MuiDataGrid-cell:focus': {outlineColor: '#fff'},
                }}
            />
        </Box>
        // <div className="ml-32 m-8">
        //     <div className='flex flex-row justify-between mb-6'>
        //         <InputSearch onChange={(e: any) => setSearchTerm(e.target.value)} />
        //         <NumberInput value={itemsPerPage} onChange={handleItemsPerPageChange} />
        //     </div>

        //     <div className="flex items-center flex-col">
        //         <div className='flex flex-row w-full'>
        //             <div className="w-1/3"><b>Id</b></div>
        //             <div className="w-1/3"><b>Name</b></div>
        //             <div className="w-1/3"><b>Steam Id</b></div>
        //         </div>
        //         {sortedGames.map(game => (
        //             <div className='flex flex-row w-full my-2' key={game.id}>
        //                 <div className="w-1/3">{game.id}</div>
        //                 <div className="w-1/3">{game.name}</div>
        //                 <div className="w-1/3">{game.steamGameID}</div>
        //             </div>
        //         ))}
        //     </div>

        //     {setSortedObj.length == 0 ? (
        //         <div className='flex flex-row justify-center text-3xl mt-6'>
        //             Записи ненайдены
        //         </div>
        //     ) : (
        //         <div className='flex flex-row justify-center space-x-3 mt-3'>
        //             <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        //             <span> / </span>
        //             <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= sortedObj.length}>Next</button>
        //         </div>
        //     )}
        // </div>
    )
}

export default Games
