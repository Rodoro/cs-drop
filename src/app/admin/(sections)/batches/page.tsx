/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import { Batch, Game } from '@/types/admin.interface';
import {
  GridRowId,
} from '@mui/x-data-grid';
import Button2 from '@/components/interface/admin/Button2';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import DataGrid from '@/containers/admin/DataGrid';

const BatchesPage = () => {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log(2)
    const fetchData = async () => {


      if (loading) {
              console.log(1)
        const res1 = await axiosWithAuthAdmin.get('/admin/batches/get-all')
        setBatches(res1.data)

        const res2 = await axiosWithAuthAdmin.get('/admin/games/get-all')
        setGames(res2.data)
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  const deleteBatche = React.useCallback(
    (id: GridRowId) => async () => {
      await axiosWithAuthAdmin.get('/admin/batches/delete/' + id).then(() => {
        setTimeout(() => {
          setBatches((prevRows) => prevRows.filter((row) => row.id !== id));
        });
      });
    },
    [],
  );

  const duplicateBatche = React.useCallback(
    (index: GridRowId) => async () => {
      const res = await axiosWithAuthAdmin.get('/admin/batches/get/' + index);
      const data: Batch = res.data;
      const { id, ...newData } = data;
      const { gameId, ...filteredData } = newData;
      const filteredLanguages = data.languages.map(({ id, ...language }) => language);
      const result = {
        title: filteredData.title,
        gameId,
        languages: filteredLanguages
      };
      const res2 = await axiosWithAuthAdmin.post('/admin/batches/create', result)
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

  const RowExample: React.FC = () => {
    type DataKeys = "id" | "name" | "age" | "city" | "ggg" | "nnnn" | "vvvvv" | "jjjjjj";
    
    type DataRow = {
        [key in DataKeys]: any;  
    };

    interface Column {
        key: DataKeys;  
        label: any;
    }

    const columns: Column[] = [
        { key: "name", label: "Имя" },
        { key: "age", label: "Возраст" },
        { key: "ggg", label: "пппп" },
        { key: "jjjjjj", label: "hjghjghjghj" },
    ];

    const initialData: DataRow[] = [
        { id: 4,  name: 'fdfsdfsdf', age: 30, city: "Нью-Йорк", ggg: 23, nnnn: true, vvvvv: 'fgdfgdfg', jjjjjj: 'GHFIGUHIDFUO' },
        { id: 5,  name: 'fdfsdfsdf', age: 30, city: "Нью-Йорк", ggg:  23, nnnn: true, vvvvv: 'fgdfgdfg', jjjjjj: 'GHFIGUHIDFUOIH' },
        { id: 6,  name: 'fdfsdfsdf', age: 30, city: "Нью-Йорк", ggg: 23, nnnn: true, vvvvv: 'fgdfgdfg', jjjjjj: 'GHFIGUHIDFUOIHUO' },
    ];

    const [data, setData] = useState<DataRow[]>(initialData);

  return (
    <Box style={{ height: batches.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8 ">
      <div className="flex flex-row justify-between m-6 mt-20 md:mt-8 align-middle">
        <Button2 className="px-2 mb-6 w-[177px] h-[56px]" onClick={() => router.push("/admin/batches/create")}> + Create Batche</Button2>
      </div>
      <DataGrid
          data={data}
          columns={columns} 
      />
    </Box>
  )
}}

export default BatchesPage
