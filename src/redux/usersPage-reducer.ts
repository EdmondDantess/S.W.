import {ActionsType, ThunkType} from './redux-store';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

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
    followingInProgress: []
};

let initialState: usersPagePropsType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersPageReducer = (state: usersPagePropsType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'users/FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el: any) => (el.id === action.userId ? ({...el, followed: !el.followed}) : el))
            }
        case 'users/SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'users/SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case 'users/TOGGLE_ISFETCHING':
            return {
                ...state,
                isFetching: action.status
            }
        case 'users/TTOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.status ?
                    [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state
    }
}

export const followUnFollow = (userId: number) => {
    return {
        type: 'users/FOLLOW_UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: usersPropsDataType[]) => {
    return {
        type: 'users/SET_USERS',
        users: users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: 'users/SET_CURRENT_PAGE',
        page
    } as const
}
export const setUsersTotalCount = (totalUsers: number) => {
    return {
        type: 'users/SET_USERS_TOTAL_COUNT',
        totalUsers
    } as const
}
export const toggleIsFetching = (status: boolean) => {
    return {
        type: 'users/TOGGLE_ISFETCHING',
        status
    } as const
}
export const toggleFollowingInProgress = (status: boolean, userId: number) => {
    return {
        type: 'users/TTOGGLE_FOLLOWING_PROGRESS',
        status,
        userId
    } as const
}
export const getUsersThunk = (currentPage: number, pageSize: number): ThunkType => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setUsersTotalCount(response.totalCount))
}

export const followThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let res = await usersAPI.follow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followUnFollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))

}

export const unFollowThunk = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let res = await usersAPI.unFollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followUnFollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))

}

export default usersPageReducer