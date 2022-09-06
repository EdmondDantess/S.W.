import React from 'react';
import {profileStateProps, setUserProfile, setUserProfileThunk} from '../../redux/profilePage-reducer';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ReduxStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type PathParamsType = {
    userId: string
}

type mstdpt = {
    setUserProfile: (profile: profileStateProps) => void
    setUserProfileThunk: (userId: string) => void
}

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>

export type OwnProfilePropsType = mapStateToPropsType & mstdpt
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: ReduxStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, setUserProfileThunk})(WithUrlDataContainerComponent)