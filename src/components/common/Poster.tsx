import Link from "next/link"
import style from "./Poster.module.css"
import Image from 'next/image'

const Poster = ({ className }: { className?: string }) => {
    return (
        <div
            style={{
                border: '3px solid transparent',
                background: 'linear-gradient(150deg,#22276E,#22276E) padding-box, linear-gradient(160deg,#393D74,#22276E) border-box'
            }}
            className={className + " relative w-full h-full max-w-[324px] max-h-[505px] bg-[#22276E] rounded-[28px] mx-auto"}
        >
            {/* TODO: Перелистование между кейсами */}
            <Image src='/img/interface/poster/smoke1.png' alt='smoke' width={379} height={200} className="absolute mix-blend-color-dodge bottom-0" />
            <Image src={"/img/interface/poster/items1.png"} alt={"tg-logo"} fill className="object-contain object-right-bottom rounded-br-[28px] mt-[3px] ml-[3px]" />

            <div className="m-11 text-[28px] font-bold">
                Promo code<br /> in our <span className="textRGBGradient">Telegram</span> channel
            </div>
            {/* TODO: Добавить ссылку */}
            <Link href={"/"} className={"absolute bottom-10 left-10 transition-all hover:scale-105 active:scale-95 " + style.button}>
                <svg width={28} height={27} viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99803 13.4961L22.998 13.4961M22.998 13.4961L15.123 5.62109M22.998 13.4961L15.123 21.3711" stroke="white" strokeWidth="2.24999" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

const PosterMobile = ({ className }: { className?: string }) => {
    return (
        <div
            className={className + " w-full h-[143px] rounded-2xl relative"}
            style={{
                background: 'linear-gradient(150deg,#1D2565,#5030CE,#7454F6)'
            }}
        >
            <Image src='/img/interface/poster/smoke2.png' alt='smoke' fill className="object-contain object-right-bottom absolute mix-blend-color-dodge bottom-0 right-0" />
            <Image src={"/img/interface/poster/items2.png"} alt={"tg-logo"} fill className="object-contain object-right-bottom rounded-br-[10px]" />
            <div className="ml-[22px] mt-[11px] text-[18px] font-bold">
                Promo code<br /> in our <span className="textRGBGradient">Telegram</span><br /> channel
            </div>
            <Link href={"/"} className={"absolute bottom-3 left-[22px] transition-all hover:scale-105 active:scale-95 " + style.buttonMob}>
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55602 5.35159L11.7447 5.35159M11.7447 5.35159L7.28715 0.894043M11.7447 5.35159L7.28715 9.80914" stroke="white" strokeWidth="1.27358" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

export { Poster, PosterMobile } 
