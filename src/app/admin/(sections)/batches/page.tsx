/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Batch, Game } from '@/types/admin.interface';
import Button2 from '@/components/interface/admin/Button2';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';

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


  const duplicateBatche = React.useCallback(
    (index: number) => async () => {
      // Получаем информацию по заданному индексу
      const res = await axiosWithAuthAdmin.get('/admin/batches/get/' + index);
      const data: Batch = res.data;
  
      // Извлекаем нужные поля, чтобы создать новый Batch
      const { gameId, title, languages, sort, game } = data;
      
      // Создаем новый объект, основываясь на текущих данных
      const filteredLanguages = languages.map(({ id, ...language }) => language); // Убираем id языков
      const result: Batch = {
        id: 0, // Устанавливаем временный id, который будет заменен сервером
        title,
        gameId,
        languages: filteredLanguages,
        game, // Передаем объект игры
        sort, // Сохраняем сортировку
      };
  
      // Отправляем новый объект на сервер для создания
      const res2 = await axiosWithAuthAdmin.post('/admin/batches/create', result);
  
      // Обновляем локальное состояние с новым объектом Batch и новым id
      setBatches((prevRows) => [
        ...prevRows,
        { ...result, id: res2.data.id }, // Используем новый id, возвращаемый сервером
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
    {
      key: "sort" as unknown as keyof Game, 
      label: "Sort",
      render: () => 1, 
    },
  ];

  return (
    <div style={{ height: games.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 lg:ml-[270px] md:mt-8 mb-8">
      <Button2 className="px-2 mb-6" onClick={() => router.push("/admin/batches/create")}>+ Создать игру</Button2>
      <DataGrid
        data={games} // Using games array as the data source
        columns={columns}
      />
    </div>
  );
};
export default BatchesPage