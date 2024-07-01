"use client"
import Button from '@/components/interface/Button'
import { Batch, Game } from '@/types/admin.interface'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ErrorModal from '@/components/common/ErrorModal';
import { axiosWithAuthAdmin } from '@/api/intreceptors'

const LootCreate = () => {
    const [loading, setLoading] = useState(true)
    const [games, setGames] = useState<Game[]>([])
    const [batches, setBatches] = useState<Batch[]>([])
    const router = useRouter();

    const [locales, setLocales] = useState([{ title: 'ru', text: '' }, { title: 'en', text: '' }]);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imgHoverUrl, setImgHoverUrl] = useState('');
    const [price, setPrice] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectGame, setSelectGame] = useState<string>('');
    const [selectBatch, setSelectBatch] = useState<string>('');

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('200');
    const [message, setMessage] = React.useState('Ok!')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosWithAuthAdmin.get('http://95.165.94.222:8090/api/v1/admin/games/get-all');
            setGames(res.data)
            const res2 = await axiosWithAuthAdmin.get('http://95.165.94.222:8090/api/v1/admin/batches/get-all');
            setBatches(res2.data)
            setLoading(false)
        }
        fetchData();
    }, []);

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
        if (!selectGame || !selectBatch || !title || !locales || !imgUrl || !imgHoverUrl || !price) {
            setStatus('Ошибка данных')
            setMessage('Все поля с "*" должны быть заполнены')
            setOpen(true)
            return;
        }
        const data = {
            gameId: Number(selectGame),
            batchId: Number(selectBatch),
            title,
            locales: locales.map(locale => ({ title: locale.title, text: locale.text })),
            image: imgUrl,
            imageHover: imgHoverUrl,
            price: Number(price),
            isVisible
        }
        try {
            const res = await axiosWithAuthAdmin.post('/admin/lootcases/create-case', data);
            if (res.data.error) {
                setStatus('Ошибка: ' + res.data.error.code)
                setMessage(res.data.error.description)
                setOpen(true)
                return
            }
        } catch (err: any) {
            setStatus('Ошибка: ' + err.response.status)
            setMessage(err.response.data)
            setOpen(true)
            return
        }
        router.push('/admin/loot-cases')
    }

    if (loading) return <h1 className="flex min-h-screen flex-col items-center mt-6">Загрузка...</h1>

    return (
        <div className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
            <ErrorModal status={status} message={message} visible={open} setVisible={setOpen} />
            <table className="table-auto w-full">
                <tbody>
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
                        <td className="px-6 py-4 whitespace-nowrap">Batch *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <select value={selectBatch} onChange={e => setSelectBatch(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                                <option value='' disabled selected>-/-</option>
                                {batches.map((batch) => (
                                    <option key={batch.id} value={batch.id}>
                                        {batch.title}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title (EN) *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={title} onChange={e => setTitle(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
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
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Image URL *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Image hover URL *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={imgHoverUrl} onChange={e => setImgHoverUrl(e.target.value)} required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Price *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={price} onChange={e => setPrice(e.target.value)} required type="number" className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Is Visible</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input checked={isVisible} onChange={e => setIsVisible(e.target.checked)} type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 flex flex-row justify-end">
                <Button onClick={() => handleSubmit()} className="px-6">Create</Button>
            </div>
        </div>
    )
}

export default LootCreate
