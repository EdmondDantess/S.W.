import {ThunkType} from './redux-store';
import {chatAPI, IChatMessageAPIType} from '../api/chat-api';
import {Dispatch} from 'redux';
import {v1} from 'uuid'

 export interface IChatMessageType extends IChatMessageAPIType {
    id: string
}


let initialState = {
    messages: [] as IChatMessageType[],
    status: 'pending' as 'pending' | 'ready' | 'error'
}

const chatReducer = (state: ChatInitialStateType = initialState,
                     action: ChatActionsType): ChatInitialStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, i, array) => i >= array.length - 100)
            }
        case 'chat/SET_STATUS':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export const setMessages = (messages: IChatMessageAPIType[]) => {
    return {
        type: 'chat/SET_MESSAGES',
        payload: {messages}
    } as const
}
export const setStatus = (status: 'pending' | 'ready' | 'error') => {
    return {
        type: 'chat/SET_STATUS',
        payload: {status}
    } as const
}
let _newMessageHandlerCreator: ((messages: IChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandlerCreator === null) {
        _newMessageHandlerCreator = (messages) => {
            dispatch(setMessages(messages))
        }
    }
    return _newMessageHandlerCreator
}

let _statusChangedHandlerCreator: ((status: 'pending' | 'ready' | 'error') => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandlerCreator === null) {
        _statusChangedHandlerCreator = (status) => {
            dispatch(setStatus(status))
        }
    }
    return _statusChangedHandlerCreator
}

export const startMessagesListening = (): ThunkType => (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => (dispatch) => {
    chatAPI.sendMessage(message)
}

export type ChatInitialStateType = typeof initialState
export type ChatActionsType =
    ReturnType<typeof setMessages> |
    ReturnType<typeof setStatus>

export default chatReducer