import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import obc from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={obc.appContent}>
      <div>
        <img
          src="https://ic.pics.livejournal.com/dergachev_va/58474394/4085016/4085016_original.png"
          alt="Fail"
        />
      </div>
      <div>ava i description</div>
      <MyPosts/>
    </div>
  );
};
