'use client'
import { SelectTop } from "@/components/interface/Select"
import { ItemCardMatchPrew } from "@/containers/page/match/Item"
import { motion } from "framer-motion"
import { useState } from "react"
import { TbLayout2Filled } from "react-icons/tb"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  },
}

const itemVar = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
}

const match = [
  {
    date: 'Today',
    matches: [
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: true, current: '125,8', yourBid: "0" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
    ]
  },
  {
    date: 'Yesterday',
    matches: [
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: true, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "0" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: true, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: true, current: '125,8', yourBid: "0" },
      { time: "Apr. 15 - 23:00", teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png', count: 4 }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png', count: 1 }], isLive: false, current: '125,8', yourBid: "500" },
    ]
  }
]

const MatchPrevPage = () => {
  const [rating, setRating] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number[]>([]);

  return (
    <main>
      <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
      <div className="flex flex-row mt-8 items-center gap-5">
        <div className="flex items-center gap-1.5 opacity-[0.6]">
          <TbLayout2Filled className="text-[26px]" />
          <div className="text-white font-medium leading-[normal]">Matches</div>
        </div>
        <SelectTop value={rating} setValue={setRating} />
        {/* TODO: Фильтры */}
      </div>
      <div className="min-h-full">
        <motion.ul initial='hidden' animate='show' variants={variants} className="flex flex-wrap h-max">
          {match.map((item, index1) => {
            return (
              <motion.div variants={itemVar} key={index1} className="w-full">
                <div className="w-full flex items-center justify-center my-6" style={{ opacity: index1 === 0 ? '100%' : '40%' }}>
                  <div className="flex-1 h-[1px] bg-[#AABCF9] mx-5" />
                  <div className="text-nowrap text-[##AABCF9]">{item.date}</div>
                  <div className="flex-1 h-[1px] bg-[#AABCF9] mx-5" />
                </div>
                <ul className="flex flex-wrap h-max justify-around lg:justify-center gap-5 min-[1700px]:gap-x-16 min-[1700px]:gap-y-9">
                  {item.matches.map((item, index2) => {
                    return <ItemCardMatchPrew
                      item={item}
                      key={index2}
                      scale={!hoveredIndex[index1] ? null : hoveredIndex[index1] !== null && hoveredIndex[index1] !== index2 + 1}
                      onMouseEnter={() => {
                        const newHoveredIndices = [...hoveredIndex];
                        newHoveredIndices[index1] = index2 + 1;
                        setHoveredIndex(newHoveredIndices);
                      }}
                      onMouseLeave={() => {
                        const newHoveredIndices = [...hoveredIndex];
                        newHoveredIndices[index1] = 0;
                        newHoveredIndices[index2] = 0;
                        setHoveredIndex(newHoveredIndices);
                      }}
                    />
                  })}
                </ul>
              </motion.div>
            )
          })}
        </motion.ul>
      </div>
    </main>
  )
}

export default MatchPrevPage
