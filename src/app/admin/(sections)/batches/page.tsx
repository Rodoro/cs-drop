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
import Setting from '@/components/interface/admin/Still';
import Button from '@/components/interface/Button'
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";

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

  // Если массив batches не пуст, берем первый элемент для title и sort
  const defaultTitle = batches.length > 0 ? batches[0].title : '';
  const defaultSort = batches.length > 0 ? batches[0].sort : '';

  // Объединяем данные
  const finalData = games.map(game => ({
    id: game.id,
    name: game.name,
    title: defaultTitle,  // Используем title из первого элемента batches
    sort: defaultSort,    // Используем sort из первого элемента batches
  }));

  const columns = [
    { key: "id" as keyof Game, label: "ID" },
    { key: "name" as keyof Game, label: "Game" },
    { key: "title" as keyof Batch, label: "Name" },
    { key: "sort" as keyof Batch, label: "Sort" },
  ];

  return (
    <div style={{ height: games.length === 0 ? 400 : undefined }} className="mt-20 mr-8 ml-8 md:ml-60 lg:ml-[270px] max-md:ml-[0px] md:mt-8 mb-8">
      <div className="md:flex md:justify-between max-md:w-full">
        <Button2 className="px-2 mb-6 max-md:w-full" onClick={() => router.push("/admin/batches/create")}>+ Create Batch</Button2>
        <Button className='max-md:hidden' onClick={() => { authService.logout(); window.location.reload(); }}>
          <p className='mr-[10px]'>Exit</p>
          <FaDoorOpen className='' />
        </Button>
      </div>
      <DataGrid
        data={finalData}  // Используем финальный массив
        columns={columns}
        showDeleteButton={true} 
        showSettingsButton={true}
        showStillButton={true}
      />
    </div>
  );
};

export default BatchesPage;