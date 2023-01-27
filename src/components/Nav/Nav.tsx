import React from 'react';
import {NavLink} from 'react-router-dom';
import obc from './Nav.module.css';
import mess from '../../assets/images/message.png'
import users from '../../assets/images/usersToNav.png'
import profile from '../../assets/images/profile.png'

export const Nav = () => {
    return (
        <nav className={obc.appNav}>
            <div className={obc.item}>
                <NavLink to="/profile" activeClassName={obc.activeLink}>
                    <div className={obc.contentN}><img src={profile} alt=""/> <span>Profile</span></div>
                </NavLink>
            </div>
            <div className={obc.item}>
                <NavLink to="/users" activeClassName={obc.activeLink}>
                    <div className={obc.contentN}><img src={users} alt=""/><span>Users</span></div>
                </NavLink>
            </div>
            <div className={obc.item}>
                <NavLink to="/dialogs" activeClassName={obc.activeLink}>
                    <div className={obc.contentN}><img src={mess} alt=""/><span> Messages </span></div>
                </NavLink>
            </div>
            <div className={obc.item}>
                <NavLink to="/chat" activeClassName={obc.activeLink}>
                    <div className={obc.contentN}><img src={mess} alt=""/><span> Chat </span></div>
                </NavLink>
            </div>
        </nav>
    );
};
