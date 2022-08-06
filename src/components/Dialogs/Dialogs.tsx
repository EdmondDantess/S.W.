import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import {Message} from "./Message/Message";

type dialogsDataPropsType = {
    id: number;
    name: string;
    urlAvatar: string;
};
type messageDataPropsType = {
    id: number;
    message: string;
};

type stateDialogsPropsType = {
    dialogsData: dialogsDataPropsType[];
    messageValueTextarea: string
    messageData: messageDataPropsType[];
};

type DialogPropsTypePage = {
    state: stateDialogsPropsType;
    keyPressHandlerText: (e: KeyboardEvent<HTMLTextAreaElement>) => any
    addMessage: () => any
    addTextinTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => any
};

export const Dialogs = (props: DialogPropsTypePage) => {
    let state = props.state.dialogsData
    let usersName = state.map((el) => {
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

    let messages = props.state.messageData.map((el) => {
        return (
            <div className={obc.messages} key={el.id}>
                <Message text={el.message}/>
            </div>
        );
    });

    const addMessageHandler = () => {
        props.addMessage()
    }

    const addTextinTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        props.addTextinTextArea(e)
    }

    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        props.keyPressHandlerText(e)
    }

    return (
        <div className={obc.dialogs}>
            <div className={obc.parentDialogsItem}>{usersName}</div>
            <div className={obc.parentMessages}>{messages}</div>
            <textarea value={props.state.messageValueTextarea}
                      className={obc.textAreaInput}
                      onChange={addTextinTextAreaHandler}
                      onKeyPress={keyPressHandlerText}
                      placeholder={"Enter your message"}
            ></textarea>
            <button onClick={addMessageHandler}>Send</button>
        </div>
    );
};
