import {ActionsType} from "./redux-store";

type postsDataPropsType = {
    id: number;
    message: string;
    Likes: number;
};
export type profilePagePropsType = {
    postsData: postsDataPropsType[];
    postTextValue: string;
};
let initialState: profilePagePropsType = {
    postTextValue: "",
    postsData: [
        {id: 1, message: "Hello World", Likes: 22},
        {id: 2, message: "Nice site", Likes: 2},
        {id: 3, message: "Hey hey", Likes: 12},
        {id: 4, message: "New World", Likes: 52},
        {id: 5, message: "Test message", Likes: 3},
    ],
}

const profilePageReducer = (state=initialState, action: ActionsType): profilePagePropsType => {
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