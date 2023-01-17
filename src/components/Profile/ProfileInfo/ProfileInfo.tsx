import React from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader/Preloader';
import {ProfileStatusHooks} from './ProfileStatusHooks';
import user from '../../../assets/images/user.png'
import {ProfilePageInitialStateType} from '../../../redux/profile-reducer';


export type ProfileInfoPropsType = {
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
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
                                updateStatus={props.updateStatus}
            isOwner={props.isOwner}/>
            {props.isOwner && <label><input type="file" onChange={onMainPhotoSelect} style={{width: '109px'}}/>
                <span>Upload your avatar</span> </label>}
            <div className={obc.description}>
                <img src={avatar ? avatar : user} alt="Users Avatar losted" style={{width: '300px'}}/>
                <div className={obc.descriptionTextInfo}>
                    <div><b><i>Fullname:</i></b> <b style={{color: 'blanchedalmond', fontSize: '20px'}}>{props.profile.fullName}</b></div>
                    <div><b><i>about me:</i></b> {props.profile.aboutMe ? props.profile.aboutMe : 'not yet added'}</div>
                    <div><b>Contacts:</b></div>
                    <div><b><i>github:</i></b> {props.profile.contacts.github ? props.profile.contacts.instagram : 'github.com'}</div>
                    <div><b><i>instagram:</i></b>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'instagram.com'}</div>
                    <div><b><i>facebook:</i></b> {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'facebook.com'}</div>
                    <div><b><i>vk:</i></b> {props.profile.contacts.vk ? props.profile.contacts.vk : 'vk.com'}</div>
                    <div><b><i>website:</i></b> {props.profile.contacts.website ? props.profile.contacts.website : 'no site'}</div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};
