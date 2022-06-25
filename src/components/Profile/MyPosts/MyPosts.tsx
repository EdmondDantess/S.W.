import React from "react";
import obc from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <div className={obc.posts}>
        <Post message='Hello World' Likes={15}  />
        <Post message="Hi im new Post" Likes={20} />
      </div>
    </div>
  );
};
