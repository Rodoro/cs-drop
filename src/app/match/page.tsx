'use client'
import { Poster, PosterMobile } from "@/components/common/Poster"
import { SelectTop } from "@/components/interface/Select"
import { ItemCardMatch } from "@/containers/page/match/Item"
import { IItemMathCard } from "@/types/ui.types"
import { motion } from "framer-motion"
import { useState } from "react"
import { TbLayout2Filled } from "react-icons/tb"

const variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        }
    },
}

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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main>
            <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <PosterMobile className="flex lg:hidden mt-5" />
            <div className="flex flex-row my-8 items-center gap-5">
                <div className="flex items-center gap-1.5 opacity-[0.6]">
                    <TbLayout2Filled className="text-[26px]" />
                    <div className="text-white font-medium leading-[normal]">Matches</div>
                </div>
                <SelectTop value={rating} setValue={setRating} />
                {/* TODO: Фильтры */}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 min-h-full">
                <motion.ul initial='hidden' animate='show' variants={variants} className="col-span-3 flex flex-wrap h-max justify-around lg:justify-center gap-5 min-[1700px]:gap-x-16 min-[1700px]:gap-y-9">
                    {matchs.map((item, index) => {
                        return <ItemCardMatch
                            item={item}
                            key={index}
                            scale={!hoveredIndex ? null : hoveredIndex !== null && hoveredIndex !== index + 1}
                            onMouseEnter={() => setHoveredIndex(index + 1)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    })}
                </motion.ul>
                <Poster className="hidden lg:flex" />
            </div>
        </main>
    )
}

export default MatchPage
