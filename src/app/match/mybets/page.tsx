'use client'
import { IItemMatchMy } from "@/types/ui.types"
import { useState } from "react";
import { FaPiggyBank, FaRegCalendar } from "react-icons/fa"
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import style from './page.module.css'

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.3
    }
  }
}

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
      <motion.ul
        animate='show'
        variants={variants}
        initial='hidden'
        className="flex flex-col gap-5"
      >
        {items.map((item, index) => {
          return (
            <motion.li
              variants={itemVar}
              key={index}
              style={{
                // border: '1px solid transparent',
                // transition: ' opacity 0.3s',
                // background: 'linear-gradient(#231C50,#231C50) padding-box, linear-gradient(130deg,#433D69,#231C50) border-box'
              }}
              className={"cursor-pointer py-4 px-7 rounded-[20px] relative"}
            >
              <div
                style={{ background: 'linear-gradient(#231C50,#231C50) padding-box, linear-gradient(130deg,#433D69,#231C50) border-box', border: '2px solid transparent', }}
                className="absolute rounded-[20px] w-full h-full bg-red-600 top-0 left-0 -z-[1]" />
              <div
                style={{ opacity: expandedItemId === index ? 1 : 0, background: 'linear-gradient(#22276E,#22276E) padding-box, linear-gradient(130deg,#1FA1FF,#6A12FA,#B8A6FF) border-box', border: '2px solid transparent', }}
                className="absolute rounded-[20px] w-full h-full bg-red-600 top-0 left-0 -z-[1] transition-all duration-500" />
              <div
                onClick={() => toggleItem(index)}
                className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center z-[1]"
              >
                <div className="w-full lg:w-auto flex max-w-96 justify-between items-center">
                  <Link
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(#383160,#383160) padding-box, linear-gradient(130deg,#8386AD,#414582) border-box'
                    }}
                    className="py-2 pl-6 pr-4 text-xs lg:text-base rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    href={"/match/" + index}
                  >
                    Match
                    <GoArrowUpRight />
                  </Link>
                  <div style={{ opacity: expandedItemId === index ? '100%' : '60%' }} className="flex transition-opacity duration-500 lg:hidden items-center justify-center text-xs gap-2">
                    <FaRegCalendar className="text-[16px] mb-0.5" />
                    {item.time}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="flex-1 lg:flex-none">{item.teams[0].name}</span>
                  <div
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                    }}
                    className="p-2 rounded-full mr-2"
                  >
                    <Image
                      className="object-contain max-w-[26px] max-h-[26px]"
                      src={item.teams[0].iconUrl}
                      alt={item.teams[0].name}
                      width={'26'}
                      height={'26'}
                    />
                  </div>
                  <span className="opacity-30">VS</span>
                  <div
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                    }}
                    className="p-2 rounded-full ml-2"
                  >
                    <Image
                      className="object-contain max-w-[26px] max-h-[26px]"
                      src={item.teams[1].iconUrl}
                      alt={item.teams[1].name}
                      width={'26'}
                      height={'26'}
                    />
                  </div>
                  <span className="flex-1 lg:flex-none">{item.teams[1].name}</span>
                </div>
                <div style={{ opacity: expandedItemId === index ? '100%' : '60%' }} className="hidden transition-opacity duration-500 lg:flex items-center justify-center text-xs gap-2">
                  <FaRegCalendar className="text-[16px] mb-0.5" />
                  {item.time}
                </div>
                <div className='flex gap-6 items-center'>
                  <span className="font-bold text-[#AABCF9]">${item.current}</span>
                  <span className="text-xl text-white/[.60]">Bet <span className="font-bold text-white">{item.bets.length}</span></span>
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
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="flex gap-2 overflow-y-hidden mp-4 z-[1] overflow-x-auto"
                  >
                    {item.bets.map((item, index) => {
                      return <li
                        key={index}
                        style={{
                          // border: '2px solid transparent',
                          // background: 'linear-gradient(#1D225E,#1D225E) padding-box, linear-gradient(130deg,#3E4276,#1D225E) border-box'
                        }}
                        className={"select-none group opacity-100 flex rounded-2xl justify-between px-[22px] pt-[22px] pb-4 gap-8 mt-4 relative"}
                      >
                        <div
                          style={{ background: 'linear-gradient(#1D225E,#1D225E) padding-box, linear-gradient(130deg,#3E4276,#1D225E) border-box', border: '2px solid transparent', }}
                          className="group-hover:opacity-0 absolute rounded-[20px] w-full h-full bg-red-600 top-0 left-0 -z-[1] duration-300" />
                        <div
                          style={{ background: 'linear-gradient(#14183D,#14183D) padding-box, linear-gradient(130deg,#444765,#14183D) border-box', border: '2px solid transparent', }}
                          className="opacity-0 group-hover:opacity-100 absolute rounded-[20px] w-full h-full bg-red-600 top-0 left-0 -z-[1] transition-all duration-300" />
                        <div className="opacity-60 whitespace-nowrap leading-8">
                          Bid 1:<br />
                          Outcome:<br />
                          Possible win:<br />
                        </div>
                        <div className="text-right font-bold whitespace-nowrap leading-8">
                          {item.count}$<br />
                          {item.ountcome}<br />
                          <span
                            style={{
                              border: '2px solid transparent',
                              background: 'linear-gradient(#33355D,#33355D) padding-box, linear-gradient(130deg,#7F7259,#33355D) border-box'
                            }}
                            className="text-[#FFD952] py-1 px-3 rounded-md"
                          >
                            {item.win}$
                          </span>
                        </div>
                      </li>
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </motion.ul>
    </main >
  )
}

export default MatchMyBetsPage
