import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)


    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setLoading(true)

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                // дописать
                setText(res.data?.errorText || 'Успешный ответ!')
                setInfo(res.data?.info || 'Все прошло хорошо!')
            })
            .catch((e) => {
                // дописать
                const status = e.response?.status

                if (status === 400) {
                    setCode('Код 400!')
                    setImage(error400)
                    setText(e.response.data?.errorText || 'Ошибка 400')
                    setInfo(e.response.data?.info || 'Некорректный запрос')
                } else if (status === 500) {
                    setCode('Код 500!')
                    setImage(error500)
                    setText(e.response.data?.errorText || 'Ошибка 500')
                    setInfo(e.response.data?.info || 'Сервер не отвечает')
                } else {
                    setCode('Error!')
                    setImage(errorUnknown)
                    setText(e.message || 'Неизвестная ошибка')
                    setInfo('AxiosError')
                } })
            .finally(() => {
                    setLoading(false)

            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        disabled={loading}
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        // дописать

                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        disabled={loading}
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        disabled={loading}
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        disabled={loading}
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
