"use client"
import Button from '@/components/interface/Button';
import { Game } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const GameEdit = ({ params }: { params: { id: number } }) => {
    const [game, setGame] = useState<Game>();
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    const [name, setName] = useState('');
    const [steamgameID, setSteamgameID] = useState('');
    const [isMain, setIsMain] = useState<boolean>(false);
    const [iconUrl, setIconUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/games/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setGame(res.data[params.id - 1]);
                setName(res.data[params.id - 1].name)
                setSteamgameID(res.data[params.id - 1].steamGameID)
                setIsMain(res.data[params.id - 1].isMain)
                setIconUrl(res.data[params.id - 1].iconUrl)
            }
        };
        fetchData();
    }, [session]);

    const handleSubmit = async () => {
        const data = {
            id: Number(params?.id),
            name: name,
            steamGameID: Number(steamgameID),
            isMain: isMain,
            iconUrl: iconUrl,
        };
        await axios.patch('http://95.165.94.222:8090/api/v1/admin/games/update', data, {
            headers: {
                'Authorization': session?.token.accessToken
            }
        });
    };

    return (
        <div className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8">
            <table className="table-auto w-full">
                <tbody>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Name</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={name} onChange={e => setName(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Steam Game ID</td>
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
                <Button onClick={() => { handleSubmit(); router.push("/admin/games") }}>Update</Button>
            </div>
        </div>
    )
}

export default GameEdit
