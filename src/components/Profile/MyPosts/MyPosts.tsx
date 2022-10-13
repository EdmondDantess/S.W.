import React, {KeyboardEvent} from 'react';
import obc from './MyPosts.module.css';
import {Post} from './Post/Post';
import {typeMyPostsProps} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requered} from '../../../utils/validators/validators';
import {TextArea} from '../../../common/FormsControls';


const validatorMaxSymbols = maxLengthCreator(50)

export const MyPosts = React.memo((props: typeMyPostsProps) => {
    let posts = props.state.postsData.map((el) => {
        return (
            <div className={obc.posts} key={el.id}>
                <Post message={el.message} Likes={el.Likes}/>
            </div>
        );
    });

    const onSendPostHandler = (values: FormDataTypePosts) => {
        props.sendPostHandler(values.newPosts)
    }
    const onKeyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>, values: FormDataTypePosts) => {
        props.keyPressHandlerText(e, values.newPosts)
    }

    return (
        <div className={obc.postsBlock}>
            <h3>My Posts</h3>
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
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPosts'} component={TextArea} validate={[requered, validatorMaxSymbols]}
                       placeholder={'Post message'}/>
                {/*<textarea className={obc.textareaPosts}*/}
                {/*          value={props.state.postTextValue}*/}
                {/*          onChange={onChangeTextHandler}*/}
                {/*          onKeyPress={onKeyPressHandlerText}>*/}
                {/*</textarea>*/}
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>

    )
})

type FormDataTypePosts = {
    newPosts: string
}
const AddNewPostFormRedux = reduxForm<FormDataTypePosts>({form: 'postsFormRedux'})(AddNewPostForm)
