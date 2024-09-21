"use client"
import Button from '@/components/interface/admin/Buttоn'
import { Batch, Game } from '@/types/admin.interface'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ErrorModal from '@/components/common/ErrorModal';
import { axiosWithAuthAdmin } from '@/api/intreceptors'
import { IoIosCheckmark } from "react-icons/io";


const LootCreate = (checked: boolean) => {
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
            const res = await axiosWithAuthAdmin.get('/admin/games/get-all');
            setGames(res.data)
            const res2 = await axiosWithAuthAdmin.get('/admin/batches/get-all');
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
            <table className="table-auto w-full rounded-lg">
                <tbody>
                    <tr className="bg-[#0A0D1D4D]  rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Game *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <select value={selectGame} onChange={e => setSelectGame(e.target.value)} required className="placeholder-[#AABCF9] focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]">
                                <option value='' disabled selected>-/-</option>
                                {games.map((game) => (
                                    <option key={game.id} value={game.id}>
                                        {game.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Batch *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <select value={selectBatch} onChange={e => setSelectBatch(e.target.value)} required className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]">
                                <option value='' disabled selected>-/-</option>
                                {batches.map((batch) => (
                                    <option key={batch.id} value={batch.id}>
                                        {batch.title}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Title ENG *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <input 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            required 
                            className="placeholder-[#AABCF9] text-[#AABCF9] focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                        />
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Title locals *</td>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-col space-y-3">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Language:</th>
                                        <th>Title:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {locales.map((locale, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input value={locale.title} onChange={e => handleChangeTitle(index, e.target.value)} required className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]" />
                                            </td>
                                            <td>
                                                <input value={locale.text} onChange={e => handleChangeText(index, e.target.value)} required className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]" />
                                            </td>
                                            <td>
                                                <button 
                                                    onClick={() => handleDeleteRow(index)}
                                                    className='text-red-700 ml-3 p-1 px-3 rounded-full border-2'
                                                    style={{
                                                        border: '1px solid transparent',
                                                        background: 'linear-gradient(#2A1B36, #2A1B36) padding-box, linear-gradient(to right, #6A3B4D, #38223C) border-box',
                                                    }}
                                                >
                                                    <b>-</b>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={handleAddRow} className='text-white'>+ Add Row</button>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Image URL *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} required className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D]  rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Image hover URL *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={imgHoverUrl} onChange={e => setImgHoverUrl(e.target.value)} required className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] b rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Price *</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input value={price} onChange={e => setPrice(e.target.value)} required type="number" className="focus:outline-none flex flex-row border text-sm rounded-lg w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]">
                            </input>
                        </td>
                    </tr>
                    <tr className="bg-[#0A0D1D4D] rounded-lg">
                        <td className="px-6 py-4 whitespace-nowrap">Is Visible?</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isVisible}
                                onChange={e => setIsVisible(e.target.checked)}
                    />
                    <div
                        className={`relative w-6 h-6 border-2 rounded-md border-[#AABCF9] transition-colors duration-300 ease-in-out hover:bg-[#22276E] ${checked ? 'bg-[#7E50FF] border-[#7E50FF] shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] transform scale-105' : 'border-[#AABCF9]'}`}
                    >
                        {checked && (
                            <IoIosCheckmark className="absolute w-5 h-5 text-white top-0 left-0 transition-transform duration-300 ease-in-out" />
                        )}
                    </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 flex flex-row justify-end">
                <Button onClick={() => router.push("/admin/loot-cases")} className="h-[45px]">Cancel</Button>
                <Button onClick={() => handleSubmit()} className="bg-[#7E50FF] ml-[25px] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] justify-center px-[30px] h-[45px]">Create</Button>
            </div>
        </div>
    )
}

export default LootCreate
