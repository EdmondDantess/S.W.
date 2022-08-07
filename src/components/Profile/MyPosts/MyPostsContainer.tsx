import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostAC, changeTextValuePostAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().profilePage

            const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                store.dispatch(changeTextValuePostAC(e.currentTarget.value))
            };
            const sendPostHandler = () => {
                store.dispatch(addPostAC(state.postTextValue))
            };

            const keyPressHandlerText = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === "Enter") {
                    store.dispatch(addPostAC(state.postTextValue))
                }
            }

            return (
                <MyPosts state={state}
                         changeTextHandler={changeTextHandler}
                         sendPostHandler={sendPostHandler}
                         keyPressHandlerText={keyPressHandlerText}

                />
            )
        }
        }
    </StoreContext.Consumer>
};
