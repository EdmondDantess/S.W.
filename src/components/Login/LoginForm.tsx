import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
                <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
                <div>
                    <label> <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)