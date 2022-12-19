import {ThunkType} from './redux-store';
import {auth} from './auth-reducer';

let initialState = {
    initialized: false
}

const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
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

export const initialSucces = () => {
    return {
        type: 'app/SET_INITIALIZED'
    } as const
}
export const initializeApp = (): ThunkType => async (dispatch) => {
    await dispatch(auth())
    dispatch(initialSucces())
}

export type AppInitialStateType = typeof initialState
export type AppActionsType = ReturnType<typeof initialSucces>

export default appReducer