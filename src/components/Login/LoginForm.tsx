import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls';
import {requered} from '../../utils/validators/validators';
import style from '../../common/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Email'}
                            name={'email'}
                            component={Input}
                            validate={[requered]}
                /></div>
                <div><Field
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    validate={[requered]}
                    component={Input}/></div>
                <div>
                    <label> <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me</label>
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
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