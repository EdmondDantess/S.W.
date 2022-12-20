import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppstateType} from '../../redux/redux-store';

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, capctha: string | null) => any
    isAuth: boolean
    captchaUrl: string | null
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <b><p>To log in get registered
            common test account credentials:
        </p>
            <p> Email: free@samuraijs.com
            </p>
            <p>
                Password: free
            </p>
        </b>
        <h1>LOGIN</h1>
        <LoginReduxForm captcha={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mstp = (state: AppstateType) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
export default connect(mstp, {login})(Login)