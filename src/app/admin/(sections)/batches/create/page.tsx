"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import ErrorModal from '@/components/common/ErrorModal';
import Button from '@/components/interface/Button';
import Input from '@/components/interface/Input';
import { Game } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CreateBatches = () => {
    const [loading, setLoading] = useState(true)
    const [games, setGames] = useState<Game[]>([]);
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    const [locales, setLocales] = useState([{ title: 'ru', text: '' }, { title: 'en', text: '' }]);
    const [title, setTitle] = useState<string>('');
    const [selectGame, setSelectGame] = useState<string>('');
    const [sort, setSort] = useState<string>('');

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('200');
    const [message, setMessage] = React.useState('Ok!')

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setGames(res.data)
                setLoading(false)
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

    const handleSubmitAndNew = async () => {
        if (!title || !sort || !selectGame || !locales) {
            setStatus('Ошибка данных')
            setMessage('Все поля с "*" должны быть заполнены')
            setOpen(true)
            return;
        }
        const batchData = {
            title,
            sort: Number(sort),
            gameId: Number(selectGame) || 1,
            languages: locales.map(locale => ({ title: locale.title, text: locale.text }))
        };
        try {
            await axios.post('http://95.165.94.222:8090/api/v1/admin/batches/create', batchData, {
                headers: {
                    'Authorization': session?.token.accessToken
                }
            })
        } catch(err: any){
            setStatus('Ошибка: ' + err.response.status)
            setMessage(err.response.data)
            setOpen(true)
            return
        }
        window.location.reload();
    };

    const handleSubmitAndMain = async () => {
        if (!title || !sort || !selectGame || !locales) {
            setStatus('Ошибка данных')
            setMessage('Все поля с "*" должны быть заполнены')
            setOpen(true)
            return;
        }
        const batchData = {
            title,
            sort: Number(sort),
            gameId: Number(selectGame) || 1,
            languages: locales.map(locale => ({ title: locale.title, text: locale.text }))
        };
        try {
            await axios.post('http://95.165.94.222:8090/api/v1/admin/batches/create', batchData, {
                headers: {
                    'Authorization': session?.token.accessToken
                }
            })
        } catch(err: any){
            setStatus('Ошибка: ' + err.response.status)
            setMessage(err.response.data)
            setOpen(true)
            return
        }
        router.push("/admin/batches")
    }


    return (
        <div className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <ErrorModal status={status} message={message} visible={open} setVisible={setOpen} />
            <table className="table-auto w-full">
                <tbody>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={title} onChange={e => setTitle(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Game *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <select value={selectGame} onChange={e => setSelectGame(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                                <option value='' disabled selected>-/-</option>
                                {games.map((game) => (
                                    <option key={game.id} value={game.id}>
                                        {game.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Sort *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input type="number" value={sort} onChange={e => setSort(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title locales *</td>
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
                <button onClick={() => router.push("/admin/batches")}>Cancel</button>
                <Button onClick={() => handleSubmitAndMain()}>Create</Button>
                <Button onClick={handleSubmitAndNew}>Create and Open New</Button>
            </div>
        </div>
    )
}

export default CreateBatches
