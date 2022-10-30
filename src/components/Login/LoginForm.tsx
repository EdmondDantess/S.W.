import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls';
import {requered} from '../../utils/validators/validators';
import style from '../../common/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const LoginForm: React.FC<any> = ({captcha, error, handleSubmit}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                {captcha && <img src={captcha} alt="Captcha"/>}
                {captcha && <Field
                    placeholder={'symbols from image'}
                    name={'captcha'}
                    validate={[requered]}
                    component={Input}/>}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType, { captcha: string | null}>({
    form: 'login',
})(LoginForm)