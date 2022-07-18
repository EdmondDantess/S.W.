import React from "react";
import obc from "./FriendsNav.module.css";

type friendsNavProps = {
  id: number;
  name: string;
  urlAvatar: string;
};

type FriendsElementNavProps = {
  friends: friendsNavProps[];
};

export const FriendsNav = (props: FriendsElementNavProps) => {
    
  let friends = props.friends.map((el) => {
    if (el.id < 5) {
      return (
        <div key={el.id} className={obc.friensBlockParent}>
          <div className={obc.blockImgName}>
            <img src={el.urlAvatar} className={obc.friendsAvatars} alt="No avatar" />
          <p>{el.name}</p>  
          </div>
        </div>
      );
    }
  });



  return <div className={obc.friendsObj}>{friends}</div>;
};
