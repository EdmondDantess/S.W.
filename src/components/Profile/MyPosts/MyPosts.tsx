import React, {ChangeEvent, KeyboardEvent} from "react";
import obc from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {profilePagePropsType} from "../../../redux/profilePage-reducer";

type MyPostsPropsType = {
    state: profilePagePropsType
    changeTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    sendPostHandler: () => void
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>) => void
};

export const MyPosts = (props: MyPostsPropsType) => {

    let posts = props.state.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes}/>
            </div>
        );
    });

    const onSendPostHandler = () => {
        props.sendPostHandler()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextHandler(e)
    }

    const onKeyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        props.keyPressHandlerText(e)
    }

    return (
        <div className={obc.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
          <textarea className={obc.textareaPosts}
                    value={props.state.postTextValue}
                    onChange={onChangeTextHandler}
                    onKeyPress={onKeyPressHandlerText}>

          </textarea>
                </div>
                <div>
                    <button onClick={onSendPostHandler}>Send</button>
                </div>
            </div>
            {posts}
        </div>
    );
};
