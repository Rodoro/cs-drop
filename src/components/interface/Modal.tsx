import { useTranslation } from '@/hook/useLanguageStore';
import React from 'react'

export type ModalProps = {
    children?: React.ReactNode,
    visible: boolean;
    setVisible(visible: boolean): void;
}

const ModalAuth: React.FC<ModalProps> = ({ visible, setVisible }) => {
    const { getTranslation } = useTranslation();
    return (
        <div className={visible ? "visible" : "hidden"}>
            <div className='z-40 top-0 left-0 fixed flex flex-col items-center justify-center w-screen min-h-screen bg-[#0F0B20]/[.40] backdrop-blur-xl' onClick={() => { setVisible(false); console.log(visible) }}>
                <div className='p-[3px] rounded-3xl' style={{background: "linear-gradient(150deg,rgba(71, 72, 135, 1),rgba(34, 39, 110, 1))"}}>
                    <div className='flex flex-col gap-y-6 bg-[#22276E] px-10 py-12 rounded-3xl' onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="text-white text-[1.9375rem] font-bold leading-[120%]">{getTranslation('auth.login.title')}</div>
                            <div className="opacity-50 text-white leading-[140%]">{getTranslation('auth.login.text')}</div>
                        </div>
                        {/* TODO: Добавить авторизацию */}
                        <div className="flex flex-col items-center max-w-80 md:min-w-80 gap-2.5 p-4 rounded-[25px] bg-[#181a21]">
                            <div className="flex items-center gap-2">
                                <svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5002 4.39307C23.853 4.39307 26.1828 4.85649 28.3566 5.75689C30.5303 6.65729 32.5054 7.97702 34.1692 9.64074C35.8329 11.3045 37.1526 13.2796 38.053 15.4533C38.9534 17.6271 39.4168 19.9569 39.4168 22.3097C39.4168 27.0615 37.5292 31.6187 34.1692 34.9787C30.8091 38.3388 26.252 40.2264 21.5002 40.2264C13.2585 40.2264 6.36058 34.7081 4.2285 27.201L11.0906 30.0318C11.3257 31.1795 11.9497 32.2109 12.8571 32.9519C13.7646 33.6929 14.8999 34.098 16.0714 34.0989C18.8664 34.0989 21.1418 31.8235 21.1418 29.0285V28.7956L27.2335 24.4418H27.3768C31.1035 24.4418 34.1314 21.4139 34.1314 17.6872C34.1314 13.9606 31.1035 10.9327 27.3768 10.9327C23.6502 10.9327 20.6043 13.9606 20.6043 17.6872V17.7768L16.3581 23.976L16.0714 23.9581C15.0143 23.9581 14.0289 24.2806 13.2227 24.836L3.5835 20.8764C4.35391 11.6493 12.0581 4.39307 21.5002 4.39307ZM14.8352 31.5727C16.2685 32.1639 17.9168 31.501 18.5081 30.0677C19.0993 28.6343 18.4185 27.0039 17.021 26.4127L14.7277 25.4631C15.6056 25.1406 16.591 25.1227 17.5227 25.5168C18.4722 25.8931 19.2068 26.6277 19.5831 27.5772C19.9772 28.5089 19.9772 29.5481 19.5831 30.4797C18.8127 32.4147 16.5372 33.3464 14.6022 32.5402C13.7064 32.1639 13.0256 31.4831 12.6493 30.6768L14.8352 31.5727ZM31.8918 17.6872C31.8918 20.1777 29.8673 22.2022 27.3768 22.2022C26.1825 22.1975 25.0387 21.7197 24.1958 20.8735C23.353 20.0273 22.8797 18.8816 22.8798 17.6872C22.8774 17.096 22.9921 16.5102 23.2172 15.9635C23.4424 15.4168 23.7736 14.9201 24.1916 14.502C24.6097 14.084 25.1064 13.7528 25.6531 13.5276C26.1998 13.3025 26.7856 13.1878 27.3768 13.1902C28.5712 13.1901 29.7169 13.6634 30.5631 14.5062C31.4093 15.3491 31.8871 16.4929 31.8918 17.6872ZM24.0085 17.6872C24.0085 19.5506 25.5135 21.0735 27.3948 21.0735C29.2581 21.0735 30.7631 19.5506 30.7631 17.6872C30.7631 15.8239 29.2581 14.301 27.3948 14.301C25.5135 14.301 24.0085 15.8239 24.0085 17.6872Z" fill="white" />
                                </svg>
                                <div className="text-white text-lg font-medium leading-[140%]">{getTranslation('auth.login.steam')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { ModalAuth }
