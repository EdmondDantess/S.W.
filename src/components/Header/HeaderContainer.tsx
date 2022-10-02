import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authPropsType, logoutTC, setAuthUserData} from '../../redux/auth-reducer';
import {ReduxStateType} from '../../redux/redux-store';


export type mstpType = authPropsType
export  type mstdType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => any
    logoutTC: ()=>any
}
export type HeaderContainerPropsType = mstpType & mstdType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {



    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export const mstp = (state: ReduxStateType): authPropsType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mstp, {setAuthUserData, logoutTC})(HeaderContainer)