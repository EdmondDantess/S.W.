import React from 'react';
import {connect} from 'react-redux';
import {
    followUnFollow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleFollowingInProgress, toggleIsFetching, usersPropsDataType
} from '../../redux/usersPage-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';
import {usersAPI} from '../../api/api';

export type  UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapStateToPropsType = {
    users: usersPropsDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
   followingInProgress: []
}
export type mapDispatchToPropsType = {
    followUnFollow: (userId: number) => void
    setUsers: (users: usersPropsDataType[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCountUsers: number) => void
    toggleIsFetching: (status: boolean) => void
    toggleFollowingInProgress: (status: boolean, userId: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setUsersTotalCount(response.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setUsersTotalCount(response.totalCount)
        })
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
                />}

        </>
    }
}


let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    followUnFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer)

