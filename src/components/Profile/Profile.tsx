import React from "react";
import obc from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {Store} from "redux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type stateProfilePagePropsType={
  state: Store
}

export const Profile = (props: stateProfilePagePropsType) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo />
      <MyPostsContainer
          state={props.state}
      />
     </div>
  );
};
