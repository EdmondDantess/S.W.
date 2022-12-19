import React from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader';
import {ProfileStatusHooks} from './ProfileStatusHooks';
import user from '../../../assets/images/user.png'
import {ProfilePageInitialStateType} from '../../../redux/profilePage-reducer';


export type ProfileInfoPropsType = {
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

export const ProfileInfo = (props: ProfileInfoPropsType & ProfilePageInitialStateType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }
     let avatar = props.profile.photos.large
    return (
        <div className={obc.parentDivProfileInfo}>
            <ProfileStatusHooks status={props.status ? props.status : 'No status'}
                                updateStatus={props.updateStatus}/>
            {props.isOwner && <><input type="file" onChange={onMainPhotoSelect} style={{width: '120px'}}/>
                <span>Upload your avatar</span>   </>}
            <div className={obc.description}>
                <img src={avatar ? avatar : user} alt="Users Avatar losted" style={{width: '300px'}}/>
                <div className={obc.descriptionTextInfo}>
                    <div>Fullname: <b>{props.profile.fullName}</b></div>
                    <div>about me: {props.profile.aboutMe ? props.profile.aboutMe : 'not yet added'}</div>
                    <div><b>Contacts:</b></div>
                    <div>facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'not yet added'}</div>
                    <div>github: {props.profile.contacts.github ? props.profile.contacts.instagram : 'not yet added'}</div>
                    <div>instagram:{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'not yet added'}</div>
                    <div>vk: {props.profile.contacts.vk ? props.profile.contacts.vk : 'not yet added'}</div>
                    <div>website: {props.profile.contacts.website ? props.profile.contacts.website : 'not yet added'}</div>
                    <div>youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'not yet added'}</div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};
