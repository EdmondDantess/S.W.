import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogsPageReducer, {DialogsActionsType} from './dialogsPage-reducer';
import profilePageReducer, {ProfileActionsType} from './profilePage-reducer';
import sidebarPageReducer, {SideBarActionsType} from './sidebarPage-reducer';
import usersPageReducer, {UsersActionsType} from './usersPage-reducer';
import authReducer, {AuthActionsType} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer, {AppActionsType} from './app-reducer';

export type ActionsType = UsersActionsType | SideBarActionsType | ProfileActionsType | DialogsActionsType
    | AuthActionsType | AppActionsType
export type RootReducerType = typeof rootReducer
export type AppstateType = ReturnType<RootReducerType>
export type ThunkType = ThunkAction<void, AppstateType, unknown, ActionsType>

export let rootReducer = combineReducers({
        dialogsPage: dialogsPageReducer,
        profilePage: profilePageReducer,
        sidebarPage: sidebarPageReducer,
        usersPage: usersPageReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store