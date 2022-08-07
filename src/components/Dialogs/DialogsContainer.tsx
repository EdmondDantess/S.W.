import React, {ChangeEvent, KeyboardEvent} from "react";
import {addMessageInDialogsAC, textAreaValueMessageAC} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";
import {StoreType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState().dialogsPage

            const addMessage = () => {
                store.dispatch(addMessageInDialogsAC(state.messageValueTextarea))
            }
            const addTextInTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
                store.dispatch(textAreaValueMessageAC(e.currentTarget.value))
            }
            const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === "Enter") {
                    store.dispatch(addMessageInDialogsAC(state.messageValueTextarea))
                }
            }

            return <Dialogs state={state}
                            addMessage={addMessage}
                            addTextInTextArea={addTextInTextArea}
                            keyPressHandlerText={keyPressHandlerText}
            />

        }}
    </StoreContext.Consumer>
};
