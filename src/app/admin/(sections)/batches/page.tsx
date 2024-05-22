/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Batch, Game } from '@/types/admin.interface';
import { useSession } from 'next-auth/react';
import {
  
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@/components/interface/Button';
import { useRouter } from 'next/navigation';

const BatchesPage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [batches, setBatches] = useState<Batch[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus == "authenticated") {
        const res1 = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setBatches(res1.data)
        const res2 = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setGames(res2.data)
        setLoading(false);
      }
    };
    fetchData();
  }, [sessionStatus])

  const deleteBatche = React.useCallback(
    (id: GridRowId) => async () => {
      await axios.delete('http://95.165.94.222:8090/api/v1/admin/batches/delete/' + id, {
        headers: {
          'Authorization': session?.token.accessToken
        }
      }).then(() => {
        setTimeout(() => {
          setBatches((prevRows) => prevRows.filter((row) => row.id !== id));
        });
      });
    },
    [],
  );

  const duplicateBatche = React.useCallback(
    (index: GridRowId) => async () => {
      const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get/' + index, {
        headers: {
          'Authorization': session?.token.accessToken
        }
      });
      const data: Batch = res.data;
      const { id, ...newData } = data;
      const { gameId, ...filteredData } = newData;
      const filteredLanguages = data.languages.map(({ id, ...language }) => language);
      const result = {
        title: filteredData.title,
        gameId,
        languages: filteredLanguages
      };
      const res2 = await axios.post('http://95.165.94.222:8090/api/v1/admin/batches/create', result, {
        headers: {
          'Authorization': session?.token.accessToken
        }
      })
      setBatches((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: res2.data.id }];
      });
    },
    [],
  );

  const viewBatche = React.useCallback(
    (id: GridRowId) => () => {
      router.push("/admin/batches/" + id + "/view")
    },
    [],
  );

  const editBatche = React.useCallback(
    (id: GridRowId) => () => {
      router.push("/admin/batches/" + id + "/edit")
    },
    [],
  );

  const searchNameById = (id: number): string | null => {
    const item = games.find(item => item.id === id);
    if (item) {
      return item.name;
    } else {
      return null;
    }
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 50 },
    {
      field: 'gameId',
      headerName: 'Game',
      flex: 50,
      valueGetter: searchNameById,
    },
    {
      field: 'title',
      headerName: 'Name',
      flex: 200,
    },
    {
      field: 'sort',
      headerName: 'Sort',
      flex: 50,
    },
    {
      field: 'actions',
      type: 'actions',
      resizable: false,
      cellClassName: 'actions',
      getActions: (params: any) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteBatche(params.id)}
        />,
        <GridActionsCellItem
          icon={<FileCopyIcon />}
          label="Duplicate"
          onClick={duplicateBatche(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="View"
          onClick={viewBatche(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<SettingsIcon />}
          label="Edit"
          onClick={editBatche(params.id)}
        />,
      ],
    },
  ];

  return (
    <Box style={{ height: batches.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
      <Button className="px-2 mb-6" onClick={() => router.push("/admin/batches/create")}>Create Batche</Button>
      <DataGrid
        rows={batches}
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
        }}
      />
    </Box>
  )
}

export default BatchesPage
