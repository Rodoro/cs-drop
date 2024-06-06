"use client"
import React, { useState } from 'react'
import { Item } from './cart/Item'
import { SelectTop } from './interface/Select'
import { useTranslation } from '@/hook/useLanguageStore'

const LiveDrops = () => {
    const [valueLiveDrop, setValueLiveDrop] = useState("all");
    const { getTranslation } = useTranslation();
    return (
        <div>
            <div className="flex flex-row my-8 items-center gap-5">
                <div className="flex items-center gap-1.5 opacity-[0.6]">
                    <div className="gap-0.5 flex items-center">
                        <div className="w-2 h-3 opacity-[0.4] rounded-sm bg-white" />
                        <div className="w-[1.0625rem] h-[1.0625rem] opacity-[0.6] rounded-[0.1875rem] bg-white" />
                        <div className="w-2 h-3 opacity-[0.4] rounded-sm bg-white" />
                    </div>
                    <div className="text-white font-medium leading-[normal]">{getTranslation('components.liveDrops.title')}</div>
                </div>
                <SelectTop value={valueLiveDrop} setValue={setValueLiveDrop} />
            </div>
            <div className="scroler flex flex-row gap-4 items-center overflow-x-scroll">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default LiveDrops
