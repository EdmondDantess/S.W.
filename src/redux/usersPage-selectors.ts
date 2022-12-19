import {AppstateType} from './redux-store';
import {createSelector} from 'reselect';

const getUsersSelector = (state: AppstateType) => {
    return state.usersPage.users
}
export const getUsersS = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state: AppstateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppstateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppstateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppstateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppstateType) => {
    return state.usersPage.followingInProgress
}