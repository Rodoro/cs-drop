/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect, useState } from 'react'
import DataGrid from '@/containers/admin/DataGrid';
import { Game } from '@/types/admin.interface';
import {
    GridRowId,
} from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { axiosWithAuthAdmin } from '@/api/intreceptors';


const GamesPage = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosWithAuthAdmin.get('/admin/games/get-all');
                setGames(res.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const editGame = React.useCallback(
        (id: GridRowId) => () => {
            router.push("/admin/games/" + id + "/edit");
        },
        [],
    );

    const columns = [
        { key: "id" as keyof Game, label: "ID" },
        { key: "name" as keyof Game, label: "Game" },
        { key: "steamGameID" as keyof Game, label: "Steam Game ID" },
        { key: "iconUrl" as keyof Game, label: "Icon URL" },
    ];

    return (
        <div style={{ height: loading ? 400 : games.length === 0 ? 400 : '' }} className="mt-20 mr-8 ml-8 md:ml-32 md:mt-8 mb-8">
                <DataGrid
                    data={games} 
                    columns={columns}
                />
        </div>
    )
}


export default GamesPage
