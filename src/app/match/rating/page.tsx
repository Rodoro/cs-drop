'use client'
import { SelectTop } from "@/components/interface/Select"
import { IItemMathRating } from "@/types/ui.types"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaPiggyBank } from "react-icons/fa"
import { IoFootballOutline } from "react-icons/io5"
import { TbAwardFilled } from "react-icons/tb"

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

const page = () => {
  const [rating, setRating] = useState(0)

  const ItemComponent = ({ isActive, item }: { isActive?: boolean, item?: IItemMathRating }) => {
    return (
      <motion.li
        variants={itemVar}
        className="flex gap-1 md:gap-3 py-4 px-4 md:px-7 rounded-2xl items-center"
        style={{
          color: isActive ? 'white' : '#AABCF9',
          border: '2px solid transparent',
          background: isActive ?
            'linear-gradient(150deg,rgba(34,39,110,1),rgba(36,41,111,1)) padding-box, linear-gradient(150deg,rgba(64,69,130,1),rgba(36,41,111,1)) border-box' :
            "linear-gradient(150deg,rgba(22,25,62,1),rgba(27,26,74,1)) padding-box, linear-gradient(150deg,rgba(57,59,91,1),rgba(27,26,74,1)) border-box"
        }}
      >
        <div>
          1
        </div>
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 16.5675L15.6656 17.8612C15.8719 17.9925 16.0736 17.988 16.2709 17.8477C16.4681 17.7075 16.5382 17.5151 16.4812 17.2706L15.9187 14.8237L17.8313 13.1643C18.0188 12.9956 18.075 12.7942 18 12.5602C17.925 12.3262 17.7563 12.1995 17.4938 12.18L14.9906 11.9831L14.0062 9.64871C13.9125 9.42371 13.7437 9.31121 13.5 9.31121C13.2563 9.31121 13.0875 9.42371 12.9938 9.64871L12.0094 11.9831L9.50625 12.18C9.24375 12.1987 9.075 12.3255 9 12.5602C8.925 12.795 8.98125 12.9963 9.16875 13.1643L11.0813 14.8237L10.5188 17.2706C10.4625 17.5143 10.533 17.7067 10.7303 17.8477C10.9275 17.9887 11.1289 17.9932 11.3344 17.8612L13.5 16.5675ZM9.73125 22.7831H6.75C6.13125 22.7831 5.60175 22.563 5.1615 22.1227C4.72125 21.6825 4.50075 21.1526 4.5 20.5331V17.5518L2.33438 15.3581C2.12813 15.1331 1.96875 14.8848 1.85625 14.6133C1.74375 14.3418 1.6875 14.0651 1.6875 13.7831C1.6875 13.5011 1.74375 13.2247 1.85625 12.954C1.96875 12.6832 2.12813 12.4346 2.33438 12.2081L4.5 10.0143V7.03308C4.5 6.41433 4.7205 5.88483 5.1615 5.44458C5.6025 5.00433 6.132 4.78383 6.75 4.78308H9.73125L11.925 2.61746C12.15 2.41121 12.3986 2.25183 12.6709 2.13933C12.9431 2.02683 13.2195 1.97058 13.5 1.97058C13.7805 1.97058 14.0573 2.02683 14.3302 2.13933C14.6032 2.25183 14.8515 2.41121 15.075 2.61746L17.2688 4.78308H20.25C20.8687 4.78308 21.3986 5.00358 21.8396 5.44458C22.2806 5.88558 22.5007 6.41508 22.5 7.03308V10.0143L24.6656 12.2081C24.8719 12.4331 25.0312 12.6817 25.1438 12.954C25.2563 13.2262 25.3125 13.5026 25.3125 13.7831C25.3125 14.0636 25.2563 14.3403 25.1438 14.6133C25.0312 14.8863 24.8719 15.1346 24.6656 15.3581L22.5 17.5518V20.5331C22.5 21.1518 22.2799 21.6817 21.8396 22.1227C21.3994 22.5637 20.8695 22.7838 20.25 22.7831H17.2688L15.075 24.9487C14.85 25.155 14.6018 25.3143 14.3302 25.4268C14.0588 25.5393 13.782 25.5956 13.5 25.5956C13.218 25.5956 12.9416 25.5393 12.6709 25.4268C12.4001 25.3143 12.1515 25.155 11.925 24.9487L9.73125 22.7831Z" fill={isActive ? 'white' : '#AABCF9'} />
        </svg>
        <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between">
          <div className="text-xs md:text-base order-last md:order-none opacity-40 md:opacity-100">QMbulsQGnW</div>
          <div className="">51,950$</div>
        </div>
      </motion.li>
    )
  }

  return (
    <main>
      <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
      <div className="flex flex-row my-8 items-center gap-5">
        <div className="flex items-center gap-1.5 opacity-[0.6]">
          <TbAwardFilled className="text-[26px]" />
          <div className="text-white font-medium leading-[normal]">Rating</div>
        </div>
        <SelectTop value={rating} setValue={setRating} />
      </div>
      <section className="grid grid-cols-2 gap-4 md:gap-12">
        <div className="space-y-3">
          <h1 className="flex items-center gap-3 text-[12px] sm:text-lg"><FaPiggyBank className="text-[26px]" />By amount won:</h1>
          <motion.ul initial='hidden' animate='show' variants={variants} className="gap-3 flex flex-col">
            <ItemComponent isActive />
            <ItemComponent isActive />
            <ItemComponent isActive />
            <ItemComponent />
            <ItemComponent />
            <ItemComponent />
            <ItemComponent />
          </motion.ul>
        </div>
        <div className="space-y-3">
          <h1 className="flex items-center gap-3 text-[12px] sm:text-lg"><IoFootballOutline className="text-[26px]" />By quessed matches:</h1>
          <motion.ul initial='hidden' animate='show' variants={variants} className="gap-3 flex flex-col">
            <ItemComponent isActive />
            <ItemComponent isActive />
            <ItemComponent isActive />
            <ItemComponent />
            <ItemComponent />
            <ItemComponent />
            <ItemComponent />
          </motion.ul>
        </div>
      </section>
    </main>
  )
}

export default page
