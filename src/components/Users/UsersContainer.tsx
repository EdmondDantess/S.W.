import React from 'react';
import {connect} from 'react-redux';
import {
    followThunk,
    followUnFollow, getUsersThunk,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleFollowingInProgress, toggleIsFetching, unFollowThunk, usersPropsDataType
} from '../../redux/usersPage-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';
import {usersAPI} from '../../api/api';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
    getUsersThunk: (curPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

class UsersContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsersThunk(p, this.props.pageSize)
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
                    followThunk={this.props.followThunk}
                    unFollowThunk={this.props.unFollowThunk}
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        followUnFollow,
        toggleFollowingInProgress,
        getUsersThunk, followThunk, unFollowThunk
    }),
    withAuthRedirect
)(UsersContainer)
