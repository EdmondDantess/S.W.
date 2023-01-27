import React, {useEffect, useState} from 'react';
import user from '../../../src/assets/images/user.png'
import {Preloader} from '../../common/Preloader/Preloader';
import {ChatMessageType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {AppstateType, RootReducerType} from '../../redux/redux-store';


const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])


    return (
        <div>
            <div style={{height: '250px'}}>
                     < Messages />
            </div>
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {
    const messages= useSelector<AppstateType, ChatMessageType[]>(state => state.chat.messages)

    return (
        <div style={{height: '350px', overflowY: 'auto'}}>
            {messages.map((m: ChatMessageType) => <Message key={m.userId} message={m}/>)}
        </div>
    )
}
const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <img src={message.photo ? message.photo : user} alt="avatar" style={{width: '30px'}}/>
            <b>{message.userName}</b>
            <hr/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useDispatch()

    function sendMessagHandler() {
        if (message !== '') {
            dispatch(sendMessage(message))
            setMessage('')
        }
    }

    return (
        <div>
            <div>
                <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button                     onClick={sendMessagHandler} >Send</button>
            </div>
        </div>
    )
}

export default ChatPage