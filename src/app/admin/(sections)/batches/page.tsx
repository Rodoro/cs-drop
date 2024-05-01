"use client"
import InputSearch from '@/components/InputSearch'
import Button from '@/components/interface/Button'
import NumberInput from '@/components/interface/NumberInput'
import { Batch, Game } from '@/types/admin.interface'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Batches = () => {
  const [filteredBatches, setFilteredBatches] = useState<Batch[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [batches, setBatches] = useState<Batch[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const router = useRouter();

  useEffect(() => {

    const fetchData = async () => {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const authCookie = cookies.find(cookie => cookie.startsWith('Authorization='));
      const authToken = authCookie ? authCookie.split('=')[1] : '';
      const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get-all', {
        headers: {
          'Authorization': authToken
        }
      });
      setBatches(res.data)
      // const res2 = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
      //   headers: {
      //     'Authorization': authToken
      //   }
      // });
      // setGames(res2.data)
      // console.log(res2.data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredBatches(batches.filter(batch => batch.title.toLowerCase().includes(searchTerm)));
  }, [searchTerm, batches]);

  const handleGameChange = (e: any) => {
    setSelectedGame(e.target.value);
  };

  const handleItemsPerPageChange = (e: any) => {
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(selectedGame.toLowerCase()));

  const sortedBatches = filteredBatches.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="ml-32 m-8 space-y-4">
      <div className="flex flex-row justify-between">
        <InputSearch onChange={(e: any) => setSearchTerm(e.target.value)} />
        <Button onClick={() => router.replace("/admin/batches/create")}>Create Batche</Button>
      </div>
      <div className="flex flex-row justify-end space-x-3">
        <select value={selectedGame} onChange={handleGameChange} className='flex flex-row items-center font-sans text-xm text-center font-semibold text-[#f9fafb] py-2 px-3 rounded-xl bg-blue-500 bg-[rgba(17,22,46,0.3)]'>
          <option className='text-left' value="">All</option>
          {games.map((game) => (
            <option className='text-left' key={game.id} value={game.name}>
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
                  <td>{!batch.game ? (
                    <>Null</>
                  ) : (
                    <>
                    {batch.game.name}
                    </>
                  )}</td>
                  <td className='flex items-center justify-end space-x-3'>
                    <Button>Replicate</Button>
                    <Button>View</Button>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
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
          <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= filteredBatches.length}>Next</button>
          </div>
        )}
      </div>
    </div >
  )
}

export default Batches
