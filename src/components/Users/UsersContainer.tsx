import React from 'react';
import {connect} from 'react-redux';
import {
    followUnFollow,
    setCurrentPage,
    setUsers, setUsersTotalCount, toggleIsFetching, usersPropsDataType
} from '../../redux/usersPage-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';

export type  UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapStateToPropsType = {
    users: usersPropsDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    followUnFollow: (userId: number) => void
    setUsers: (users: usersPropsDataType[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCountUsers: number) => void
    toggleIsFetching: (status: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         followUnFollow: (userId: number) => {
//             dispatch(followUnFollowAC(userId))
//         },
//         setUsers: (users: usersPropsDataType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setUsersTotalCount: (totalCountUsers: number) => {
//             dispatch(setUsersTotalCountAC(totalCountUsers))
//         },
//         toggleIsFetching: (status: boolean) => {
//             dispatch(toggleIsFetchingAC(status))
//         }
//     }
// }

export default connect(mapStateToProps, {
    followUnFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching
})(UsersContainer)

