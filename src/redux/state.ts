import {v1} from "uuid";

type dialogsDataPropsType = {
    id: number;
    name: string;
    urlAvatar: string;
};
type messageDataPropsType = {
    id: number;
    message: string;
};
type postsDataPropsType = {
    id: number;
    message: string;
    Likes: number;
};
type profilePagePropsType = {
    postsData: postsDataPropsType[];
    postTextValue: string;
};
type dialogsPagePropsType = {
    dialogsData: dialogsDataPropsType[];
    messageData: messageDataPropsType[];
};
type friendsNavPropsType = {
    id: number;
    name: string;
    urlAvatar: string;
};
type friendsNavPagePropsType = {
    friendsNav: friendsNavPropsType[];
};
export type allStateProps = {
    profilePage: profilePagePropsType;
    dialogsPage: dialogsPagePropsType;
    sidebarPage: friendsNavPagePropsType;
};

export type addNewPostType = {
    type: "addPost"
    postText: string
}
export type valuePostTextAreaType = {
    type: "textareaValuePost"
    text: string
}

export type StoreType = {
    _state: allStateProps;
    _callbackRenderTree: () => void;
    subscribe: (observer: () => void) => void;
    getState: () => allStateProps;
    dispatch: (action: addNewPostType | valuePostTextAreaType) => void
};
export type StoreRootType = {
    store: StoreType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postTextValue: "",
            postsData: [
                {id: 1, message: "Hello World", Likes: 22},
                {id: 2, message: "Nice site", Likes: 2},
                {id: 3, message: "Hey hey", Likes: 12},
                {id: 4, message: "New World", Likes: 52},
                {id: 5, message: "Test message", Likes: 3},
            ],
        },
        dialogsPage: {
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
        },
        sidebarPage: {
            friendsNav: [
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
        },
    },
    _callbackRenderTree() {
        console.log("some event");
    },
    subscribe(observer) {
        this._callbackRenderTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "addPost") {
            action.postText = this._state.profilePage.postTextValue;
            this._state.profilePage.postsData.unshift({
                id: new Date().getTime(),
                message: action.postText,
                Likes: new Date().getTime(),
            });
            this._state.profilePage.postTextValue = "";
            this._callbackRenderTree();
        } else if (action.type === "textareaValuePost") {
            this._state.profilePage.postTextValue = action.text;
            this._callbackRenderTree();
        }
    }
};

export default store;