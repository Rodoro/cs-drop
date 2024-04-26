"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col">
      <nav className="fixed flex flex-col justify-center top-0 left-0 bottom-0 bg-[#0A0D1D] space-y-6 pl-3 pr-3">
        <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? '' : 'opacity-40'}`}>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/img/interface/nav/cases.png"
              alt="Cases"
              width={pathname === '/' ? '100' : '60'}
              height={pathname === '/' ? '100' : '60'}
            />
            {pathname === '/' ? (
              <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
              </svg>
            ) : (
              <></>
            )}
            <div className="absolute w-16 h-16 -z-10 bg-[#7643ff] blur-xl" />
          </div>
          Cases
        </Link>
        <Link href="/match" className={`flex flex-col items-center ${pathname === '/match' ? '' : 'opacity-40'}`}>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/img/interface/nav/match.png"
              alt="Match"
              width={pathname === '/match' ? '100' : '60'}
              height={pathname === '/match' ? '100' : '60'}
            />
            {pathname === '/match' ? (
              <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
              </svg>
            ) : (
              <></>
            )}
            <div className="absolute w-9 h-9 -z-10 bg-[#7643ff] blur-xl" />
          </div>
          Match
        </Link>
        <Link href="/casino" className={`flex flex-col items-center ${pathname === '/casino' ? '' : 'opacity-40'}`}>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/img/interface/nav/casino.png"
              alt="Casino"
              width={pathname === '/casino' ? '100' : '70'}
              height={pathname === '/casino' ? '100' : '70'}
            />
            {pathname === '/casino' ? (
              <svg className="absolute -z-20 left-6" width={110} height={164} viewBox="0 0 110 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H58.5H87.75C88.5259 3.23672 89.2089 6.13758 89.8498 8.74989C94.9914 29.7098 110 49.9187 110 71.5V82.347C110 109.821 91.6204 136.8 87.75 164H58.5H0V0Z" fill="#0A0D1D" />
              </svg>
            ) : (
              <></>
            )}
            <div className="absolute w-9 h-9 -z-10 bg-[#7643ff] blur-xl" />
          </div>
          Casino
        </Link>
      </nav>
      <nav className="flex flex-row justify-between items-center px-12 pt-8">
        <Link href='/'>
          <Image
            src="/img/interface/nav/logo+text.png"
            alt="Логотип"
            width={180}
            height={40}
          />
        </Link>
        <div className="flex flex-row items-center justify-between space-x-2">
          <div className="flex flex-row items-center justify-between space-x-2">
            <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.78755 9.16663H6.38075C5.69308 9.16663 5.55554 9.4903 5.55554 9.84711C5.55554 10.4845 6.37151 13.6456 9.3548 17.8263C11.3437 20.6814 14.1458 22.2291 16.6957 22.2291C18.2255 22.2291 18.4148 21.8854 18.4148 21.2933V19.1354C18.4148 18.4479 18.5597 18.3107 19.0442 18.3107C19.4012 18.3107 20.0131 18.4891 21.4411 19.8657C23.073 21.4972 23.342 22.2291 24.2599 22.2291H26.6667C27.3544 22.2291 27.6982 21.8854 27.4999 21.207C27.2828 20.5309 26.5037 19.5499 25.4698 18.3872C24.9088 17.7244 24.0674 17.0106 23.8124 16.6536C23.4554 16.1948 23.5574 15.9908 23.8124 15.583C23.8124 15.583 26.7447 11.4532 27.0507 10.0512C27.2037 9.54124 27.0507 9.16663 26.3229 9.16663H23.9161C23.3041 9.16663 23.022 9.4903 22.8689 9.84711C22.8689 9.84711 21.645 12.8298 19.9112 14.7672C19.3502 15.328 19.0952 15.5065 18.7892 15.5065C18.6362 15.5065 18.4147 15.328 18.4147 14.8182V10.0512C18.4147 9.43929 18.2372 9.16663 17.7271 9.16663H13.945C13.5626 9.16663 13.3325 9.45056 13.3325 9.71972C13.3325 10.2997 14.1995 10.4335 14.2889 12.065V15.6085C14.2889 16.3854 14.1485 16.5262 13.8425 16.5262C13.0266 16.5262 11.0419 13.5303 9.86472 10.1021C9.63407 9.43578 9.40265 9.16663 8.78755 9.16663Z" fill="#B0ACB5" />
            </svg>
            <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.81014 15.6485C13.6781 13.5139 16.932 12.1342 18.572 11.4574C23.2056 9.53107 24.1688 9.19266 24.7936 9.16663C24.9237 9.16663 25.2361 9.19266 25.4443 9.34885C25.6005 9.47901 25.6526 9.66123 25.6786 9.79139C25.7047 9.92154 25.7307 10.2079 25.7047 10.4422C25.4443 13.0714 24.3771 19.5012 23.8044 22.4428C23.5701 23.6923 23.1015 24.1088 22.659 24.1608C21.6958 24.2389 20.9409 23.5101 20.0037 22.9113C18.546 21.9482 17.713 21.3494 16.2812 20.4123C14.6412 19.319 15.7085 18.7202 16.6457 17.7571C16.8799 17.4967 21.1752 13.618 21.2533 13.2536C21.2533 13.2015 21.2793 13.0453 21.1752 12.9672C21.071 12.8892 20.9409 12.9152 20.8368 12.9412C20.6806 12.9672 18.3377 14.5291 13.7822 17.6009C13.1054 18.0694 12.5066 18.2777 11.96 18.2777C11.3612 18.2777 10.2158 17.9393 9.3568 17.6529C8.31554 17.3145 7.48252 17.1323 7.56062 16.5596C7.61268 16.2733 8.02919 15.9609 8.81014 15.6485Z" fill="#B0ACB5" />
            </svg>
            <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.1585 11.3528C24.94 10.4922 24.2963 9.81458 23.4787 9.58459C21.997 9.16663 16.0555 9.16663 16.0555 9.16663C16.0555 9.16663 10.1141 9.16663 8.63236 9.58459C7.8149 9.81458 7.17105 10.4922 6.95257 11.3528C6.55554 12.9124 6.55554 16.1666 6.55554 16.1666C6.55554 16.1666 6.55554 19.4208 6.95257 20.9806C7.17105 21.841 7.8149 22.5187 8.63236 22.7488C10.1141 23.1666 16.0555 23.1666 16.0555 23.1666C16.0555 23.1666 21.997 23.1666 23.4787 22.7488C24.2963 22.5187 24.94 21.841 25.1585 20.9806C25.5555 19.4208 25.5555 16.1666 25.5555 16.1666C25.5555 16.1666 25.5555 12.9124 25.1585 11.3528Z" fill="#B0ACB5" />
              <path d="M14.1122 19.1207L19.0781 16.1663L14.1122 13.2117V19.1207Z" fill="#120F14" />
            </svg>
          </div>
          <div>
            <div className='flex flex-row items-center space-x-2 py-4 px-6 bg-[#242f54] rounded-2xl border'>
              <Image
                src="/img/interface/nav/flag/gb.png"
                alt="flag"
                width={20}
                height={50}
              />
              <span>English</span>
              <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00021 1.29797L5.44466 5.03535L9.8891 1.29797" stroke="white" strokeWidth="0.808081" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
