import { IItemMathCard, IItemMathPrev } from "@/types/ui.types"
import { motion } from "framer-motion"
import Image from 'next/image'
import { FaRegCalendar } from "react-icons/fa"



const ItemCardMatch = ({ item, scale, onMouseEnter, onMouseLeave, ...props }: { item: IItemMathCard, scale?: boolean | null, onMouseEnter: () => void, onMouseLeave: () => void }) => {
    const itemVar = {
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                opacity: {
                    duration: 0.3
                }
            }
        }
    }

    return (
        <motion.li
            // variants={itemVar}

            className="cursor-pointer flex relative flex-col justify-between items-center max-w-[322px] h-[242px] w-full rounded-[20px]"
            style={{
                zIndex: scale ? 0 : 1,
                opacity: scale ? 0.15 : 1,
                transform: scale === null ? 'scale(1)' : scale ? 'scale(1)' : 'scale(1.2)',
                transition: 'transform 0.3s, opacity 0.3s',
                border: '2px solid transparent',
                background: 'linear-gradient(150deg,#1C2342,#1C2342) padding-box, linear-gradient(160deg,rgba(57,59,91,1),rgba(27,26,74,1)) border-box'
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
        >
            <Image src='/img/smoke_matche.png' alt='' width={379} height={200} className="absolute mix-blend-color-dodge bottom-0" />
            {item.isLive &&
                <div style={{ boxShadow: "0 0 18px 0 rgba(254, 27, 28, 0.3)" }} className="text-[#FF2929] absolute text-[10px] top-4 right-4 flex items-center gap-1 px-2 py-1 bg-[#CD1E1E]/[.30] rounded-lg border-[#CD1E1E] border">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.62041 3.24455C4.67569 3.29976 4.71954 3.36533 4.74946 3.43751C4.77938 3.50968 4.79478 3.58705 4.79478 3.66518C4.79478 3.74331 4.77938 3.82068 4.74946 3.89285C4.71954 3.96503 4.67569 4.0306 4.62041 4.08581C3.72827 4.9781 3.22709 6.18822 3.22709 7.45C3.22709 8.71178 3.72827 9.92189 4.62041 10.8142C4.6772 10.869 4.72249 10.9346 4.75365 11.0072C4.78481 11.0797 4.80121 11.1577 4.80189 11.2367C4.80258 11.3156 4.78754 11.3939 4.75764 11.467C4.72775 11.54 4.6836 11.6064 4.62778 11.6622C4.57196 11.7181 4.50558 11.7622 4.43251 11.7921C4.35944 11.822 4.28116 11.837 4.20221 11.8363C4.12327 11.8357 4.04526 11.8193 3.97272 11.7881C3.90019 11.7569 3.83458 11.7116 3.77974 11.6549C1.45688 9.3326 1.45688 5.5668 3.77974 3.24455C3.89123 3.13309 4.04242 3.07047 4.20007 3.07047C4.35772 3.07047 4.50892 3.13309 4.62041 3.24455ZM12.19 3.24455C14.5123 5.5674 14.5123 9.3326 12.19 11.6549C12.0786 11.7664 11.9273 11.8291 11.7696 11.8292C11.6119 11.8292 11.4606 11.7666 11.3491 11.6552C11.2375 11.5437 11.1748 11.3924 11.1748 11.2347C11.1747 11.077 11.2373 10.9257 11.3488 10.8142C12.2409 9.92189 12.7421 8.71178 12.7421 7.45C12.7421 6.18822 12.2409 4.9781 11.3488 4.08581C11.2372 3.97426 11.1745 3.82295 11.1745 3.66518C11.1745 3.50741 11.2372 3.3561 11.3488 3.24455C11.4603 3.13299 11.6116 3.07031 11.7694 3.07031C11.9272 3.07031 12.0785 3.13299 12.19 3.24455ZM6.3844 4.95324C6.49586 5.06473 6.55847 5.21593 6.55847 5.37358C6.55847 5.53123 6.49586 5.68243 6.3844 5.79392C6.16796 6.01033 5.99627 6.26727 5.87913 6.55004C5.762 6.83282 5.7017 7.1359 5.7017 7.44197C5.7017 7.74805 5.762 8.05113 5.87913 8.3339C5.99627 8.61668 6.16796 8.87361 6.3844 9.09003C6.4396 9.14527 6.48338 9.21084 6.51324 9.28299C6.5431 9.35515 6.55845 9.43248 6.55842 9.51057C6.55839 9.58867 6.54299 9.66599 6.51308 9.73812C6.48317 9.81026 6.43934 9.8758 6.3841 9.931C6.32886 9.9862 6.26329 10.03 6.19114 10.0598C6.11898 10.0897 6.04165 10.105 5.96356 10.105C5.88546 10.105 5.80814 10.0896 5.73601 10.0597C5.66387 10.0298 5.59833 9.98594 5.54313 9.9307C4.88309 9.27064 4.51229 8.37542 4.51229 7.44197C4.51229 6.50852 4.88309 5.6133 5.54313 4.95324C5.59835 4.89796 5.66392 4.85411 5.73609 4.82419C5.80827 4.79427 5.88563 4.77887 5.96377 4.77887C6.0419 4.77887 6.11926 4.79427 6.19144 4.82419C6.26361 4.85411 6.32918 4.89796 6.3844 4.95324ZM10.5212 4.95324C11.1812 5.6133 11.552 6.50852 11.552 7.44197C11.552 8.37542 11.1812 9.27064 10.5212 9.9307C10.4091 10.039 10.2589 10.0989 10.103 10.0976C9.9471 10.0962 9.79798 10.0337 9.68775 9.92346C9.57752 9.81323 9.51499 9.66411 9.51364 9.50822C9.51228 9.35234 9.57221 9.20216 9.68051 9.09003C9.89695 8.87361 10.0686 8.61668 10.1858 8.3339C10.3029 8.05113 10.3632 7.74805 10.3632 7.44197C10.3632 7.1359 10.3029 6.83282 10.1858 6.55004C10.0686 6.26727 9.89695 6.01033 9.68051 5.79392C9.57221 5.68179 9.51228 5.53161 9.51364 5.37572C9.51499 5.21983 9.57752 5.07072 9.68775 4.96049C9.79798 4.85025 9.9471 4.78773 10.103 4.78637C10.2589 4.78502 10.4091 4.84494 10.5212 4.95324ZM8.03245 6.60011C8.26898 6.60011 8.49581 6.69407 8.66306 6.86131C8.8303 7.02856 8.92426 7.25539 8.92426 7.49191C8.92426 7.72843 8.8303 7.95527 8.66306 8.12251C8.49581 8.28976 8.26898 8.38372 8.03245 8.38372C7.79593 8.38372 7.5691 8.28976 7.40185 8.12251C7.23461 7.95527 7.14065 7.72843 7.14065 7.49191C7.14065 7.25539 7.23461 7.02856 7.40185 6.86131C7.5691 6.69407 7.79593 6.60011 8.03245 6.60011Z" fill="#FF2929" />
                    </svg>
                    Live
                </div>
            }
            <div className="mt-6 flex items-center justify-center text-xs gap-2">
                <FaRegCalendar className="text-[16px] mb-0.5" />
                {item.time}
            </div>
            <div className="flex z-[2] text-xs items-center w-full">
                <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                    <div
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                        }}
                        className="p-3 rounded-full"
                    >
                        <Image
                            className="object-contain max-w-[40px] max-h-[40px]"
                            src={item.teams[0].iconUrl}
                            alt={item.teams[0].name}
                            width={'40'}
                            height={'40'}
                        />
                    </div>
                    {item.teams[0].name}
                </div>
                <div className="text-[27px] font-bold">VS</div>
                <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                    <div
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                        }}
                        className="p-3 rounded-full"
                    >
                        <Image
                            className="object-contain max-w-[40px] max-h-[40px]"
                            src={item.teams[1].iconUrl}
                            alt={item.teams[1].name}
                            width={'40'}
                            height={'40'}
                        />
                    </div>
                    {item.teams[1].name}
                </div>
            </div>
            <div
                style={{
                    filter: 'drop-shadow(0 -20px 70px #472DE5)',
                    border: '2px solid transparent',
                    background: 'linear-gradient(150deg,#1F1954,#1F1954) padding-box, linear-gradient(90deg,#1FA1FF,#6A12FA,#B8A6FF) border-box'
                }}
                className="max-h-[79px] w-[322px] flex-1 rounded-[20px] flex items-center justify-center gap-9 z-[1]"
            >
                <div className="flex flex-col items-center justify-center text-[10px]">
                    <span className="opacity-50">Currently in pool</span>
                    <span className="text-xs mt-1.5 opacity-100"><span className="text-[23px] font-extrabold textRGBGradient">{item.current}</span> $</span>
                </div>
                {item.yourBid != '0' &&
                    <div className="flex flex-col items-center justify-center">
                        <span className="opacity-50 text-[10px]">Your bid</span>
                        <div
                            style={{
                                border: '2px solid transparent',
                                background: 'linear-gradient(150deg,#283053,#283053) padding-box, linear-gradient(90deg,#497D52,#2D3A53) border-box'
                            }}
                            className="text-[#7FFF52] flex items-center justify-center gap-2 px-3 py-0.5 rounded-lg"
                        >
                            <div className="h-2 w-2 bg-[#7FFF52] rounded-full" />
                            <span className="font-bold">{item.yourBid}<span className="text-[10px]">$</span></span>
                        </div>
                    </div>
                }
            </div>
        </motion.li>
    )
}

const ItemCardMatchPrew = ({ item, scale, onMouseEnter, onMouseLeave, ...props }: { item: IItemMathPrev, scale?: boolean | null, onMouseEnter: () => void, onMouseLeave: () => void }) => {
    return (
        <motion.li
            className="cursor-pointer flex relative flex-col justify-between items-center max-w-[322px] h-[242px] w-full rounded-[20px]"
            style={{
                zIndex: scale ? 0 : 1,
                opacity: scale ? 0.15 : 1,
                transform: scale === null ? 'scale(1)' : scale ? 'scale(1)' : 'scale(1.2)',
                transition: 'transform 0.3s, opacity 0.3s',
                border: '2px solid transparent',
                background: 'linear-gradient(150deg,#1C2342,#1C2342) padding-box, linear-gradient(160deg,rgba(57,59,91,1),rgba(27,26,74,1)) border-box'
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...props}
        >
            <Image src='/img/smoke_matche.png' alt='' width={379} height={200} className="absolute mix-blend-color-dodge bottom-0" />
            <div className="mt-4 flex items-center justify-center text-xs gap-2">
                <FaRegCalendar className="text-[16px] mb-0.5" />
                {item.time}
            </div>
            <div className="flex z-[2] text-xs items-center w-full">
                <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                    <div
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                        }}
                        className="p-3 rounded-full"
                    >
                        <Image
                            className="object-contain max-w-[40px] max-h-[40px]"
                            src={item.teams[0].iconUrl}
                            alt={item.teams[0].name}
                            width={'40'}
                            height={'40'}
                        />
                    </div>
                    {item.teams[0].name}
                    <div className="text-[23px] font-bold mb-2">
                        {item.teams[0].count}
                    </div>
                </div>
                <div className="text-[27px] font-bold">VS</div>
                <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                    <div
                        style={{
                            border: '2px solid transparent',
                            background: 'linear-gradient(150deg,#263056,#263056) padding-box, linear-gradient(130deg,#52576C,#2B2F60) border-box'
                        }}
                        className="p-3 rounded-full"
                    >
                        <Image
                            className="object-contain max-w-[40px] max-h-[40px]"
                            src={item.teams[1].iconUrl}
                            alt={item.teams[1].name}
                            width={'40'}
                            height={'40'}
                        />
                    </div>
                    {item.teams[1].name}
                    <div className="text-[23px] font-bold mb-2">
                        {item.teams[1].count}
                    </div>
                </div>
            </div>
            <div
                style={{
                    filter: 'drop-shadow(0 -20px 70px #472DE5)',
                    border: '2px solid transparent',
                    background: 'linear-gradient(150deg,#1F1954,#1F1954) padding-box, linear-gradient(90deg,#1FA1FF,#6A12FA,#B8A6FF) border-box'
                }}
                className="max-h-[79px] w-[322px] flex-1 rounded-[20px] flex items-center justify-center gap-9 z-[1]"
            >
                <div className="flex flex-col items-center justify-center text-[10px]">
                    <span className="opacity-50">Currently in pool</span>
                    <span className="text-xs mt-1.5 opacity-100"><span className="text-[23px] font-extrabold textRGBGradient">{item.current}</span> $</span>
                </div>
                {item.yourBid != '0' &&
                    <div className="flex flex-col items-center justify-center">
                        <span className="opacity-50 text-[10px]">Your bid</span>
                        <div
                            style={{
                                border: '2px solid transparent',
                                background: 'linear-gradient(150deg,#283053,#283053) padding-box, linear-gradient(90deg,#497D52,#2D3A53) border-box'
                            }}
                            className="text-[#7FFF52] flex items-center justify-center gap-2 px-3 py-0.5 rounded-lg"
                        >
                            <div className="h-2 w-2 bg-[#7FFF52] rounded-full" />
                            <span className="font-bold">{item.yourBid}<span className="text-[10px]">$</span></span>
                        </div>
                    </div>
                }
            </div>
        </motion.li>
    )
}

export { ItemCardMatch, ItemCardMatchPrew }
