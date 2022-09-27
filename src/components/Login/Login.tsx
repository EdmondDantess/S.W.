import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {ReduxStateType} from '../../redux/redux-store';

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => any
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <a href="https://social-network.samuraijs.com/account" target={'_blank'}>

        </a>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mstp = (state: ReduxStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mstp, {loginTC})(Login)