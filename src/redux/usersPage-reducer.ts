import {ActionsType} from './redux-store';

export type usersPropsDataType = {
    id: number;
    urlPhoto: string
    followed: boolean
    fullName: string;
    dateOfBirth: string
    location: { city: string, country: string }
};
export type usersPagePropsType = {
    users: usersPropsDataType[];
};

let initialState: usersPagePropsType = {
    users: [],
}

const usersPageReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el: any) => (el.id === action.userId ? ({...el, followed: !el.followed}) : el))
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followUnFollowAC = (userId: number) => {
    return {
        type: 'FOLLOW_UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users: usersPropsDataType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}

export default usersPageReducer