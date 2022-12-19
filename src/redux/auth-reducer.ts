import {ActionsType, ThunkType} from './redux-store';
import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

let initialState = {
    id: null as NullOrNumber,
    email: null as NullOrString,
    login: null as NullOrString,
    isAuth: false,
    captchaUrl: null as NullOrString,
}

const authReducer = (state: AuthPropsType = initialState, action: ActionsType): AuthPropsType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'auth/SET_CAPTCHA':
            return {
                ...state,
                captchaUrl: action.payload.captcha,
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
        type: 'auth/SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}
export const getCaptcha = (captcha: string) => {
    return {
        type: 'auth/SET_CAPTCHA',
        payload: {captcha}
    } as const
}
export const authThunk = (): ThunkType => async (dispatch) => {
    let res = await authAPI.getAuth()
    if (res.resultCode === 0) {
        let {id, login, email} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: boolean): ThunkType => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(authThunk())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const res = await securityAPI.getCaptcha()
    const captchaUrl = res.data.url
    dispatch(getCaptcha(captchaUrl))
}


export const logoutTC = (): ThunkType => async (dispatch) => {
    let res = await authAPI.logout()

    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export type AuthPropsType = typeof initialState
type NullOrString = null | string
type NullOrNumber = null | number

export default authReducer