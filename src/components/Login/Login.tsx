import React from 'react';
import {FormDataType,  LoginReduxForm} from './LoginForm';

export const Login = () => {
    const onSubmit = (formData: FormDataType)=> {
        console.log(formData)
    }
    return <div>
        <a href="https://social-network.samuraijs.com/account" target={'_blank'}>

        </a>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}