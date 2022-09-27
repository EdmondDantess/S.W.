import React, {KeyboardEvent} from 'react';
import {addMessageInDialogsAC, dialogsPagePropsType, } from '../../redux/dialogsPage-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';

import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStateProps = {
    state: dialogsPagePropsType
}

type MapDispatchProps = {
    addMessage: (newMes: string) => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, valueText: string) => void
}

export type  typeDialogProps = MapStateProps & MapDispatchProps

const mapStateToProps = (state: ReduxStateType): MapStateProps => {
    return {
        state: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addMessage: (newMes: string) => {
            dispatch(addMessageInDialogsAC(newMes))
        },

        keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, messageValueTextarea: string) => {
            if (e.key === 'Enter') {
                dispatch(addMessageInDialogsAC(messageValueTextarea))
            }
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
