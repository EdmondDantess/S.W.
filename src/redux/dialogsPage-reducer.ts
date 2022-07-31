import {ActionsType, dialogsPagePropsType} from "./state";


const dialogsPageReducer= (state: dialogsPagePropsType, action: ActionsType) => {
    switch (action.type) {
        case "TEXTAREA_VALUE_MESSAGE":
          state.messageValueTextarea = action.text;
            return state;
        case "ADD_MESSSAGE":
            state.messageData.push({
                id: new Date().getTime(),
                message: action.messageText,
            });
            state.messageValueTextarea = "";
            return state;
        default:
    return state
    }
}

export const addMessageInDialogsAC = (messageText: string) => {
    return {
        type: "ADD_MESSSAGE",
        messageText: messageText
    } as const
}
export const textAreaValueMessageAC = (text: string) => {
    return {
        type: "TEXTAREA_VALUE_MESSAGE",
        text: text
    } as const
}

export default dialogsPageReducer