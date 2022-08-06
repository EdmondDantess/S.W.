import React, {ChangeEvent, KeyboardEvent} from "react";
import obc from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, changeTextValuePostAC, profilePagePropsType} from "../../../redux/profilePage-reducer";
import {ActionsType} from "../../../redux/redux-store";
import {Store} from "redux";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    state: Store;
};

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.state.getState().profilePage

    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.state.dispatch(changeTextValuePostAC(e.currentTarget.value))
    };
    const sendPostHadler = () => {
        props.state.dispatch(addPostAC(state.postTextValue))
    };

    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.state.dispatch(addPostAC(state.postTextValue))
        }
    }

    return (
       <MyPosts state={state}
                changeTextHandler={changeTextHandler}
                sendPostHadler={sendPostHadler}
                keyPressHandlerText={keyPressHandlerText}

       />
    );
};
