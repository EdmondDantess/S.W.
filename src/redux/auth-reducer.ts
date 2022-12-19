import {ThunkType} from './redux-store';
import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {NullOrNumber, NullOrString} from './types/types';

let initialState = {
    id: null as NullOrNumber,
    email: null as NullOrString,
    login: null as NullOrString,
    isAuth: false,
    captchaUrl: null as NullOrString,
}

const authReducer = (state: AuthInitialStateType = initialState,
                     action: AuthActionsType): AuthInitialStateType => {
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
export const auth = (): ThunkType => async (dispatch) => {
    let res = await authAPI.me()
    if (res.resultCode === ResultCodesEnum.Succes) {
        let {id, login, email} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch) => {
        let res = await authAPI.login(email, password, rememberMe, captcha)
        if (res.resultCode === ResultCodesEnum.Succes) {
            dispatch(auth())
        } else {
            if (res.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = res.messages.length > 0 ? res.messages[0] : 'error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const res = await securityAPI.getCaptcha()
    const captchaUrl = res.data.url
    dispatch(getCaptcha(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.resultCode === ResultCodesEnum.Succes) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export type AuthInitialStateType = typeof initialState
export type AuthActionsType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptcha>

export default authReducer