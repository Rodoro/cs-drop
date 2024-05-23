/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Item } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';
import Avatar from "@mui/material/Avatar";
import {
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';

const ItemsPage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus == "authenticated") {
        const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/items/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setItems(res.data)
        setLoading(false);
      }
    };
    fetchData();
  }, [sessionStatus])

  const viewBatche = React.useCallback(
    (id: GridRowId) => () => {
      router.push("/admin/items/" + id + "/view")
    },
    [],
  );

  const columns: GridColDef[] = [
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
            <Avatar src={params.value} variant="square" sx={{ width: 60, height: 60 }} />
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
    {
      field: 'actions',
      type: 'actions',
      resizable: false,
      getActions: (params: any) => [
        // eslint-disable-next-line react/jsx-key
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="View"
          onClick={viewBatche(params.id)}
        />
      ],
    },
  ];

  return (
    <Box style={{ height: items.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
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

export default ItemsPage
