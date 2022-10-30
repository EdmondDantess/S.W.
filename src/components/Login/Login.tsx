import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {ReduxStateType} from '../../redux/redux-store';

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, capctha: any) => any
    isAuth: boolean
    captchaUrl: string | null
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
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
        <LoginReduxForm captcha={props.captchaUrl} onSubmit={onSubmit} />
    </div>
}

const mstp = (state: ReduxStateType) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
export default connect(mstp, {loginTC})(Login)