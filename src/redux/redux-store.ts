import {combineReducers, Store} from 'redux'
import {legacy_createStore as createStore} from 'redux'
import dialogsPageReducer, {addMessageInDialogsAC, textAreaValueMessageAC} from "./dialogsPage-reducer";
import profilePageReducer, {addPostAC, changeTextValuePostAC} from "./profilePage-reducer";
import sidebarPageReducer from "./sidebarPage-reducer";

export type ActionsType =
    ReturnType<typeof changeTextValuePostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageInDialogsAC>
    | ReturnType<typeof textAreaValueMessageAC>


export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>

export type StoreType = Store<ReduxStateType, ActionsType>

export let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    sidebarPage: sidebarPageReducer}
)

export let store: StoreType = createStore(reducers)