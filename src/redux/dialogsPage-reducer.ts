import {ActionsType} from "./redux-store";

type dialogsDataPropsType = {
    id: number;
    name: string;
    urlAvatar: string;
};
type messageDataPropsType = {
    id: number;
    message: string;
};

export type dialogsPagePropsType = {
    dialogsData: dialogsDataPropsType[];
    messageData: messageDataPropsType[];
    messageValueTextarea: string
};

let initialState: dialogsPagePropsType = {
    messageData: [
        {
            id: 1,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 2,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 3,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 4,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 5,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 6,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
        {
            id: 7,
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
        },
    ],
    messageValueTextarea: "",
    dialogsData: [
        {
            id: 1,
            name: "Maksim",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 2,
            name: "Michael",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 3,
            name: "Kirill",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 4,
            name: "Mitya",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 5,
            name: "Nikolai",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 6,
            name: "Ivan",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 7,
            name: "Mike",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 8,
            name: "Nik",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
        {
            id: 9,
            name: "Dan",
            urlAvatar:
                "http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg",
        },
    ],
}

const dialogsPageReducer = (state = initialState, action: ActionsType): dialogsPagePropsType => {
     switch (action.type) {
        case "TEXTAREA_VALUE_MESSAGE":
            state.messageValueTextarea = action.text.trim();
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