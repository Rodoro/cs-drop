/* eslint-disable react/no-unescaped-entities */
import CasesList from '@/components/CasesList'
import LiveDrops from '@/components/LiveDrops'
import { GradientButton } from '@/components/interface/Buttons'
import Link from 'next/link'

const Main = () => {
  return (
    <main>
      <div className="md:hidden absolute top-[30rem] -z-20 right-0 w-[336px] h-[336px] opacity-[0.3] bg-[#821FFF] blur-[227px]" />
      <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
      <div className="invisible sm:visible absolute -z-20 mt-[400px] w-[1026px] h-[1114px] right-0 opacity-[0.6] bg-contain bg-right bg-no-repeat mix-blend-color-dodge" style={{ backgroundImage: "url(/img/smoke.png)" }} />

      <div className="hidden lg:flex flex-row items-center justify-center gap-12">
        <div className="relative w-full max-w-4xl h-[20.5625rem] rounded-3xl bg-[#1d2565] flex flex-col py-8 px-6 md:px-14 bg-contain bg-right bg-no-repeat " style={{ backgroundImage: "url(/img/baner1.png), linear-gradient(146deg, #21266D 0%, #4730BA 60%, #8D6CFF 100%)" }}>
          <div className="flex flrx-row justify-between h-full">
            <div className="flex flex-col justify-between">
              <div className="w-[17.9375rem] text-[1.25rem] lg:text-[2.625rem] font-bold leading-[120%]">A gift from MEL to you!</div>
              <p className="hidden lg:flex w-[23.6875rem] text-white text-[.8125rem] leading-[140%] max-w-72">
                Don't forget to pick up your daily gifts from Mel, just click the “Pick up a gift” button and it will go to your profile!
              </p>
              <Link href={'#'} className='h-12'>
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
            <Link href={''} className='h-12'>
              <GradientButton>
                <svg width={28} height={27} viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99803 13.4961L22.998 13.4961M22.998 13.4961L15.123 5.62109M22.998 13.4961L15.123 21.3711" stroke="white" strokeWidth="2.24999" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex lg:hidden flex-col items-center justify-center gap-3'>
        <div className="relative w-full  max-w-xl  h-[8.9375rem] rounded-3xl bg-[#1d2565] flex flex-col py-4 pt-4 px-6 bg-contain bg-right bg-no-repeat " style={{ backgroundImage: "url(/img/baner1.png), linear-gradient(146deg, #21266D 0%, #4730BA 60%, #8D6CFF 100%)" }}>
          <div className="flex flrx-row justify-between h-full">
            <div className="flex flex-col justify-between max-w-44 gap-4">
              <div className=" text-[1.25rem] font-bold leading-[120%] max-w-36">A gift from MEL to you!</div>
              <Link href={'#'} className='w-44 h-10'>
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
        <div className="relative w-full max-w-xl h-[8.9375rem] rounded-[28.45201301574707px] bg-[#22276e]/[.80] bg-contain bg-right-bottom bg-no-repeat" style={{ backgroundImage: "url(/img/baner2mobile.png)" }}>
          <div className="flex flex-col justify-between h-full py-5 pl-5 max-w-60 ">
            <div className="bg-[linear-gradient(100deg, text-white text-[1.0625rem] font-bold leading-[120%]">
              Promo code in our Telegram channel
            </div>
            <Link href={''} className='w-32 h-8'>
              <GradientButton>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.55602 7.97073L12.7447 7.97073M12.7447 7.97073L8.28715 3.51318M12.7447 7.97073L8.28715 12.4283" stroke="white" strokeWidth="1.27358" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
      <LiveDrops />
      <CasesList />
    </main>
  )
}

export default Main
