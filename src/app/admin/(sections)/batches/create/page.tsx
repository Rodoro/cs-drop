"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Button from '@/components/interface/Button';
import Input from '@/components/interface/Input';
import { Game } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CreateBatches = () => {
    const [title, setTitle] = useState('');
    const [locales, setLocales] = useState([{ language: 'ru', title: '' }, { language: 'en', title: '' }]);
    const [games, setGames] = useState<Game[]>([]);
    const [selectedGame, setSelectedGame] = useState();
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
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
        newLocales[index].language = value.slice(0, 2);
        setLocales(newLocales);
    };

    const handleChangeTitle = (index: number, value: string) => {
        const newLocales = [...locales];
        newLocales[index].title = value;
        setLocales(newLocales);
    };

    const handleGameChange = (e: any) => {
        setSelectedGame(e.target.value);
        console.log(e.target.value)
    };

    const handleAddRow = () => {
        setLocales([...locales, { language: '', title: '' }]);
    };

    const handleDeleteRow = (index: number) => {
        const newLocales = [...locales];
        newLocales.splice(index, 1);
        setLocales(newLocales);
    };

    const handleSubmit = async () => {
        const batchData = {
            title,
            gameId: selectedGame||1,
            languages: locales.map(locale => ({ title: locale.language, text: locale.title }))
        };
        console.log(selectedGame)
        await axios.post('http://95.165.94.222:8090/api/v1/admin/batches/create',batchData, {
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
        <div className="ml-72 m-8 space-y-4">
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
                                {locales.map((locale, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Input value={locale.language} onChange={e => handleChangeLanguage(index, e.target.value)} type={'text'} />
                                        </td>
                                        <td>
                                            <Input value={locale.title} onChange={e => handleChangeTitle(index, e.target.value)} type={'text'} />
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
                        <button onClick={() => router.replace("/admin/batches")}>Cancel</button>
                        <Button onClick={() => {handleSubmit(); router.replace("/admin/batches")}}>Create</Button>
                        <Button onClick={handleSubmitAndNew}>Create and Open New</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateBatches
