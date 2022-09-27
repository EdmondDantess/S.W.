import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type authPropsType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: authPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: authPropsType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}
export const authThunk = (): any => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth().then(res => {
            if (res.resultCode === 0) {
                let {id, login, email} = res.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout().then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}
export default authReducer