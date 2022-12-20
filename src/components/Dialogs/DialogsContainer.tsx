import React, {KeyboardEvent} from 'react';
import {addMessageInDialogs, DialogsPageInitialStateType,} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppstateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';

import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStateProps = {
    state: DialogsPageInitialStateType
}

type MapDispatchProps = {
    addMessage: (newMes: string) => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, valueText: string) => void
}

export type  typeDialogProps = MapStateProps & MapDispatchProps

const mapStateToProps = (state: AppstateType): MapStateProps => {
    return {
        state: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addMessage: (newMes: string) => {
            dispatch(addMessageInDialogs(newMes))
        },

        keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, messageValueTextarea: string) => {
            if (e.key === 'Enter') {
                dispatch(addMessageInDialogs(messageValueTextarea))
            }
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
