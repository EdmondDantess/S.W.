import React from "react";
import obc from "./MyPosts.module.css";
import { Post } from "./Post/Post";

type postsDataPropsType = {
  id: number;
  message: string;
  Likes: number;
};

type MyPostsPropsType = {
  postsData: postsDataPropsType[]
}

export const MyPosts  = (props: MyPostsPropsType) => {

  let posts = props.postsData.map((el) => {
    return (
      <div className={obc.posts} key={el.id}>
        <Post message={el.message} Likes={el.Likes} />
      </div>
    );
  });

  return (
    <div className={obc.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      {posts}
    </div>
  );
};
