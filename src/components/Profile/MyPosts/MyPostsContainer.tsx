import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC,  profilePagePropsType} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type  typeMyPostsProps = MapStateProps & MapDispatchProps

type MapStateProps = {
    state: profilePagePropsType
}
type MapDispatchProps = {
    sendPostHandler: (postTextValue: string) => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, postTextValue: string) => void
}

const mapStateToProps = (state: ReduxStateType): MapStateProps => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        sendPostHandler: (postTextValue: string) => {
            dispatch(addPostAC(postTextValue))
        },
        keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>, postTextValue: string ) => {
            if (e.key === "Enter") {
                dispatch(addPostAC(postTextValue))
            }
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
