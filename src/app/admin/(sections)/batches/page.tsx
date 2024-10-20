/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Batch, Game } from '@/types/admin.interface';
import Button2 from '@/components/interface/admin/Button2';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ButtonExit from '@/components/interface/admin/ButtonExit';

const BatchesPage = () => {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        const res1 = await axiosWithAuthAdmin.get('/admin/batches/get-all');
        setBatches(res1.data);

        const res2 = await axiosWithAuthAdmin.get('/admin/games/get-all');
        setGames(res2.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteBatche = React.useCallback(
    async (id: number) => {
      await axiosWithAuthAdmin.get('/admin/batches/delete/' + id).then(() => {
        setBatches((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const handleDelete = (id: number) => {
    deleteBatche(id);
};

  const defaultTitle = batches.length > 0 ? batches[0].title : '';
  const defaultSort = batches.length > 0 ? batches[0].sort : '';
  const defaultGame = games.length > 0 ? games[0].name : '';

  const finalData = batches.map(game => ({
    id: game.id,
    name: defaultGame,
    title: defaultTitle, 
    sort: defaultSort,    
  }));

  const columns = [
    { key: "id" as keyof Game, label: "ID" },
    { key: "name" as keyof Game, label: "Game" },
    { key: "title" as keyof Batch, label: "Name" },
    { key: "sort" as keyof Batch, label: "Sort" },
  ];

  return (
    <div style={{ height: games.length === 0 ? 400 : undefined }} className="mt-20 ml-8 xl:ml-[110px] lg:ml-[250px] md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8 ">
      <div className="md:flex md:justify-between max-md:w-full mb-6">
        <Button2 className="px-2  md:w-[177px]" onClick={() => router.push("/admin/batches/create")}>+ Create Batch</Button2>
        <ButtonExit/>
      </div>
      <DataGrid
        data={finalData}  
        columns={columns}
        showDeleteButton={true} 
        showSettingsButton={true}
        showStillButton={true}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default BatchesPage;