import React from 'react';
import {
    getStatus,
    getUserProfile,
    ProfilePageInitialStateType,
    savePhoto,
    setUserProfile,
    updateStatus
} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppstateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {NullOrNumber} from '../../redux/types/types';

type PathParamsType = {
    userId: string
}

type Mstdpt = {
    setUserProfile: (profile: ProfilePageInitialStateType) => void
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type OwnProfilePropsType = MapStateToPropsType & Mstdpt
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        let userId: NullOrNumber = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfilePropsType, prevState: ProfilePropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                postsData={this.props.postsData}
            />
        )
    }
}

let mapStateToProps = (state: AppstateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        postsData: state.profilePage.postsData
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateStatus,
        getStatus,
        setUserProfile,
        savePhoto,
        getUserProfile
    }),
    withRouter,
    WithAuthRedirect)(ProfileContainer)