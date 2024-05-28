import React from 'react'

const OnlineIcon = () => {
    return (
        <div className="flex items-center gap-2">
            <svg width={55} height={56} viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9159 42.9178C11.0007 41.0026 9.48141 38.7289 8.44489 36.2266C7.40837 33.7242 6.87488 31.0422 6.87488 28.3337C6.87488 25.6251 7.40837 22.9431 8.44489 20.4408C9.48141 17.9384 11.0007 15.6647 12.9159 13.7495M42.0842 13.7495C43.9995 15.6647 45.5187 17.9384 46.5552 20.4408C47.5918 22.9431 48.1252 25.6251 48.1252 28.3337C48.1252 31.0422 47.5918 33.7242 46.5552 36.2266C45.5187 38.7289 43.9995 41.0026 42.0842 42.9178M19.3967 36.437C18.3324 35.373 17.4881 34.1097 16.9121 32.7193C16.3361 31.3289 16.0396 29.8387 16.0396 28.3337C16.0396 26.8287 16.3361 25.3384 16.9121 23.9481C17.4881 22.5577 18.3324 21.2944 19.3967 20.2303M35.6034 20.2303C36.6677 21.2944 37.512 22.5577 38.088 23.9481C38.6641 25.3384 38.9605 26.8287 38.9605 28.3337C38.9605 29.8387 38.6641 31.3289 38.088 32.7193C37.512 34.1097 36.6677 35.373 35.6034 36.437M29.7917 28.3337C29.7917 28.9415 29.5503 29.5244 29.1205 29.9541C28.6907 30.3839 28.1078 30.6253 27.5001 30.6253C26.8923 30.6253 26.3094 30.3839 25.8796 29.9541C25.4498 29.5244 25.2084 28.9415 25.2084 28.3337C25.2084 27.7259 25.4498 27.143 25.8796 26.7132C26.3094 26.2835 26.8923 26.042 27.5001 26.042C28.1078 26.042 28.6907 26.2835 29.1205 26.7132C29.5503 27.143 29.7917 27.7259 29.7917 28.3337Z" stroke="#667BC1" strokeWidth="4.58333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col items-start gap-1">
                <div className="text-white text-center text-xl font-semibold leading-[normal]">1,693</div>
                <div className="opacity-[0.3] text-white text-center text-sm font-semibold leading-[normal] uppercase">Online</div>
            </div>
        </div>
    )
}

export default OnlineIcon
