"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import React, { useState } from 'react'

const CreateBatches = () => {
    const [title, setTitle] = useState('');
    const [game, setGame] = useState('');
    const [locales, setLocales] = useState([{ language: 'ru', title: '' }, { language: 'en', title: '' }]);

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

    const handleAddRow = () => {
        setLocales([...locales, { language: '', title: '' }]);
    };

    const handleDeleteRow = (index: number) => {
        const newLocales = [...locales];
        newLocales.splice(index, 1);
        setLocales(newLocales);
    };

    return (
        <div className="ml-32 m-8 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Create Batch
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div>
                        <label>Title:</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label>Game:</label>
                        <input value={game} onChange={e => setGame(e.target.value)} />
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
                                            <input value={locale.language} onChange={e => handleChangeLanguage(index, e.target.value)} />
                                        </td>
                                        <td>
                                            <input value={locale.title} onChange={e => handleChangeTitle(index, e.target.value)} />
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteRow(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button onClick={handleAddRow}>+ Add Row</button>
                        <div>
                            <button>Create</button>
                            <button>Create and Open New</button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateBatches
