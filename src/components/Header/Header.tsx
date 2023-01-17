import React from 'react';
import obc from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';
import header from '../../assets/images/header.gif'
import {useSelector} from 'react-redux';
import {AppstateType} from '../../redux/redux-store';
import userPhoto from '../../assets/images/user.png';

export const Header = React.memo((props: HeaderContainerPropsType) => {

        const avatar = useSelector<AppstateType>(state => state.profilePage.profile.photos.small ?
            state.profilePage.profile.photos.small : userPhoto)

        return (
            <header className={obc.appHeader}>
                <img src={header}
                     alt="Ooops IMG Loading is Failed"
                />
                <div className={obc.loginBlock}>{
                    props.isAuth ?
                        <div style={{display: 'flex', alignItems: 'end'}}><span style={{
                            fontWeight: 'bold',
                            color: 'snow'
                        }}> {props.login}</span><img src={avatar as string} alt="avatar"
                                                     style={{
                                                         height: '60px',
                                                         borderRadius: '10%'
                                                     }}/>
                            <button
                                onClick={props.logout}>Logout
                            </button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }</div>
            </header>
        );
    }
)