import {ActionsType} from './redux-store';

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
  };

let initialState: dialogsPagePropsType = {
    messageData: [
        {
            id: 1,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 2,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 3,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 4,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 5,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 6,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
        {
            id: 7,
            message:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?',
        },
    ],
    dialogsData: [
        {
            id: 1,
            name: 'Maksim',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 2,
            name: 'Michael',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 3,
            name: 'Kirill',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 4,
            name: 'Mitya',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 5,
            name: 'Nikolai',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 6,
            name: 'Ivan',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 7,
            name: 'Mike',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 8,
            name: 'Nik',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
        {
            id: 9,
            name: 'Dan',
            urlAvatar:
                'http://disneyfiguren.weebly.com/uploads/2/4/8/7/24874787/8115176.jpg',
        },
    ],
}

const dialogsPageReducer = (state: dialogsPagePropsType = initialState, action: ActionsType): dialogsPagePropsType => {
    switch (action.type) {
        case 'dialogs/ADD_MESSSAGE':
            return {
                ...state,
                messageData: [...state.messageData, {
                    id: new Date().getTime(),
                    message: action.newMessageBody,
                }]
            }
        default:
            return state
    }
}

export const addMessageInDialogsAC = (newMessageBody: string) => {
    return {
        type: 'dialogs/ADD_MESSSAGE',
        newMessageBody
    } as const
}

export default dialogsPageReducer