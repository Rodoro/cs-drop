import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
    return (
        <input
            type={type}
            className='border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            {...props}
        />
    )
}

export default Input