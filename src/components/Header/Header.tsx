import React from 'react';
import obc from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';
import header from '../../assets/images/header.gif'

export const Header = React.memo((props: HeaderContainerPropsType) => {

    return (
        <header className={obc.appHeader}>
            <img src={header}
                 alt="Ooops IMG Loading is Failed"
            />
            <div className={obc.loginBlock}>{
                props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }</div>
        </header>
    );
}
)