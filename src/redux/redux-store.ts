import {applyMiddleware, combineReducers} from 'redux'
import {legacy_createStore as createStore} from 'redux'
import dialogsPageReducer, {addMessageInDialogsAC, textAreaValueMessageAC} from './dialogsPage-reducer';
import profilePageReducer, {addPostAC, changeTextValuePostAC, setUserProfile} from './profilePage-reducer';
import sidebarPageReducer from './sidebarPage-reducer';
import usersPageReducer, {
    followUnFollow, getUsersThunk,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress, toggleIsFetching
} from './usersPage-reducer';
import authReducer, {setAuthUserData} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

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
    | ReturnType<typeof toggleFollowingInProgress>
    //| ReturnType<typeof getUsersThunk>


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

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store