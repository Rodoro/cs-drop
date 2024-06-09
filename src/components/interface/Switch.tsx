import React from 'react'
import style from './Switch.module.css'
import { SelectProps } from './Select'

const Switch: React.FC<SelectProps> = ({ value, setValue }) => {
    return (
        <label className={style.switch}>
            <input type="checkbox" />
            <span className={style.slider} onClick={() => setValue(!value)}/>
        </label>
    )
}

export default Switch
