import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <Image
            src="/img/interface/nav/logo.png"
            alt="Логотип"
            width={40}
            height={40}
        />
    )
}

export default Logo
