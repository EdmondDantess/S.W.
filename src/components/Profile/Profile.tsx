import React from "react";
import obc from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile = ( ) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo />
      <MyPostsContainer/>
     </div>
  );
};
