import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import obc from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/state";


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
  dispatch: (action: ActionsType) => void
}

export const Profile = (props:stateProfilePagePropsType) => {
  return (
    <div className={obc.INfo}>
      <ProfileInfo />
      <MyPosts
          postsData={props.state.postsData}
          postTextValue={props.state.postTextValue}
          dispatch={props.dispatch.bind(props.state)}
      />
    </div>
  );
};
