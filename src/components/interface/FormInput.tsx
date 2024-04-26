import React, { useId } from 'react'
import Input, { InputProps } from './Input'

export interface FormInputProps extends InputProps {
    label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, children, ...props }) => {
    return (
        <div className='mt-4 '>
            {label && <p>{label}</p>}
            <Input type={type} {...props}/>
            {children}
        </div>
    )
}

export default FormInput
