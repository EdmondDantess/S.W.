import React, {useEffect, useRef, useState} from 'react';
import user from '../../../src/assets/images/user.png'
import {IChatMessageAPIType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {IChatMessageType, sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {AppstateType} from '../../redux/redux-store';


const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

const Chat: React.FC = () => {

    const dispatch = useDispatch()
    const status = useSelector<AppstateType>(state => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])


    return (
        <div>
            {status === 'error' && <div>Some error occured. Please refresh the page</div>}
            < Messages/>
            <AddMessageForm/>

        </div>
    )
}

const Messages: React.FC = () => {
    const messages = useSelector<AppstateType, IChatMessageType[]>(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScroll, setAutoScroll] = useState(false)

    useEffect(() => {
        if (autoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    useEffect(()=>{
        messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    },[])

    function scrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>) {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 400) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }

    return (
        <div style={{height: '350px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, i) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}
const Message: React.FC<{ message: IChatMessageAPIType }> = React.memo(({message}) => {

    return (
        <div>
            <img src={message.photo ? message.photo : user} alt="avatar" style={{width: '30px'}}/>
            <b>{message.userName}</b>
            <hr/>
            {message.message}
            <hr/>
        </div>
    )
})

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector<AppstateType>(state => state.chat.status)

    function sendMessagHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
                <button disabled={status !== 'ready'} onClick={(e) => sendMessagHandler(e)}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage