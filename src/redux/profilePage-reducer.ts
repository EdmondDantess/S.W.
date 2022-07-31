import {ActionsType, profilePagePropsType} from "./state";


const profilePageReducer = (state: profilePagePropsType, action: ActionsType) => {
    switch (action.type) {
        case "ADD_POST":
            state.postsData.unshift({
                id: 309,
                message: action.postText,
                Likes: 0,
            });
            state.postTextValue = "";
            return state;
        case "TEXTAREA_VALUE_POST":
            state.postTextValue = action.text;
            return state;
        default:
            return state
    }
}

export const changeTextValuePostAC = (text: string) => {
    return {
        type: "TEXTAREA_VALUE_POST",
        text: text
    } as const
}
export const addPostAC = (postText: string) => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
}

export default profilePageReducer