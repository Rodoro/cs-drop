/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Batch, Game } from '@/types/admin.interface';
import Button2 from '@/components/interface/admin/Button2';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import Delete from '@/components/interface/admin/Delete';
import Setting from '@/components/interface/admin/Settings';
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";

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
        console.log(res1.data)
        setBatches(res1.data)

        const res2 = await axiosWithAuthAdmin.get('/admin/games/get-all')
        console.log(res2.data)
        setGames(res2.data)
        setLoading(false);
      }
    };                                     
    fetchData();
  }, [])

  const deleteBatche = React.useCallback(
    (id: number) => async () => {
      await axiosWithAuthAdmin.get('/admin/batches/delete/' + id).then(() => {
        setTimeout(() => {
          setBatches((prevRows) => prevRows.filter((row) => row.id !== id));
        });
      });
    },
    [],
  );    

  const duplicateBatche = React.useCallback(
    (index: number) => async () => {
      
      const res = await axiosWithAuthAdmin.get('/admin/batches/get/' + index);
      const data: Batch = res.data;
  
      const { gameId, title, languages, sort, game } = data;
      
      const filteredLanguages = languages.map(({ id, ...language }) => language); 
      const result: Batch = {
        id: 0, 
        title,
        gameId,
        languages: filteredLanguages,
        game, 
        sort, 
      };
  
      const res2 = await axiosWithAuthAdmin.post('/admin/batches/create', result);
  

      setBatches((prevRows) => [
        ...prevRows,
        { ...result, id: res2.data.id }, 
      ]);
    },
    [],
  );
  const viewBatche = React.useCallback(
    (id: number) => () => {
      router.push("/admin/batches/" + id + "/view");
    },
    [],
  );

  const editBatche = React.useCallback(
    (id: number) => () => {
      router.push("/admin/batches/" + id + "/edit");
    },
    [],
  );

  const searchNameById = (id: number): string | null => {
    const item = games.find(item => item.id === id);
    return item ? item.name : null;
  };

  const columns = [
    { key: "id" as keyof Game, label: "ID" },                 
    { key: "name" as keyof Game, label: "Game" },
    { key: "title" as keyof Batch, label: "Name"},
    { key: "sort" as keyof Batch, label: "Sort" },
  ]


  return (
    <div style={{ height: games.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-60 lg:ml-[270px] max-md:ml-[0px] md:mt-8 mb-8 ">
      <div className = "md:flex md:justify-between max-md:w-full">
        <Button2 className="px-2 mb-6 max-md:w-full" onClick={() => router.push("/admin/batches/create")}>+ Create Batch</Button2>
        <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
          <p className='mr-[10px]'>Exit</p>
          <FaDoorOpen className=''/>
        </Button>
      </div>
      <DataGrid
        data={games} 
        columns={columns}
      />
    </div>
  );
};
export default BatchesPage