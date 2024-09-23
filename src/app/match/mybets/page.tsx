'use client'
import { IItemMatchMy } from "@/types/ui.types"
import { useState } from "react";
import { FaPiggyBank, FaRegCalendar } from "react-icons/fa"
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const items: IItemMatchMy[] = [
  {
    current: 1500,
    time: 'Apr. 15-32:00',
    teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }],
    bets: [{ count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' },]
  },
  {
    current: 1500,
    time: 'Apr. 15-32:00',
    teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }],
    bets: [{ count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' },]
  },
  {
    current: 1500,
    time: 'Apr. 15-32:00',
    teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }],
    bets: [{ count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' },]
  },
  {
    current: 1500,
    time: 'Apr. 15-32:00',
    teams: [{ name: '9 Pandas', iconUrl: '/img/example/panda.png' }, { name: 'Guild Esports', iconUrl: '/img/example/esports.png' }],
    bets: [{ count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' }, { count: '1.520', ountcome: 'P1', win: '2,520' },]
  },
]

const MatchMyBetsPage = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleItem = (id: any) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <main>
      <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
      <div className="flex my-8 gap-5 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <FaPiggyBank className="text-[26px]" />
            <div className="text-white font-medium leading-[normal]">Overall bets</div>
          </div>
          <span className="opacity-50">Amount</span>
        </div>
        <div className="flex">
          <div className="flex flex-col items-end">
            <span className="textRGBGradient font-bold text-[22px]">12</span>
            <span className="opacity-50">55.344 $</span>
          </div>
          {/* TODO: 2 кнопки, надо понять что они делать и зачем */}
        </div>
      </div>
      <ul className="flex flex-col gap-5">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div
                className="flex justify-between items-center"
              >
                <div>Match</div>
                <div className="flex items-center gap-2">
                  {item.teams[0].name}
                  <div
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                    }}
                    className="p-2 rounded-full"
                  >
                    <Image
                      className="object-contain max-w-[21px] max-h-[21px]"
                      src={item.teams[0].iconUrl}
                      alt={item.teams[0].name}
                      width={'21'}
                      height={'21'}
                    />
                  </div>
                  VS
                  <div
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                    }}
                    className="p-2 rounded-full"
                  >
                    <Image
                      className="object-contain max-w-[21px] max-h-[21px]"
                      src={item.teams[1].iconUrl}
                      alt={item.teams[1].name}
                      width={'21'}
                      height={'21'}
                    />
                  </div>
                  {item.teams[1].name}
                </div>
                <div style={{ opacity: expandedItemId === index ? '100%' : '60%' }} className="transition-opacity duration-500 flex items-center justify-center text-xs gap-2">
                  <FaRegCalendar className="text-[16px] mb-0.5" />
                  {item.time}
                </div>
                <div className='flex gap-3 items-center'>
                  <span>${item.current}</span>
                  <span>Bet {item.bets.length}</span>
                  <IoIosArrowDown
                    style={{
                      transition: 'transform 0.5s',
                      transform: expandedItemId === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {expandedItemId === index && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="flex"
                  >
                    {item.bets.map((item, index) => {
                      return <li key={index} className="flex justify-between px-[22px] pt-[22px] pb-4 gap-10">
                        <div className="opacity-60">
                          Bid 1:<br />
                          Outcome:<br />
                          Possible win:<br />
                        </div>
                        <div className="text-right">
                          {item.count}$<br />
                          {item.ountcome}<br />
                          <span>{item.win}$</span>
                        </div>
                      </li>
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </main >
  )
}

export default MatchMyBetsPage
