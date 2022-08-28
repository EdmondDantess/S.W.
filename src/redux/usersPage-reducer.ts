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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
};

let initialState: usersPagePropsType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersPageReducer = (state: usersPagePropsType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el: any) => (el.id === action.userId ? ({...el, followed: !el.followed}) : el))
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case 'TOGGLE_ISFETCHING':
            return {
                ...state,
                isFetching: action.status
            }
        default:
            return state
    }
}

export const followUnFollow = (userId: number) => {
    return {
        type: 'FOLLOW_UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: usersPropsDataType[]) => {
    return {
        type: 'SET_USERS',
        users: users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        page
    } as const
}
export const setUsersTotalCount = (totalUsers: number) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        totalUsers
    } as const
}
export const toggleIsFetching = (status: boolean) => {
    return {
        type: 'TOGGLE_ISFETCHING',
        status
    } as const
}

export default usersPageReducer