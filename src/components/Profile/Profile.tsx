import React, {useEffect} from 'react';
import obc from './Profile.module.css';
import {ProfileInfo, ProfileInfoPropsType} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageInitialStateType} from '../../redux/profile-reducer';

export const Profile = (props: ProfileInfoPropsType & ProfilePageInitialStateType) => {

    useEffect(()=>{
        return ()=>{

        }
    }, [])

    return (
        <div className={obc.INfo}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus} postsData={props.postsData}/>
            <MyPostsContainer/>
        </div>
    );
};
