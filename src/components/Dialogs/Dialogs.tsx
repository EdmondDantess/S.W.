import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import { addMessageInDialogsAC,textAreaValueMessageAC} from "../../redux/dialogsPage-reducer";
import {ActionsType} from "../../redux/state";

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
    dispatch: (action: ActionsType) => void
};

export const Dialogs = (props: DialogPropsTypePage) => {
    let usersName = props.state.dialogsData.map((el) => {
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


    const addMessage = () => {
        props.dispatch(addMessageInDialogsAC(props.state.messageValueTextarea))
    }
    const addTextinTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(textAreaValueMessageAC(e.currentTarget.value))
    }
    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.dispatch(addMessageInDialogsAC(props.state.messageValueTextarea))
        }
    }

    return (
        <div className={obc.dialogs}>
            <div className={obc.parentDialogsItem}>{usersName}</div>
            <div className={obc.parentMessages}>{messages}</div>
            <textarea value={props.state.messageValueTextarea}
                      className={obc.textAreaInput}
                      onChange={addTextinTextArea}
                      onKeyPress={keyPressHandlerText}
                      placeholder={"Enter your message"}
            ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    );
};
