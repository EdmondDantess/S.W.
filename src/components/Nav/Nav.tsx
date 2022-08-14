import React from "react";
import {NavLink} from "react-router-dom";
import {FriendsNav} from "./FriendsNav/FriendsNav";
import obc from "./Nav.module.css";
import {MapStateToPropsType} from "./NavContainer";

export const Nav = (props: MapStateToPropsType) => {
    return (
        <nav className={obc.appNav}>
            <div className={obc.item}>
                <NavLink to="/profile" activeClassName={obc.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={obc.item}>
                <NavLink to="/users" activeClassName={obc.activeLink}>
                    Users
                </NavLink>
            </div>
            <div className={obc.item}>
                <NavLink to="/dialogs" activeClassName={obc.activeLink} >
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
            <div className={obc.friendsNav}>
                <h4>Friends</h4>
                <FriendsNav friends={props.state.friendsNav}/>
            </div>
        </nav>
    );
};
