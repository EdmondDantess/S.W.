import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthInitialStateType, logout, setAuthUserData} from '../../redux/auth-reducer';
import {AppstateType} from '../../redux/redux-store';


export type mstpType = AuthInitialStateType
export  type mstdType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => any
    logout: () => any
}
export type HeaderContainerPropsType = mstpType & mstdType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    render() {
        return (
            <Header {...this.props}/>
        );
    }
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