import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {authThunk} from './auth-reducer';

export type appPropsType = {
    initialized: boolean
}

let initialState: appPropsType = {
    initialized: false
}

const appReducer = (state: appPropsType = initialState, action: ActionsType): appPropsType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initialSuccesAC = () => {
    return {
        type: 'SET_INITIALIZED'
    } as const
}
export const initializeTC = (): any => {
    return (dispatch: Dispatch) => {
        let promise = dispatch(authThunk())
        promise.then(() => dispatch(initialSuccesAC()))
    }
}

export default appReducer