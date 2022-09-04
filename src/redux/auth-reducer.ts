import {ActionsType} from './redux-store';

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number,
                              email: string,
                              login: string,) => {
    return {
        type: 'SET_USER_DATA',
        data: {
            id,
            email,
            login
        }
    } as const
}

export default authReducer