import React from "react";
import obc from "./Post.module.css";

type PostTypeProps = {
  message: string
  Likes: number
}


export const Post = (props: PostTypeProps) => {
  return (
    <div className={obc.item}>
      <img
        src="https://m.media-amazon.com/images/I/61R2afVsSbL._AC_SL1101_.jpg"
        alt="download img fail"
      />
      {props.message}
      <div>Like<span> {props.Likes}</span></div>
    </div>
  );
};
