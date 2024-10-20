/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Game, Batch } from '@/types/admin.interface';
import {
    GridRowId,
} from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';
import ButtonExit from '@/components/interface/admin/ButtonExit';

const GamesPage = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [batches, setBatches] = useState<Batch[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        console.log(2)
        const fetchData = async () => {
            if (loading) {
            const res2 = await axiosWithAuthAdmin.get('/admin/games/get-all')
            setGames(res2.data)
            console.log(res2.data)
            setLoading(false);
            }
        };
        fetchData();
        }, [])
    

    const editGame = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/games/" + id + "/edit");
        },
        [],
    );

    const modifiedGames = games.map(game => ({
        ...game,
        iconUrl: game.iconUrl ? "yes" : "no"
    }))

    const columns = [
        { key: "id" as keyof Game, label: "ID" },
        { key: "name" as keyof Game, label: "Name" },
        { key: "steamGameID" as keyof Game, label: "Steam Game ID" },
        { key: "isMain" as keyof Game, label: "Is Main" },
        {
            key: "iconUrl" as keyof Game,
            label: "Icon",
            renderCell: (params: any) => (params.value ? "да" : "нет"),
        },
    ]

    return (
        <div style={{ height: loading ? 400 : games.length === 0 ? 400 : '' }} className="mt-20 ml-8 xl:ml-[110px] lg:ml-[250px] md:ml-60 lg:ml-[150px] max-md:ml-[0px] md:mt-8 mb-8 ">
            <div className = "flex justify-end mb-6">
                <ButtonExit/>
            </div>
            <DataGrid
                data={modifiedGames} 
                columns={columns}
                showSettingsButton={true}
            />
        </div>
    )
}


export default GamesPage
