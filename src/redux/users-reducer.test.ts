import usersReducer, {followUnFollow, UsersPageInitialStateType} from './users-reducer';
import {UserType} from './types/types';

let state: UsersPageInitialStateType

    beforeEach(()=>{
        state  = {
            users: [
                {id: 0, name: 'Mixas 0', followed: false, photos: {small: null, large: null}, status: 'Hello Tests 0'},
                {id: 1, name: 'Mixas 1', followed: false, photos: {small: null, large: null}, status: 'Hello Tests 1'},
                {id: 2, name: 'Mixas 2', followed: true, photos: {small: null, large: null}, status: 'Hello Tests 2'},
                {id: 3, name: 'Mixas 3', followed: true, photos: {small: null, large: null}, status: 'Hello Tests 3'},
            ] as UserType[],
            pageSize: 10,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
             filter: {
                term: '',
                 friend: null
             }
        }
    })

test('follow success', () => {
    const newState = usersReducer(state, followUnFollow(0))
    expect(newState.users[0].followed).toBe(true)
})
test('unfollow success', () => {
    const newState = usersReducer(state, followUnFollow(3))
    expect(newState.users[3].followed).toBe(false)
})
