import {ActionsType, ThunkType} from './redux-store';
import {authThunk} from './auth-reducer';

let initialState = {
    initialized: false
}

const appReducer = (state: AppPropsType = initialState, action: ActionsType): AppPropsType => {
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

export type AppPropsType = typeof initialState

export default appReducer