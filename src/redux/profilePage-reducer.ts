import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type profileStateProps = {
    'aboutMe': null | string,
    'contacts': {
        'facebook': null | string,
        'website': null | string,
        'vk': null | string,
        'twitter': null | string,
        'instagram': null | string,
        'youtube': null | string,
        'github': null | string,
        'mainLink': null | string
    },
    'lookingForAJob': boolean,
    'lookingForAJobDescription': null | string,
    'fullName': string,
    'userId': number | null,
    'photos': {
        'small': null | string,
        'large': null | string
    }
}

type postsDataPropsType = {
    id: number;
    message: string;
    Likes: number;
};
export type profilePagePropsType = {
    profile: profileStateProps
    postsData: postsDataPropsType[];
    postTextValue: string;
    status: string
};

let initialState: profilePagePropsType = {
    profile: {
        'aboutMe': 'I am divine',
        'contacts': {
            'facebook': '',
            'website': null,
            'vk': null,
            'twitter': null,
            'instagram': null,
            'youtube': null,
            'github': null,
            'mainLink': null
        },
        'lookingForAJob': true,
        'lookingForAJobDescription': 'I am profi!!!!REAL',
        'fullName': 'nekotochka',
        'userId': 24667,
        photos: {
            'small': null,
            large: null,
        }
    },
    postTextValue: '',
    postsData: [
        {id: 1, message: 'Hello World', Likes: 22},
        {id: 2, message: 'Nice site', Likes: 2},
        {id: 3, message: 'Hey hey', Likes: 12},
        {id: 4, message: 'New World', Likes: 52},
        {id: 5, message: 'Test message', Likes: 3},
    ],
    status: '',
}

const profilePageReducer = (state: profilePagePropsType = initialState, action: ActionsType): profilePagePropsType => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state, postsData: [{
                    id: new Date().getTime(),
                    message: action.postText.trim(),
                    Likes: 0,
                }, ...state.postsData], postTextValue: ''
            }
        case 'TEXTAREA_VALUE_POST':
            return {...state, postTextValue: action.text};
        case 'SET_USER_PROFILE':
            return {...state, profile: {...action.profile}};
        case 'SET_STATUS':
            return {...state, status: action.status};
        default:
            return state
    }
}

export const changeTextValuePostAC = (text: string) => {
    return {
        type: 'TEXTAREA_VALUE_POST',
        text: text
    } as const
}
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD_POST',
        postText: postText
    } as const
}
export const setUserProfile = (profile: profileStateProps) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) => {
        return {
        type: 'SET_STATUS',
        status
    } as const
}
export const setUserProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatusThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusThunk = (status: string) => {

    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
          if (response.data.resultCode === 0) {
               dispatch(setStatus(status))
             }
        })
    }
}

export default profilePageReducer