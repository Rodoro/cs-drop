/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ErrorModal from '@/components/common/ErrorModal';
import Button from '@/components/interface/Button';
import { Game } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const GameEdit = ({ params }: { params: { id: number } }) => {
    const [game, setGame] = useState<Game>();
    const router = useRouter();

    const [name, setName] = useState('');
    const [steamgameID, setSteamgameID] = useState('');
    const [isMain, setIsMain] = useState<boolean>(false);
    const [iconUrl, setIconUrl] = useState('');

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('200');
    const [message, setMessage] = React.useState('Ok!')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('/admin/games/get-all');
            setGame(res.data[params.id - 1]);
            setName(res.data[params.id - 1].name)
            setSteamgameID(res.data[params.id - 1].steamGameID)
            setIsMain(res.data[params.id - 1].isMain)
            setIconUrl(res.data[params.id - 1].iconUrl)
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        if (!name || !steamgameID) {
            setStatus('Ошибка данных')
            setMessage('Все поля с "*" должны быть заполнены')
            setOpen(true)
            return;
        }
        const data = {
            id: Number(params?.id),
            name: name,
            steamGameID: Number(steamgameID),
            isMain: isMain,
            iconUrl: iconUrl,
        };
        try {
            await axiosWithAuthAdmin.patch('/admin/games/update', data);
        } catch (err: any) {
            setStatus('Ошибка: ' + err.response.status)
            setMessage(err.response.data)
            setOpen(true)
            return
        }
        router.push("/admin/games")
    };

    return (
        <div className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <ErrorModal status={status} message={message} visible={open} setVisible={setOpen} />
            <table className="table-auto w-full">
                <tbody>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Name *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={name} onChange={e => setName(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Steam Game ID *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={steamgameID} type="number" onChange={e => setSteamgameID(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Is Main</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input checked={isMain} onChange={e => setIsMain(e.target.checked)} type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Icon URL</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={iconUrl} onChange={e => setIconUrl(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='flex flex-row justify-end space-x-3 mt-4'>
                <button onClick={() => router.push("/admin/games")}>Cansel</button>
                <Button onClick={() => handleSubmit()}>Update</Button>
            </div>
        </div>
    )
}

export default GameEdit
