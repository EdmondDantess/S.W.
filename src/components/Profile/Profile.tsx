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
  postTextValue: string
}

type stateProfilePagePropsType={
  state: ProfilePropsType
  addPosts: (textPost: string)=>void
  postsTextValueArea: (text: string)=>void
}

export const Profile = (props:stateProfilePagePropsType) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} addPosts={props.addPosts} postTextValue={props.state.postTextValue} postsTextValueArea={props.postsTextValueArea}/>
    </div>
  );
};
