import {ActionsType, ThunkType} from './redux-store';
import {authThunk} from './auth-reducer';

export type appPropsType = {
    initialized: boolean
}

let initialState: appPropsType = {
    initialized: false
}

const appReducer = (state: appPropsType = initialState, action: ActionsType): appPropsType => {
    switch (action.type) {
        case 'app/SET_INITIALIZED':
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
        type: 'app/SET_INITIALIZED'
    } as const
}
export const initializeTC = (): ThunkType => async (dispatch) => {
    await dispatch(authThunk())
    dispatch(initialSuccesAC())
}


export default appReducer