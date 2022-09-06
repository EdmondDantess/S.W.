import React, {ChangeEvent, KeyboardEvent} from 'react';
import {addMessageInDialogsAC, dialogsPagePropsType, textAreaValueMessageAC} from '../../redux/dialogsPage-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateProps = {
    state: dialogsPagePropsType
    isAuth: boolean
}
type MapDispatchProps = {
    addMessage: (value: string) => void
    addTextInTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, valueText: string) => void
}

export type  typeDialogProps = MapStateProps & MapDispatchProps

const mapStateToProps = (state: ReduxStateType): MapStateProps => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {

    return {
        addMessage: (messageValueTextarea: string) => {
            dispatch(addMessageInDialogsAC(messageValueTextarea))
        },
        addTextInTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(textAreaValueMessageAC(e.currentTarget.value))
        },
        keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, messageValueTextarea: string) => {
            if (e.key === 'Enter') {
                dispatch(addMessageInDialogsAC(messageValueTextarea))
            }
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);