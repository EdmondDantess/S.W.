import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthInitialStateType, logout, setAuthUserData} from '../../redux/auth-reducer';
import {AppstateType} from '../../redux/redux-store';
import {NullOrNumber, NullOrString} from '../../redux/types/types';


export type mstpType = AuthInitialStateType
export  type mstdType = {
    setAuthUserData: (id: NullOrNumber, email: NullOrString, login: NullOrString, isAuth: boolean) => void
    logout: () => void
}
export type HeaderContainerPropsType = mstpType & mstdType

function HeaderContainer(props: HeaderContainerPropsType) {
    return (
        <Header {...props}/>
    );
}

export const mstp = (state: AppstateType): AuthInitialStateType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}
export default connect(mstp, {setAuthUserData, logout})(HeaderContainer)