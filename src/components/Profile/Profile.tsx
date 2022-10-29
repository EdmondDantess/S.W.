import React from 'react';
import obc from './Profile.module.css';
import {ProfileInfo, ProfileInfoPropsType} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export const Profile = (props: ProfileInfoPropsType) => {
    return (
        <div className={obc.INfo}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer/>
        </div>
    );
};
