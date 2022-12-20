import styles from './FormsControls.module.css'
import React from 'react';
import {WrappedFieldProps} from 'redux-form';

export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const haveError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (haveError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {haveError && <span>{'some error'}</span>}
        </div>

    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea  {...input} {...restProps}/></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input  {...input} {...restProps}/></FormControl>
    )
}
