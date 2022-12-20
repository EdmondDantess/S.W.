import {GetItemsType, instance, APIResponseType} from './api';

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 25) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`/follow/${userId}`).then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`/follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}
