import {Field, Form, Formik} from 'formik';
import React from 'react';
import {FilterType} from '../../redux/users-reducer';
import obc from './Users.module.css';

const usersSearchFormValidate = (values: any) => {
    return {}
}
type UserSearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}
type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

export const UsersSearchForm: React.FC<UserSearchFormType> = React.memo((props) => {
    const submit = (values: FormType, {setSubmitting}:
        { setSubmitting: (isSubmitting: boolean) => void }) => {
        const  filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null'
                ? null
                : values.friend === 'true'
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div className={obc.searchWrapper}>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {
                ({isSubmitting}) => (
                    <Form>
                        <Field type="text" name={'term'} placeholder={'Find user'}/>
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only friends</option>
                            <option value="false">Only not friends</option>
                        </Field>
                        <button type={'submit'} disabled={isSubmitting} className={obc.searchBtn}>Find</button>
                    </Form>
                )
            }
        </Formik>
    </div>
})