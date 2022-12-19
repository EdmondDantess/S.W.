import React, {KeyboardEvent} from 'react';
import obc from './MyPosts.module.css';
import {Post} from './Post/Post';
import {TypeMyPostsProps} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requered} from '../../../utils/validators/validators';
import {TextArea} from '../../../common/FormsControls';


const validatorMaxSymbols = maxLengthCreator(50)

export const MyPosts = React.memo((props: TypeMyPostsProps) => {
    let posts = props.state.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes} avatars = {props.state.profile.photos.large as null | string}/>
            </div>
        );
    });

    const onSendPostHandler = (values: FormDataTypePosts) => {
        props.sendPostHandler(values.newPosts)
        values.newPosts = ''
    }
    const onKeyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>, values: FormDataTypePosts) => {
        props.keyPressHandlerText(e, values.newPosts)
    }

    return (
        <div className={obc.postsBlock}>
            <div>
                <AddNewPostFormRedux onSubmit={onSendPostHandler}/>
            </div>
            {posts}
        </div>
    );
})

export const AddNewPostForm: React.FC<InjectedFormProps<any>> = React.memo((props) => {
    return (
        <div>
                 <form onSubmit={props.handleSubmit} className={obc.formText}>
                    <Field component={TextArea} validate={[requered, validatorMaxSymbols]} name="newPosts"
                           placeholder="Enter your message" className={obc.textAreaInput}/>

                    <button className={obc.buttonInTextArea}>Send</button>
                </form>
        </div>

    )
})

type FormDataTypePosts = {
    newPosts: string
}
const AddNewPostFormRedux = reduxForm<FormDataTypePosts>({form: 'postsFormRedux'})(AddNewPostForm)
