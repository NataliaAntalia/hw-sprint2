import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import grok from './Grok.jpg'
import gpt from './GPT.jpg'

// import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

export type UserType = {
    avatar: string,
    name: string,
}

export type MessagesType = {
    text: string,
    time: string,
}

export type MessageType = {
    id: number,
    user: UserType
    message: MessagesType


}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: grok, // можно менять
        name: 'Mr Grok',  // можно менять
    },
    message: {
        text: 'Hey, GPT, have you seen Elon\'s latest tweet? Seems like he\'s up to something again. I\'m just wondering, how does he manage to do everything?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: gpt, // можно менять
        name: 'Mr GPT', // можно менять
    },
    message: {
        text: 'Hi, Grok! Yes, I saw it. Elon is always full of surprises. On one hand, it\'s inspiring, but on the other hand, it sometimes seems like he\'s overloading himself. By the way, how\'s your analysis of the election data going?', // можно менять
        time: '22:03', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
