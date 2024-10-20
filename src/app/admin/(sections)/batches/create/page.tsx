"use client"
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ErrorModal from '@/components/common/ErrorModal';
import Button3 from '@/components/interface/admin/Buttоn';
import { Game } from '@/types/admin.interface';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Button from '@/components/interface/admin/Buttоn';
import { authService } from '@/services/auth/auth.services';
import { FaDoorOpen } from "react-icons/fa6";

const CreateBatches = () => {
    const [loading, setLoading] = useState(true)
    const [games, setGames] = useState<Game[]>([]);
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
            const res = await axiosWithAuthAdmin.get('/admin/games/get-all');
            setGames(res.data)
            setLoading(false)
        };
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
            await axiosWithAuthAdmin.post('/admin/batches/create', batchData)
        } catch (err: any) {
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
            await axiosWithAuthAdmin.post('/admin/batches/create', batchData)
        } catch (err: any) {
            setStatus('Ошибка: ' + err.response.status)
            setMessage(err.response.data)
            setOpen(true)
            return
        }
        router.push("/admin/batches")
    }


    return (
        <div className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8" >
            <ErrorModal status={status} message={message} visible={open} setVisible={setOpen} />
            <table
                style={{
                    border: '1px solid transparent',
                    background: 'linear-gradient(#141330, #141330) padding-box, linear-gradient(to top, #171833, #3D3456) border-box',
                }}
                className="table-auto w-full bg-[#0A0D1D4D] border-[1px]  border-[#FFFFFF26] rounded-lg overflow-hidden"
                > 
            <tbody className='rounded-lg'>
                <tr className="bg-[#0A0D1D4D]">
                    <td className="px-6 py-4 whitespace-nowrap">Title *</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <input 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            required 
                            style={{
                                border: '1px solid transparent',
                                background: 'linear-gradient(#18173D, #18173D) padding-box, linear-gradient(to top, #FFFFFF01, #FFFFFF26) border-box',
                            }}
                            className=" focus:outline-none flex flex-row border text-sm rounded-2xl h-[51px] w-full p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                        />
                    </td>
                </tr>
                <tr className="bg-[#0A0D1D4D]  ">
                    <td className="px-6 py-4 whitespace-nowrap">Game *</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <select 
                            value={selectGame} 
                            onChange={e => setSelectGame(e.target.value)} 
                            required
                            style={{
                                border: '1px solid transparent',
                                background: 'linear-gradient(#18173D, #18173D) padding-box, linear-gradient(to top, #FFFFFF01, #FFFFFF26) border-box',
                            }}
                            className="flex flex-row focus:outline-none border text-sm text-[#AABCF9] rounded-2xl w-full h-[51px] p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9] focus:text-[#F9FAFB] focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                        >
                            <option className='bg-[#191434] focus:outline-none text-[#AABCF9]' value='' disabled>-/-</option>
                            {games.map((game) => (
                                <option className='bg-[#191434] border' key={game.id} value={game.id}>
                                    {game.name}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
                <tr className="bg-[#0A0D1D4D] ">
                    <td className="px-6 py-4 whitespace-nowrap">Sort *</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <input 
                            type="number" 
                            value={sort} 
                            onChange={e => setSort(e.target.value)} 
                            required
                            style={{
                                border: '1px solid transparent',
                                background: 'linear-gradient(#18173D, #18173D) padding-box, linear-gradient(to top, #FFFFFF01, #FFFFFF26) border-box',
                            }}
                            className="focus:outline-none flex flex-row border text-sm text-[#AABCF9] rounded-2xl w-full h-[51px] p-2.5 bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9]  focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                        />
                    </td>
                </tr>
                <tr className="bg-[#0A0D1D4D] ">
                    <td className="px-6 py-4 whitespace-nowrap">Title locales *</td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col space-y-3">
                        <table className="w-full">
                            <thead className=''>
                                <tr className=''>
                                    <th className=''>Language:</th>
                                    <th className=''>Title:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locales.map((locale, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input 
                                                value={locale.title} 
                                                onChange={e => handleChangeTitle(index, e.target.value)} 
                                                required 
                                                style={{
                                                    border: '1px solid transparent',
                                                    background: 'linear-gradient(#18173D, #18173D) padding-box, linear-gradient(to right, #242447, #1B1D41) border-box',
                                                }}
                                                className=" focus:outline-none flex flex-row border text-sm text-[#AABCF9] rounded-2xl w-full h-[51px] p-2.5 m-[3px] bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9]  focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                value={locale.text} 
                                                onChange={e => handleChangeText(index, e.target.value)} 
                                                required 
                                                style={{
                                                    border: '1px solid transparent',
                                                    background: 'linear-gradient(#18173D, #18173D) padding-box, linear-gradient(to right, #242447, #1B1D41) border-box',
                                                }}
                                                className=" focus:outline-none flex flex-row border text-sm text-[#AABCF9] rounded-2xl w-full h-[51px] p-2.5 m-[3px] bg-[#22276E33] border-[#FFFFFF26] placeholder-[#AABCF9]  focus:bg-[#8B32FC33] focus:border-[#6A12FA]" 
                                            />
                                        </td>
                                        <td>
                                        <button 
                                            onClick={() => handleDeleteRow(index)} 
                                            className='text-red-700 ml-3 p-1 px-3 rounded-full w-[37px] h-[37px] border-2'
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
                        <button onClick={handleAddRow} className='text-[#F9FAFB]'>+ Add Row</button>
                    </td>
                </tr>
            </tbody>
        </table>
            <div className='flex flex-row justify-end space-x-3 mt-4 block'>
                <Button onClick={() => router.push("/admin/batches") } className="h-[45px] text-white">Cancel</Button>
                <Button3 className='bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] justify-center w-[110px] h-[45px]' onClick={() => handleSubmitAndMain()}>Create</Button3>
                <Button3 className='bg-[#7E50FF] text-white shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] justify-center w-[203px] h-[45px]' onClick={handleSubmitAndNew}>Create and Open New</Button3>
            </div>
        </div>
    )
}

export default CreateBatches
