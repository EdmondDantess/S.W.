import React from 'react';
import {
    getStatusThunk,
    profileStateProps,
    setUserProfileThunk, updateStatusThunk
} from '../../redux/profilePage-reducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: any
}

type mstdpt = {
    setUserProfile: (profile: profileStateProps) => void
    setUserProfileThunk: (userId: string) => void
    getStatusThunk: (userId: string) => void
    updateStatusThunk: (status: string) => void
}

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>

export type OwnProfilePropsType = mapStateToPropsType & mstdpt
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusThunk={this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateStatusThunk,
        getStatusThunk,
        setUserProfileThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)