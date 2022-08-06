import React, {ChangeEvent, KeyboardEvent} from "react";
import obc from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {profilePagePropsType} from "../../../redux/profilePage-reducer";


type MyPostsPropsType = {
     state: profilePagePropsType
    changeTextHandler: (e: ChangeEvent<HTMLTextAreaElement>)=> any
    sendPostHadler:()=>any
    keyPressHandlerText:(e: KeyboardEvent<HTMLTextAreaElement>)=>any
};

export const MyPosts = (props: MyPostsPropsType) => {

    let posts = props.state.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes}/>
            </div>
        );
    });

    const onSendPostHadler =()=> {
        props.sendPostHadler()
    }

    const onChangeTextHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.changeTextHandler(e)
    }

    const onKeyPressHandlerText =(e: KeyboardEvent<HTMLTextAreaElement>)=> {
        props.keyPressHandlerText(e)
    }

    return (
        <div className={obc.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
          <textarea
              value={props.state.postTextValue}
              className={obc.textareaPosts}
              onChange={onChangeTextHandler}
              onKeyPress={onKeyPressHandlerText}
          ></textarea>
                </div>
                <div>
                    <button onClick={onSendPostHadler}>Send</button>
                </div>
            </div>
            {posts}
        </div>
    );
};
