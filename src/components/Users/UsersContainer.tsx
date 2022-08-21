import React, {Dispatch} from 'redux';
import {Users} from './Users';
import {connect} from 'react-redux';
import {followUnFollowAC, setUsersAC, usersPagePropsType, usersPropsDataType} from '../../redux/usersPage-reducer';
import {ReduxStateType} from '../../redux/redux-store';

export type  UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

export type mapStateToPropsType = {
    users: usersPropsDataType[]
}
export type mapDispatchToPropsType = {
    followUnFollowAC: (userId: number) => void
    setUsers: (users: usersPropsDataType[]) => void
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followUnFollowAC: (userId: number) => {
            dispatch(followUnFollowAC(userId))
        },
        setUsers: (users: usersPropsDataType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

