import Link from 'next/link'
import React from 'react'

const CartButton = ({ children, isActive = false, href }: { children: any, isActive?: boolean, href: string }) => {
    return (
        <Link
            style={{
                color: isActive ? 'white' : '#AABCF9',
                boxShadow: isActive ? '0 0 34px 0 rgba(139,50,252,0.45)' : '',
                border: "2px solid transparent",
                background: isActive ?
                    'linear-gradient(150deg,rgba(126,80,255,1),rgba(126,80,255,1)) padding-box, linear-gradient(150deg,rgba(145,105,255,1),rgba(126,80,255,1)) border-box' :
                    "linear-gradient(150deg,rgba(29,33,90,1),rgba(28,33,89,1)) padding-box, linear-gradient(150deg,rgba(51,54,103,1),rgba(28,33,89,1)) border-box"
            }}
            className="hover:scale-105 active:scale-95 transition-transform font-semibold gap-2 h-[61px] flex items-center justify-center px-6 rounded-2xl"
            href={href}
        >
            {children}
        </Link>
    )
}

export { CartButton }
