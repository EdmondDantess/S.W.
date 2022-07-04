import React from "react";
import { NavLink } from "react-router-dom";
import obc from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={obc.appNav}>
      <div className={obc.item}>
        <NavLink to="/profile" activeClassName={obc.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={obc.item}>
        <NavLink to="/dialogs" activeClassName={obc.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={obc.item}>
        <NavLink to="/news" activeClassName={obc.activeLink}>
          News
        </NavLink>
      </div>
      <div className={obc.item}>
        <NavLink to="/music" activeClassName={obc.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={obc.item}>
        <NavLink to="/settingz" activeClassName={obc.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
