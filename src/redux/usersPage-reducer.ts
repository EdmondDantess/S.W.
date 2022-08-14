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
    users: [
        {
            id: 1,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: true,
            fullName: 'Maksim Laurouski',
            dateOfBirth: '15/09/1994',
            location: {city: 'Zhodino', country: 'Belarus'}
        },
        {
            id: 2,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: true,
            fullName: 'Jon Mc',
            dateOfBirth: '15/09/1980',
            location: {city: 'NY', country: 'USA'}
        },
        {
            id: 3,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: false,
            fullName: 'Maksim Laurouski',
            dateOfBirth: '15/09/1994',
            location: {city: 'Zhodino', country: 'Spain'}
        },
        {
            id: 4,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: true,
            fullName: 'Sasha Man',
            dateOfBirth: '15/09/1994',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 5,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: true,
            fullName: 'Viktor Bred',
            dateOfBirth: '15/09/1994',
            location: {city: 'Zhodino', country: 'Belarus'}
        },
        {
            id: 6,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: false,
            fullName: 'Maksim Laurouski',
            dateOfBirth: '15/09/1994',
            location: {city: 'Zhodino', country: 'Belarus'}
        },
        {
            id: 7,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: false,
            fullName: 'Denis Izmal',
            dateOfBirth: '15/09/1994',
            location: {city: 'Zhodino', country: 'Belarus'}
        },
        {
            id: 8,
            urlPhoto: 'https://i.etsystatic.com/27152142/r/il/e7721f/3007107857/il_fullxfull.3007107857_ay0i.jpg',
            followed: true,
            fullName: 'Fedya Fedorovich',
            dateOfBirth: '15/09/1994',
            location: {city: 'Moscow', country: 'Russia'}
        },
    ],
}

const usersPageReducer = (state: usersPagePropsType = initialState, action: ActionsType): usersPagePropsType => {
    switch (action.type) {
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => (el.id === action.userId ? ({...el, followed: !el.followed}) : el))
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

export const followUnFollowtAC = (userId: number) => {
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