"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Game } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';
import Avatar from "@mui/material/Avatar";

const ItemsPage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus == "authenticated") {
        const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/items/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setGames(res.data)
        console.log(res.data)
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
      field: 'gameTitleRu',
      headerName: 'Title',
      width: 400,
    },
    {
      field: 'imageUrl',
      headerName: 'Img',
      width: 150,
      renderCell: (params: any) => {
        return (
          <div>
            <Avatar src={params.value} variant="square" sx={{ width: 50, height: 50 }}/>
          </div>
        );
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
    {
      field: 'rarity',
      headerName: 'Rarity',
      width: 200,
    },    
    {
      field: 'title',
      headerName: 'Title En',
      width: 400,
    },
  ];

  return (
    <Box style={{ height: 648 }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8">
      <DataGrid
        rows={games}
        columns={columns}
        checkboxSelection
        autoPageSize
        loading={games.length === 0}
        sx={{
          color: "#fff",
          '--DataGrid-containerBackground': "rgb(59 130 246)",
          '& .MuiDataGrid-footerContainer': { background: 'rgb(59 130 246)' },
          '& .MuiTablePagination-root': { color: '#fff' },
          '& .MuiCheckbox-root': { color: '#fff' },
          '& .MuiDataGrid-cell:focus': { outlineColor: '#fff' },
        }}
      />
    </Box>
  )
}

export default ItemsPage
