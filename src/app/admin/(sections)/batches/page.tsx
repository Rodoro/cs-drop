"use client"
import InputSearch from '@/components/InputSearch'
import Button from '@/components/interface/Button'
import NumberInput from '@/components/interface/NumberInput'
import { Batch, Game } from '@/types/admin.interface'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Batches = () => {
  const [filteredBatches, setFilteredBatches] = useState<Batch[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [batches, setBatches] = useState<Batch[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStatus == "authenticated") {
        console.log(123)
        getList()

        const res2 = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setGames(res2.data)
      }
    };
    fetchData();
  }, [sessionStatus]);

  const getList = async () => {
    const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get-all', {
      headers: {
        'Authorization': session?.token.accessToken
      }
    });
    setBatches(res.data)
  }

  useEffect(() => {
    if (selectedGame == "" || selectedGame == undefined) {
      setFilteredBatches(batches.filter(batch => batch.title.toLowerCase().includes(searchTerm)));
    } else {
      setFilteredBatches(batches.filter(batch => batch.title.toLowerCase().includes(searchTerm)).filter(batch => batch.gameId == selectedGame ? batch : null));
    }
  }, [searchTerm, batches, selectedGame]);

  const handleGameChange = (e: any) => {
    setSelectedGame(e.target.value);
  };

  const handleItemsPerPageChange = (e: any) => {
    setCurrentPage(1)
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const deleteBatches = async (id: number) => {
    await axios.delete('http://95.165.94.222:8090/api/v1/admin/batches/delete/' + id, {
      headers: {
        'Authorization': session?.token.accessToken
      }
    });
    getList()
  }

  const searchNameById = (id: number): string | null => {
    const item = games.find(item => item.id === id);
    if (item) {
      return item.name;
    } else {
      return null;
    }
  }

  const replaseBatches = async (index: number) => {
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
    await axios.post('http://95.165.94.222:8090/api/v1/admin/batches/create', result, {
      headers: {
        'Authorization': session?.token.accessToken
      }
    });
    getList()
  }

  const sortedBatches = filteredBatches.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="ml-32 m-8 space-y-4">
      <div className="flex flex-row justify-between">
        <InputSearch onChange={(e: any) => setSearchTerm(e.target.value)} />
        <Button className="px-2" onClick={() => router.replace("/admin/batches/create")}>Create Batche</Button>
      </div>
      <div className="flex flex-row justify-end space-x-3">
        <select value={selectedGame} onChange={handleGameChange} className='flex flex-row items-center font-sans text-xm text-center font-semibold text-[#f9fafb] py-2 px-3 rounded-xl bg-blue-500 bg-[rgba(17,22,46,0.3)]'>
          <option className='text-left' value="">All</option>
          {games.map((game) => (
            <option className='text-left' key={game.id} value={game.id}>
              {game.name}
            </option>
          ))}
        </select>
        <NumberInput value={itemsPerPage} onChange={handleItemsPerPageChange} />
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Game</th>
            <th>Actions</th>
          </tr>
        </thead>
        {sortedBatches.length != 0 ? (
          <tbody>
            {
              sortedBatches.map(batch => (
                <tr key={batch.id}>
                  <td>{batch.id}</td>
                  <td>{batch.title}</td>
                  <td>
                    {searchNameById(batch.gameId)}
                  </td>
                  <td className='flex items-center justify-end space-x-3'>
                    <Button onClick={() => replaseBatches(batch.id)}>Replicate</Button>
                    <Button onClick={() => router.replace("/admin/batches/" + batch.id + "/view")}>View</Button>
                    <Button onClick={() => { deleteBatches(batch.id) }}>Delete</Button>
                    <Button onClick={() => router.replace("/admin/batches/" + batch.id + "/edit")}>Edit</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        ) : (
          <></>
        )}
      </table>
      <div>
        {sortedBatches.length == 0 ? (
          <div className='flex flex-row justify-center text-3xl mt-6'>
            Записи ненайдены
          </div>
        ) : (
          <div className='flex flex-row justify-center space-x-3'>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span> / </span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= filteredBatches.length}>Next</button>
          </div>
        )}
      </div>
    </div >
  )
}

export default Batches