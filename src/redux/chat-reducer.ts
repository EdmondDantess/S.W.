import {ThunkType} from './redux-store';
import {chatAPI, ChatMessageType} from '../api/chat-api';
import {Dispatch} from 'redux';

let initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state: ChatInitialStateType = initialState,
                     action: ChatActionsType): ChatInitialStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}

export const setMessages = (messages: ChatMessageType[]) => {
    return {
        type: 'chat/SET_MESSAGES',
        payload: {messages}
    } as const
}
let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandlerCreator === null) {
        _newMessageHandlerCreator = (messages) => {
            dispatch(setMessages(messages))
        }
    }
    return _newMessageHandlerCreator
}
export const startMessagesListening = (): ThunkType => (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => (dispatch) => {
    chatAPI.sendMessage(message)
}

export type ChatInitialStateType = typeof initialState
export type ChatActionsType =
    ReturnType<typeof setMessages>

export default chatReducer