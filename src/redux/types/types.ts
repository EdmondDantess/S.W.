export type NullOrString = null | string

export type NullOrNumber = null | number

export type ProfileType = {
    'aboutMe': NullOrString,
    'contacts': {
        'facebook': NullOrString,
        'website': NullOrString,
        'vk': NullOrString,
        'twitter': NullOrString,
        'instagram': NullOrString,
        'youtube': NullOrString,
        'github': NullOrString,
        'mainLink': NullOrString
    },
    'lookingForAJob': boolean,
    'lookingForAJobDescription': NullOrString,
    'fullName': string,
    'userId': NullOrNumber,
    'photos': {
        'small': NullOrString,
        'large': NullOrString
    }
}

export type UserType = {
    id: number;
    urlPhoto: string
    followed: boolean
    fullName: string;
    dateOfBirth: string
    location: { city: string, country: string }
};