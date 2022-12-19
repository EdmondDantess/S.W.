import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';


let initialState = {
    profile: {
        'aboutMe': 'I am divine' as NullOrString,
        'contacts': {
            'facebook': null as NullOrString,
            'website': null as NullOrString,
            'vk': null as NullOrString,
            'twitter': null as NullOrString,
            'instagram': null as NullOrString,
            'youtube': null as NullOrString,
            'github': null as NullOrString,
            'mainLink': null as NullOrString
        },
        'lookingForAJob': true,
        'lookingForAJobDescription': 'I am profi!!!!REAL' as NullOrString,
        'fullName': '' as NullOrString,
        'userId': 24667 as NullOrNumber,
        photos: {
            small: null as NullOrString,
            large: null as NullOrString,
        }
    },

    postsData: [
        {
            id: 0,
            message: 'Что это за приложение? Это социальная сеть, созданная в рамках курса ReactJS - путь самурая. Переведённая с JS на TS',
            Likes: 33
        },
        {id: 1, message: 'Здесь должны были быть реальные посты реальных людей', Likes: 22},
        {id: 2, message: 'Но апишка на посты не реализована...', Likes: 2},
        {id: 3, message: 'Нет апишки - нет постов, нет постов - заглушка', Likes: 12},
        {id: 4, message: 'Hello World', Likes: 52},
        {id: 5, message: 'Test message', Likes: 3},
    ],
    status: '',
}

const profilePageReducer = (state: ProfilePagePropsType = initialState, action: ActionsType): ProfilePagePropsType => {
    switch (action.type) {
        case 'ADD_POST':
            if (action.postText.trim() !== '') {
                return {
                    ...state, postsData: [{
                        id: new Date().getTime(),
                        message: action.postText,
                        Likes: 0,
                    }, ...state.postsData]
                }
            } else return state
        case 'SET_USER_PROFILE':
            return {...state, profile: {...action.profile}};
        case 'SET_STATUS':
            return {...state, status: action.status};
        case 'SET_PHOTO':
            return {
                ...state, profile: {
                    ...state.profile, photos:
                    action.file,
                }
            };
        default:
            return state
    }
}


export const addPostAC = (postText: string) => {
    return {
        type: 'ADD_POST',
        postText: postText
    } as const
}
export const setUserProfile = (profile: ProfileStateProps) => {
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
export const setPhoto = (file: any) => {
    return {
        type: 'SET_PHOTO',
        file
    } as const
}
export const setUserProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(response => {
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

export const savePhoto = (file: any) => {
    return (dispatch: Dispatch) => {
        profileAPI.savePhoto(file).then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setPhoto(response.data.data.photos))
            }
        })
    }
}

export type ProfileStateProps = {
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
export type ProfilePagePropsType = typeof  initialState
type NullOrString = null | string
type NullOrNumber = null | number


export default profilePageReducer