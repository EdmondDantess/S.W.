import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import { addMessageInDialogsAC,textAreaValueMessageAC} from "../../redux/dialogsPage-reducer";
import {ActionsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";

type DialogPropsTypePage = {
    state: Store;
};

export const DialogsContainer = (props: DialogPropsTypePage) => {

    let state = props.state.getState().dialogsPage

    const addMessage = () => {
        props.state.dispatch(addMessageInDialogsAC(state.messageValueTextarea))
    }
    const addTextinTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.state.dispatch(textAreaValueMessageAC(e.currentTarget.value))
    }
    const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            props.state.dispatch(addMessageInDialogsAC(state.messageValueTextarea))
        }
    }

    return (
            <Dialogs state={state}
                     addMessage = {addMessage}
                     addTextinTextArea={addTextinTextArea}
                     keyPressHandlerText={keyPressHandlerText}
            />
    );
};
