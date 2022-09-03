import {combineReducers} from 'redux'
import {legacy_createStore as createStore} from 'redux'
import dialogsPageReducer, {addMessageInDialogsAC, textAreaValueMessageAC} from './dialogsPage-reducer';
import profilePageReducer, {addPostAC, changeTextValuePostAC, setUserProfile} from './profilePage-reducer';
import sidebarPageReducer from './sidebarPage-reducer';
import usersPageReducer, {
    followUnFollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching
} from './usersPage-reducer';
import authReducer, {setAuthUserData} from './auth-reducer';

export type ActionsType =
    ReturnType<typeof changeTextValuePostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageInDialogsAC>
    | ReturnType<typeof textAreaValueMessageAC>
    | ReturnType<typeof followUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>


export type RootState = typeof rootReducer
export type ReduxStateType = ReturnType<RootState>

export let rootReducer = combineReducers({
        dialogsPage: dialogsPageReducer,
        profilePage: profilePageReducer,
        sidebarPage: sidebarPageReducer,
        usersPage: usersPageReducer,
        auth: authReducer
    }
)

export let store = createStore(rootReducer)

//@ts-ignore
window.store = store