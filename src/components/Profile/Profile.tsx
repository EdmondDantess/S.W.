import React from "react";
import obc from "./Profile.module.css";
import {ProfileInfo, ProfileInfoPropsType} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from './ProfileContainer';
import {profileStateProps} from '../../redux/profilePage-reducer';

export const Profile = (props: ProfileInfoPropsType ) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
     </div>
  );
};
