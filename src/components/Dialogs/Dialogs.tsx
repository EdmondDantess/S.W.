import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {typeDialogProps} from "./DialogsContainer";
import {Redirect} from 'react-router-dom';

export const Dialogs = (props: typeDialogProps) => {
    let state = props.state
    let usersName = state.dialogsData.map((el) => {
        return (
            <div className={obc.dialogsItems} key={el.id}>
                <DialogItem
                    name={el.name}
                    id={el.id}
                    urlAvatar={el.urlAvatar}
                />
            </div>
        );
    });

    let messages = state.messageData.map((el) => {
        return (
            <div className={obc.messages} key={el.id}>
                <Message text={el.message}/>
            </div>
        );
    });

    const addMessageHandler = () => {
        props.addMessage(state.messageValueTextarea)
    }

    const addTextInTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        props.addTextInTextArea(e)
    }

    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        props.keyPressHandlerText(e,  state.messageValueTextarea)
    }

    return (
        <div className={obc.dialogs}>
            <div className={obc.parentDialogsItem}>{usersName}</div>
            <div className={obc.parentMessages}>{messages}</div>
            <textarea value={props.state.messageValueTextarea}
                      className={obc.textAreaInput}
                      onChange={addTextInTextAreaHandler}
                      onKeyPress={keyPressHandlerText}
                      placeholder={"Enter your message"}
            ></textarea>
            <button onClick={addMessageHandler}>Send</button>
        </div>
    );
};
