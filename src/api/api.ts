import axios from 'axios';
import {NullOrString, UserType} from '../redux/types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b8bf41ff-23c1-4902-b891-e8c308f276ca'
    }
})

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: string[]
    resultCode: RC
}

export type GetItemsType = {
    items: UserType[]
    totalCount: number
    erroe: NullOrString
}
