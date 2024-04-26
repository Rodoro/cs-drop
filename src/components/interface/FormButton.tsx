import React, { ButtonHTMLAttributes } from 'react'

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const FormButton: React.FC<FormButtonProps> = ({ children, ...props}) => {
    return (
        <button {...props} className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {children}
        </button>
    )
}

export default FormButton
