import React, { ChangeEvent, KeyboardEvent } from "react";
import obc from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {addNewPostType, valuePostTextAreaType} from "../../../redux/state";

type postsDataPropsType = {
  id: number;
  message: string;
  Likes: number;
};

type MyPostsPropsType = {
  postTextValue: string;
  postsData: postsDataPropsType[];
  dispatch: (action: addNewPostType | valuePostTextAreaType) => void
};

export const MyPosts = (props: MyPostsPropsType) => {
  let posts = props.postsData.map((el) => {
    return (
      <div className={obc.posts} key={el.id}>
        <Post message={el.message} Likes={el.Likes} />
      </div>
    );
  });

  const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({type: "textareaValuePost", text: e.currentTarget.value});
  };
  const sendPostHadler = () => {
    props.dispatch({type: "addPost", postText: props.postTextValue});
   };

   const keyPressHandlerText=(e: KeyboardEvent<HTMLTextAreaElement>)=>{
    if (e.key === "Enter") { props.dispatch({type: "addPost", postText: props.postTextValue})}
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
