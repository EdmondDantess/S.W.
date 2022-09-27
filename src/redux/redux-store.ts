import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogsPageReducer, {addMessageInDialogsAC} from './dialogsPage-reducer';
import profilePageReducer, {
    addPostAC,
    setStatus,
    setUserProfile
} from './profilePage-reducer';
import sidebarPageReducer from './sidebarPage-reducer';
import usersPageReducer, {
    followUnFollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingInProgress, toggleIsFetching
} from './usersPage-reducer';
import authReducer, {setAuthUserData} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageInDialogsAC>
    | ReturnType<typeof followUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setStatus>

export type RootState = typeof rootReducer
export type ReduxStateType = ReturnType<RootState>

export let rootReducer = combineReducers({
        dialogsPage: dialogsPageReducer,
        profilePage: profilePageReducer,
        sidebarPage: sidebarPageReducer,
        usersPage: usersPageReducer,
        auth: authReducer,
        form: formReducer
    }
)

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store