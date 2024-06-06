import React from 'react'
import style from './Switch.module.css'
import { SelectProps } from './Select'

const Switch: React.FC<SelectProps> = ({ value, setValue }) => {
    return (
        <label className={style.switch} onClick={() => setValue(!value)}>
            <input type="checkbox" />
            <span className={style.slider} />
        </label>
    )
}

export default Switch
