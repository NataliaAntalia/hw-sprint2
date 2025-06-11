import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import s from '..//../HW11.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <div id={props.id}>
        <Slider className={s.Slider}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
        </div>
    )
}

export default SuperRange
