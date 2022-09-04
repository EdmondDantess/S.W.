import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {authPropsType, setAuthUserData} from '../../redux/auth-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';


export type mstpType = authPropsType
export  type mstdType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
export type HeaderContainerPropsType = mstpType & mstdType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {

        usersAPI.getAuth().then(res => {
            if (res.resultCode === 0) {
                let {id, login, email} = res.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        console.log(this.props)
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
export default connect(mstp, {setAuthUserData})(HeaderContainer)