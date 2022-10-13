import React from 'react';
import {NavLink} from 'react-router-dom';
import obc from './Nav.module.css';
import {MapStateToPropsType} from './NavContainer';
import mess from '../../assets/images/message.png'
import users from '../../assets/images/usersToNav.png'
import profile from '../../assets/images/profile.png'

export const Nav = (props: MapStateToPropsType) => {
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
