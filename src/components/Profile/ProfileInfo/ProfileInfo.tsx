import React from "react";
import obc from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div className={obc.imgHead}>
        <img
          src="https://ic.pics.livejournal.com/dergachev_va/58474394/4085016/4085016_original.png"
          alt="Fail"
        />
      </div>
      <div className={obc.description}>ava i description</div>
    </div>
  );
};
