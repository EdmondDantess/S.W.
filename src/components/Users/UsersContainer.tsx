import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followUnFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
    getUsers
} from '../../redux/usersPage-reducer';
import {AppstateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersS
} from '../../redux/usersPage-selectors';
import {UsersPropsDataType} from '../../redux/types/types';

export type  UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export type MapStateToPropsType = {
    users: UsersPropsDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type MapDispatchToPropsType = {
    followUnFollow: (userId: number) => void
    setUsers: (users: UsersPropsDataType[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCountUsers: number) => void
    toggleIsFetching: (status: boolean) => void
    toggleFollowingInProgress: (status: boolean, userId: number) => void
    getUsers: (curPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followUnFollow={this.props.followUnFollow}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    followThunk={this.props.follow}
                    unFollowThunk={this.props.unFollow}
                />}
        </>
    }
}

let mapStateToProps = (state: AppstateType): MapStateToPropsType => {
    return {
        users: getUsersS(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        followUnFollow,
        toggleFollowingInProgress,
        getUsers,
        follow,
        unFollow
    }))(UsersContainer)
