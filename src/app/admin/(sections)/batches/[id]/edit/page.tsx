"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import Button from '@/components/interface/Button';
import Input from '@/components/interface/Input';
import { Batch, Game } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const EditBatches = ({ params }: { params: { id: number } }) => {
  const [batch, setBatche] = useState<Batch>();
  const [games, setGames] = useState<Game[]>([]);
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [locales, setLocales] = useState([]);
  const [selectedGame, setSelectedGame] = useState();
  const [sort, setSort] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get/' + params?.id, {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setBatche(res.data)
        setLocales(res.data.languages)
        setTitle(res.data.title)
        setSelectedGame(res.data.game.id)
        setSort(res.data.sort)
        const res2 = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setGames(res2.data)
      }
    };
    fetchData();
  }, [session]);

  const handleChangeTitle = (index: number, value: string) => {
    const newLocales = [...locales];
    newLocales[index].title = value.slice(0, 2);
    setLocales(newLocales);
  };

  const handleChangeText = (index: number, value: string) => {
    const newLocales = [...locales];
    newLocales[index].text = value;
    setLocales(newLocales);
  };

  const handleAddRow = () => {
    setLocales([...locales, { title: '', text: '' }]);
  };

  const handleDeleteRow = (index: number) => {
    const newLocales = [...locales];
    newLocales.splice(index, 1);
    setLocales(newLocales);
  };

  const handleSubmit = async () => {
    const batchData = {
      id: params?.id,
      title,
      sort: Number(sort),
      gameId: Number(selectedGame) || 1,
      languages: locales.map(locale => ({ id: locale.id, title: locale.title, text: locale.text }))
    };
    await axios.patch('http://95.165.94.222:8090/api/v1/admin/batches/update', batchData, {
      headers: {
        'Authorization': session?.token.accessToken
      }
    });
  };

  const handleSubmitAndNew = () => {
    handleSubmit();
    window.location.reload();
  }

  return (
    <div className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
      <table className="table-auto w-full">
        <tbody>
          <tr className="bg-[#272B35] border-gray-700 border-b">
            <td className="px-6 py-4 whitespace-nowrap">Title</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <input value={title} onChange={e => setTitle(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </td>
          </tr>
          <tr className="bg-[#272B35] border-gray-700 border-b">
            <td className="px-6 py-4 whitespace-nowrap">Game</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select value={selectedGame} onChange={e => setSelectedGame(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                {games.map((game) => (
                  <option key={game.id} value={game.id}>
                    {game.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr className="bg-[#272B35] border-gray-700 border-b">
            <td className="px-6 py-4 whitespace-nowrap">Sort</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <input type="number" value={sort} onChange={e => setSort(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </td>
          </tr>
          <tr className="bg-[#272B35] border-gray-700 border-b">
            <td className="px-6 py-4 whitespace-nowrap">Title locales</td>
            <td className="px-6 py-4 whitespace-nowrap flex flex-col space-y-3">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Language</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {locales.map((locale, index) => (
                    <tr key={index}>
                      <td>
                        <input value={locale.title} onChange={e => handleChangeTitle(index, e.target.value)} required className="flex flex-row border rounded-l-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                      </td>
                      <td>
                        <input value={locale.text} onChange={e => handleChangeText(index, e.target.value)} required className="flex flex-row border rounded-r-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                      </td>
                      <td>
                        <button onClick={() => handleDeleteRow(index)} className='text-red-700 ml-3 border-red-700 p-1 px-3 rounded-full border-2'>
                          <b>-</b>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleAddRow} className='text-cyan-500'>+ Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='flex flex-row justify-end space-x-3 mt-4'>
        <button onClick={() => router.replace("/admin/batches")}>Cansel</button>
        <Button onClick={() => { handleSubmit(); router.replace("/admin/batches") }}>Update</Button>
      </div>
    </div>
  )
}

export default EditBatches
