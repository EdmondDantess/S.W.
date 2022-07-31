import React, {ChangeEvent, KeyboardEvent} from "react";
import obc from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, changeTextValuePostAC} from "../../../redux/profilePage-reducer";
import {ActionsType} from "../../../redux/state";


type postsDataPropsType = {
    id: number;
    message: string;
    Likes: number;
};

type MyPostsPropsType = {
    postTextValue: string;
    postsData: postsDataPropsType[];
    dispatch: (action: ActionsType) => void
};

export const MyPosts = (props: MyPostsPropsType) => {
    let posts = props.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes}/>
            </div>
        );
    });

    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeTextValuePostAC(e.currentTarget.value))
    };
    const sendPostHadler = () => {
        props.dispatch(addPostAC(props.postTextValue))
    };

    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.dispatch(addPostAC(props.postTextValue))
        }
    }

    return (
        <div className={obc.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
          <textarea
              value={props.postTextValue}
              className={obc.textareaPosts}
              onChange={changeTextHandler}
              onKeyPress={keyPressHandlerText}
          ></textarea>
                </div>
                <div>
                    <button onClick={sendPostHadler}>Send</button>
                </div>
            </div>
            {posts}
        </div>
    );
};
