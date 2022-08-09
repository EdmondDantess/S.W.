import React, {ChangeEvent, KeyboardEvent} from "react";
import obc from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {typeMyPostsProps} from "./MyPostsContainer";

export const MyPosts = (props: typeMyPostsProps) => {

    let posts = props.state.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes}/>
            </div>
        );
    });

    const onSendPostHandler = () => {
        props.sendPostHandler(props.state.postTextValue)
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextHandler(e)
    }

    const onKeyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        props.keyPressHandlerText(e, props.state.postTextValue)
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
