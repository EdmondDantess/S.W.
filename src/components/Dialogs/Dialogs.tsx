import React, {useEffect, useRef} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import obc from './Dialogs.module.css';
import {Message} from './Message/Message';
import {TypeDialogProps} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {TextArea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator, requered} from '../../utils/validators/validators';

const validatorMaxSymbols = maxLengthCreator(100)

export const Dialogs = (props: TypeDialogProps) => {
    let state = props.state


    let myRef = useRef<null | HTMLDivElement>(null)

    let messages = state.messageData.map((el) => {
        return (
            <div className={obc.messages} key={el.id} id={`#${el.id}-messages`} ref={myRef}>
                <Message text={el.message}/>
            </div>
        );
    });

    useEffect(() => {
        myRef.current && myRef.current.scrollIntoView()
    }, [props.state.messageData])

    const onSubmit = (formData: FormDataTypeDialog) => {
        props.addMessage(formData.newMessageBody)
        formData.newMessageBody = ''
    }

    return (
        <div className={obc.dialogs}>
            <div className={obc.parentDialogsItem}>
                <DialogItem/>
            </div>
            <div className={obc.parentMessages}>{messages}</div>
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

export const AddMessageForm: React.FC<InjectedFormProps<FormDataTypeDialog>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={obc.formText}>
                <Field component={TextArea} validate={[requered, validatorMaxSymbols]} name="newMessageBody"
                       placeholder="Enter your message" className={obc.textAreaInput}/>
                <button className={obc.buttonInTextArea}>Send</button>
            </form>
        </div>

    )
}
type FormDataTypeDialog = {
    newMessageBody: string
}
const AddMessageFormRedux = reduxForm<FormDataTypeDialog>({form: 'dialogAddMessageForm'})(AddMessageForm)
