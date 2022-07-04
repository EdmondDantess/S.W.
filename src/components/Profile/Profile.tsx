import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import obc from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


type postsDataPropsType = {
  id: number;
  message: string;
  Likes: number;
};

type  ProfilePropsType ={
  postsData: postsDataPropsType[]
}

export const Profile = (props:ProfilePropsType) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>
  );
};
