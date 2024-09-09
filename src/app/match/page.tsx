'use client'
import { SelectTop } from "@/components/interface/Select"
import { ItemCardMatch } from "@/containers/page/match/Item"
import { IItemMathCard } from "@/types/ui.types"
import { useState } from "react"
import { TbLayout2Filled } from "react-icons/tb"

const matchs: IItemMathCard[] = [
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "0" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: true, current: '125,8', yourBid: "500" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "500" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "0" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: true, current: '125,8', yourBid: "500" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "500" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "500" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: true, current: '125,8', yourBid: "0" },
    { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }], isLive: false, current: '125,8', yourBid: "500" },
]

const MatchPage = () => {
    const [rating, setRating] = useState(0)

    return (
        <main>
            <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <div className="flex flex-row my-8 items-center gap-5">
                <div className="flex items-center gap-1.5 opacity-[0.6]">
                    <TbLayout2Filled className="text-[26px]" />
                    <div className="text-white font-medium leading-[normal]">Matches</div>
                </div>
                <SelectTop value={rating} setValue={setRating} />
                {/* TODO: Фильтры */}
            </div>
            <div className="grid grid-cols-4 h-full">
                <ul className="col-span-3 h-full space-y-7">
                    {matchs.map((item, index) => {
                        return <ItemCardMatch item={item} key={index} />
                    })}
                </ul>
                <div>
                    Poster
                </div>
            </div>
        </main>
    )
}

export default MatchPage
