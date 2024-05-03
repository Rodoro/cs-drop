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
  const [title, setTitle] = useState('');
  const [locales, setLocales] = useState([]);
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState();
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

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

  const handleChangeLanguage = (index: number, value: string) => {
    const newLocales = [...locales];
    newLocales.find(locale => locale.id == index).title = value.slice(0, 2);
    setLocales(newLocales);
  };

  const handleChangeTitle = (index: number, value: string) => {
    const newLocales = [...locales];
    newLocales.find(locale => locale.id === index).text = value;
    setLocales(newLocales);
  };

  const handleGameChange = (e: any) => {
    setSelectedGame(e.target.value);
    console.log(e.target.value)
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
      gameId: selectedGame || 1,
      languages: locales.map(locale => ({ id: locale.id, title: locale.title, text: locale.text }))
    };
    console.log(selectedGame)
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
    <div className="ml-32 m-8 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Create Batch
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 mb-5">
          <div className='flex flex-row space-x-3 items-center'>
            <label>Title:</label>
            <Input required value={title} onChange={e => setTitle(e.target.value)} type={'text'} />
          </div>
          <div className='flex flex-row space-x-3 items-center'>
            <label>Game:</label>
            <select required value={selectedGame} onChange={handleGameChange} className='flex flex-row items-center font-sans text-xm text-center font-semibold text-[#f9fafb] py-2 px-3 rounded-xl bg-blue-500 bg-[rgba(17,22,46,0.3)]'>
              {games.map((game) => (
                <option className='text-left' key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {locales.map((locale) => (
                  <tr key={locale.id}>
                    <td>
                      <Input value={locale.title} onChange={e => handleChangeLanguage(locale.id, e.target.value)} type={'text'} />
                    </td>
                    <td>
                      <Input value={locale.text} onChange={e => handleChangeTitle(locale.id, e.target.value)} type={'text'} />
                    </td>
                    <td>
                      <Button onClick={() => handleDeleteRow(index)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddRow}>+ Add Row</button>
          </div>
          <div className='flex flex-row justify-end space-x-3'>
            <button onClick={() => router.replace("/admin/batches")}>Cansel</button>
            <Button onClick={() => { handleSubmit(); router.replace("/admin/batches") }}>Update</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditBatches
