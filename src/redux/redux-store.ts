import dialogsReducer, {DialogsActionsType} from './dialogs-reducer'
import profileReducer, {ProfileActionsType} from './profile-reducer'
import sidebarReducer, {SideBarActionsType} from './sidebar-reducer'
import usersReducer, {UsersActionsType} from './users-reducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer, {AuthActionsType} from './auth-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import appReducer, {AppActionsType} from './app-reducer'
import {reducer as formReducer} from 'redux-form'


export let rootReducer = combineReducers({
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionsType = UsersActionsType | SideBarActionsType | ProfileActionsType | DialogsActionsType
    | AuthActionsType | AppActionsType
export type RootReducerType = typeof rootReducer
export type AppstateType = ReturnType<RootReducerType>
export type ThunkType = ThunkAction<void, AppstateType, unknown, ActionsType>

//@ts-ignore
window.store = store