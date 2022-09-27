import styles from './FormsControls.module.css'

export const FormControl = ({input, meta, child, ...props}: any) => {
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

export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea  {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><input  {...input} {...restProps}/></FormControl>
    )
}
