import React from "react";
import obc from "./Nav.module.css";

console.log(obc)

export const Nav = () => {
  return (
    <nav className={obc.appNav}>
      <div className={obc.item}>
        <a>Profile</a>
      </div>
      <div className={obc.item}>
        <a>Messages</a>
      </div>
      <div className={obc.item}>
        <a>News</a>
      </div>
      <div className={obc.item}>
        <a>Music</a>
      </div>
      <div className={obc.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
