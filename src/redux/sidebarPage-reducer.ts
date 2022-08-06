import {ActionsType, } from "./redux-store";

type friendsNavPropsType = {
    id: number;
    name: string;
    urlAvatar: string;
};
export type friendsNavPagePropsType = {
    friendsNav: friendsNavPropsType[];
};

let initialState: friendsNavPagePropsType = {
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
    }

const sidebarPageReducer = (state= initialState, action: ActionsType): friendsNavPagePropsType => {

    return state
}

export default sidebarPageReducer