import React, {KeyboardEvent} from 'react';
import {addPost, ProfilePageInitialStateType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppstateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

export type  TypeMyPostsProps = MapStateProps & MapDispatchProps

type MapStateProps = {
    state: ProfilePageInitialStateType
}
type MapDispatchProps = {
    sendPostHandler: (postTextValue: string) => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, postTextValue: string) => void
}

const mapStateToProps = (state: AppstateType): MapStateProps => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        sendPostHandler: (postTextValue: string) => {
            dispatch(addPost(postTextValue))
        },
        keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, postTextValue: string ) => {
            if (e.key === "Enter") {
                dispatch(addPost(postTextValue))
            }
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
