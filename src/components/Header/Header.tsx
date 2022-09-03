import React from 'react';
import obc from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

export const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={obc.appHeader}>
            <img
                src="https://cdn.pixabay.com/photo/2016/04/19/06/27/logo-1338085_960_720.png"
                alt="Ooops IMG Loading is Failed"
            />
            <div className={obc.loginBlock}>{
                props.isAuth ?
                    props.login :
                    <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>
    );
};
