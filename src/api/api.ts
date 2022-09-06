import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b8bf41ff-23c1-4902-b891-e8c308f276ca'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 25) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`/follow/${userId}` )
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}

