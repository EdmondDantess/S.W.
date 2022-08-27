import React, {Dispatch} from 'redux';
import {Users} from './Users';
import {connect} from 'react-redux';
import {
    followUnFollowAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    usersPropsDataType
} from '../../redux/usersPage-reducer';
import {ReduxStateType} from '../../redux/redux-store';

export type  UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapStateToPropsType = {
    users: usersPropsDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type mapDispatchToPropsType = {
    followUnFollowAC: (userId: number) => void
    setUsers: (users: usersPropsDataType[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCountUsers: number) => void
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUnFollowAC: (userId: number) => {
            dispatch(followUnFollowAC(userId))
        },
        setUsers: (users: usersPropsDataType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setUsersTotalCount: (totalCountUsers: number) => {
            dispatch(setUsersTotalCountAC(totalCountUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

