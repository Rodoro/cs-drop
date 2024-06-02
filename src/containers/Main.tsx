/* eslint-disable react/no-unescaped-entities */
import Case from '@/components/cart/Case'
import Item from '@/components/cart/Item'
import { GradientButton } from '@/components/interface/Buttons'
import { SelectTop } from '@/components/interface/Select'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <main>
      <div className="absolute top-[-7rem] -z-20 left-8 flex-shrink-0 w-[587px] h-[587px] opacity-[0.2] bg-[#c51fff] blur-[227px]" />
      <div className="absolute right-20 top-[30rem] w-[511px] -z-20 h-[511px] opacity-[0.2] bg-[#821fff] blur-[197px]" />
      <div className="absolute -z-20 mt-[400px] w-[1026px] h-[1114px] right-0 opacity-[0.6] bg-contain bg-right bg-no-repeat mix-blend-color-dodge" style={{ backgroundImage: "url(/img/smoke.png)"}}/>

      <div className="flex flex-row items-center justify-center gap-12">
        <div className="relative w-full max-w-4xl h-[20.5625rem] rounded-3xl bg-[#1d2565] flex flex-col py-8 px-14 bg-contain bg-right bg-no-repeat " style={{ backgroundImage: "url(/img/baner1.png), linear-gradient(146deg, #21266D 0%, #4730BA 60%, #8D6CFF 100%)" }}>
          <div className="flex flrx-row justify-between h-full">
            <div className="flex flex-col justify-between">
              <div className="w-[17.9375rem]  text-[2.625rem] font-bold leading-[120%]">A gift from MEL to you!</div>
              <p className="w-[23.6875rem] text-white text-[.8125rem] leading-[140%] max-w-72">
                Don't forget to pick up your daily gifts from Mel, just click the “Pick up a gift” button and it will go to your profile!
              </p>
              <Link href={'#'}>
                <GradientButton>
                  Pick up your gift
                </GradientButton>
              </Link>
            </div>
            <div className="flex flex-row items-end gap-1.5 opacity-[0.7]">
              <Link href={'#'}>
                <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8" filter="url(#filter0_b_22_393)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM15.9986 11.0764C16.2811 11.0764 16.5519 11.1886 16.7517 11.3883C16.9514 11.5881 17.0636 11.8589 17.0636 12.1414C17.0636 12.4238 16.9514 12.6947 16.7517 12.8945L13.8683 15.8695H22.7945C23.077 15.8695 23.3479 15.9817 23.5477 16.1815C23.7474 16.3813 23.8596 16.6522 23.8596 16.9347C23.8596 17.2172 23.7474 17.4881 23.5477 17.6879C23.3479 17.8877 23.077 17.9999 22.7945 17.9999H13.8683L16.7517 20.9749C16.9457 21.1758 17.0531 21.4449 17.0507 21.7242C17.0482 22.0035 16.9362 22.2706 16.7387 22.4681C16.5412 22.6656 16.2741 22.7776 15.9948 22.7801C15.7155 22.7825 15.4464 22.6751 15.2455 22.4811L10.4522 17.6878C10.2525 17.488 10.1404 17.2171 10.1404 16.9347C10.1404 16.6523 10.2525 16.3814 10.4522 16.1816L15.2455 11.3883C15.4453 11.1886 15.7162 11.0764 15.9986 11.0764Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_b_22_393" x={-44} y={-44} width={122} height={122} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation={22} />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_22_393" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_22_393" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </Link>
              <Link href={'#'}>
                <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8" filter="url(#filter0_b_22_396)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34ZM18.0014 11.0764C17.7189 11.0764 17.4481 11.1886 17.2483 11.3883C17.0486 11.5881 16.9364 11.8589 16.9364 12.1414C16.9364 12.4238 17.0486 12.6947 17.2483 12.8945L20.1317 15.8695H11.2055C10.923 15.8695 10.6521 15.9817 10.4523 16.1815C10.2526 16.3813 10.1404 16.6522 10.1404 16.9347C10.1404 17.2172 10.2526 17.4881 10.4523 17.6879C10.6521 17.8877 10.923 17.9999 11.2055 17.9999H20.1317L17.2483 20.9749C17.0543 21.1758 16.9469 21.4449 16.9493 21.7242C16.9518 22.0035 17.0638 22.2706 17.2613 22.4681C17.4588 22.6656 17.7259 22.7776 18.0052 22.7801C18.2845 22.7825 18.5536 22.6751 18.7545 22.4811L23.5478 17.6878C23.7475 17.488 23.8596 17.2171 23.8596 16.9347C23.8596 16.6523 23.7475 16.3814 23.5478 16.1816L18.7545 11.3883C18.5547 11.1886 18.2838 11.0764 18.0014 11.0764Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_b_22_396" x={-44} y={-44} width={122} height={122} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation={22} />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_22_396" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_22_396" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-md h-[20.5625rem] rounded-[28.45201301574707px] border-[2.95px] border-[#ffffff]/[.30] bg-[#22276e]/[.80] bg-contain bg-right-bottom bg-no-repeat" style={{ backgroundImage: "url(/img/baner2.png)" }}>
          <div className="flex flex-col justify-between h-full py-10 pl-9 max-w-60 ">
            <div className="bg-[linear-gradient(100deg, text-white text-[1.7rem] font-bold leading-[120%]">
              Promo code in our Telegram channel
            </div>
            <Link href={''}>
              <GradientButton>
                <svg width={28} height={27} viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99803 13.4961L22.998 13.4961M22.998 13.4961L15.123 5.62109M22.998 13.4961L15.123 21.3711" stroke="white" strokeWidth="2.24999" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-8 items-center gap-5">
        <div className="flex items-center gap-1.5 opacity-[0.6]">
          <div className="gap-0.5 flex items-center">
            <div className="w-2 h-3 opacity-[0.4] rounded-sm bg-white" />
            <div className="w-[1.0625rem] h-[1.0625rem] opacity-[0.6] rounded-[0.1875rem] bg-white" />
            <div className="w-2 h-3 opacity-[0.4] rounded-sm bg-white" />
          </div>
          <div className="text-white font-medium leading-[normal]">Live Drops</div>
        </div>
        <SelectTop />
      </div>
      {/* TODO Добавить обработку показа количества предметов (количество предметов * ширину) + ((n-1)*ширину пробела) */}
      <div className="flex flex-row gap-4 items-center overflow-clip whitespace-nowrap">
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
      <div className="flex items-center gap-1.5 opacity-[0.6] my-8">
        <svg width={21} height={22} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
            <path d="M8.56784 3.92623V5.37523H12.4318V3.92623C12.4318 3.79813 12.381 3.67528 12.2904 3.5847C12.1998 3.49412 12.0769 3.44323 11.9488 3.44323H9.05084C8.92274 3.44323 8.79989 3.49412 8.70931 3.5847C8.61873 3.67528 8.56784 3.79813 8.56784 3.92623ZM6.63584 5.37523V3.92623C6.63584 2.59315 7.71776 1.51123 9.05084 1.51123H11.9488C13.2819 1.51123 14.3638 2.59315 14.3638 3.92623V5.37523H16.2958C17.3206 5.37523 18.3035 5.78233 19.0281 6.50697C19.7527 7.23161 20.1598 8.21443 20.1598 9.23923V10.2052C20.1598 10.9738 19.8545 11.7109 19.311 12.2544C18.7676 12.7979 18.0304 13.1032 17.2618 13.1032H12.4318V12.1372C12.4318 11.881 12.3301 11.6353 12.1489 11.4542C11.9677 11.273 11.722 11.1712 11.4658 11.1712H9.53384C9.27764 11.1712 9.03194 11.273 8.85078 11.4542C8.66962 11.6353 8.56784 11.881 8.56784 12.1372V13.1032H3.73784C2.96925 13.1032 2.23213 12.7979 1.68865 12.2544C1.14517 11.7109 0.839844 10.9738 0.839844 10.2052V9.23923C0.839844 8.21443 1.24694 7.23161 1.97158 6.50697C2.69622 5.78233 3.67905 5.37523 4.70384 5.37523H6.63584ZM0.839844 14.0692V16.9672C0.839844 17.992 1.24694 18.9748 1.97158 19.6995C2.69622 20.4241 3.67905 20.8312 4.70384 20.8312H16.2958C17.3206 20.8312 18.3035 20.4241 19.0281 19.6995C19.7527 18.9748 20.1598 17.992 20.1598 16.9672V14.0692C19.3523 14.6759 18.3496 15.0352 17.2618 15.0352H12.4318V16.0012C12.4318 16.2574 12.3301 16.5031 12.1489 16.6843C11.9677 16.8655 11.722 16.9672 11.4658 16.9672H9.53384C9.27764 16.9672 9.03194 16.8655 8.85078 16.6843C8.66962 16.5031 8.56784 16.2574 8.56784 16.0012V15.0352H3.73784C2.69253 15.0368 1.67517 14.6977 0.839844 14.0692Z" fill="white" />
          </g>
        </svg>
        <div className="w-[3.25rem] h-[1.0625rem] text-white font-medium leading-[normal]">Cases</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-start gap-8">
          <div className="relative">
            <svg className='absolute inset-y-0 left-0 start-0 flex items-center ps-3 pt-3 pointer-events-none' width={40} height={40} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M18.375 18.5464L14.5687 14.7401M16.625 9.79639C16.625 13.6624 13.491 16.7964 9.625 16.7964C5.75901 16.7964 2.625 13.6624 2.625 9.79639C2.625 5.93039 5.75901 2.79639 9.625 2.79639C13.491 2.79639 16.625 5.93039 16.625 9.79639Z" stroke="white" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
            <input className="ps-11 flex items-center gap-3 py-4 px-5 w-[480px] h-[3.125rem] rounded-[0.9375rem] border-[1.5px] border-[#ffffff]/[.30] bg-[#242f54]/[.60] focus-visible:outline-none" placeholder="Search for cases" />
          </div>
          <div className="flex items-start gap-2 h-[3.125rem]">
            <div className="cursor-pointer flex justify-center items-center gap-2.5 self-stretch py-2 px-3 w-[4.75rem] rounded-[0.625rem] border border-[#ffffff]/[.30] bg-[#242f54]/[.60] text-white text-[.9375rem] font-medium leading-[normal]">
              $ 0-5
            </div>
            <div className="cursor-pointer flex justify-center items-center gap-2.5 self-stretch py-2 px-3 rounded-[0.625rem] opacity-[0.6] text-white text-[.9375rem] font-medium leading-[normal]">
              $ 5-15
            </div>
            <div className="cursor-pointer flex justify-center items-center gap-2.5 self-stretch py-2 px-3 rounded-[0.625rem] opacity-[0.6] text-white text-[.9375rem] font-medium leading-[normal]">
              $ 15-50
            </div>
            <div className="cursor-pointer flex justify-center items-center gap-2.5 self-stretch py-2 px-3 rounded-[0.625rem] opacity-[0.6] text-white text-[.9375rem] font-medium leading-[normal]">
              $ 50-100
            </div>
            <div className="cursor-pointer flex justify-center items-center gap-2.5 self-stretch py-2 px-3 rounded-[0.625rem] opacity-[0.6] text-white text-[.9375rem] font-medium leading-[normal]">
              $ 100+
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2.5 rounded-[0.9375rem] border border-[#ffffff]/[.30] bg-[#242f54]/[.60]">
          <Link href={''}>
            <svg width={50} height={51} viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M25.6702 18.7696C25.3308 18.6052 24.9272 18.6497 24.6316 18.8838L20.1134 22.4591H16.984C16.4407 22.4591 16 22.8994 16 23.4429V27.8998C16 28.4431 16.4407 28.8833 16.984 28.8833H20.1132L24.6316 32.4588C24.8089 32.5989 25.0244 32.6714 25.2421 32.6714C25.3881 32.6714 25.534 32.6384 25.6702 32.573C26.0105 32.4086 26.2261 32.0642 26.2261 31.6874V19.6553C26.2256 19.278 26.0098 18.9336 25.6702 18.7696Z" fill="white" />
                <path d="M29.8405 22.1882C29.4562 21.8038 28.8331 21.8038 28.4495 22.1882C28.0651 22.5725 28.0651 23.1955 28.4495 23.5792C29.6027 24.7326 29.6027 26.6096 28.4495 27.763C28.0651 28.1471 28.0651 28.7702 28.4495 29.1538C28.6412 29.3464 28.8934 29.4425 29.145 29.4425C29.3972 29.4425 29.6483 29.3464 29.8405 29.1538C30.7713 28.223 31.2836 26.9868 31.2836 25.671C31.2836 24.3554 30.7706 23.1183 29.8405 22.1882Z" fill="white" />
                <path d="M31 19.6371C30.6161 20.0214 30.6161 20.6445 31 21.0286C33.56 23.5884 33.56 27.7537 31 30.3135C30.6161 30.6976 30.6161 31.3209 31 31.7046C31.1921 31.8967 31.4439 31.9928 31.6955 31.9928C31.9477 31.9928 32.1993 31.8967 32.3914 31.7046C35.7183 28.3777 35.7183 22.9633 32.3914 19.6364C32.0073 19.2532 31.3843 19.2532 31 19.6371Z" fill="white" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className='mt-12 flex flex-row justify-start gap-4'>
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </main>
  )
}

export default Main
