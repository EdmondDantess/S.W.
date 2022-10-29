import React from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader';
import {ProfileStatusHooks} from './ProfileStatusHooks';
import user from '../../../assets/images/user.png'


export type ProfileInfoPropsType = {
    profile: {
        'aboutMe': null | string,
        'contacts': {
            'facebook': null | string,
            'website': null | string,
            'vk': null | string,
            'twitter': null | string,
            'instagram': null | string,
            'youtube': null | string,
            'github': null | string,
            'mainLink': null | string
        },
        'lookingForAJob': boolean,
        'lookingForAJobDescription': null | string,
        'fullName': string,
        'userId': number | null,
        'photos': {
            'small': null | string,
            'large': null | string
        }
    },
    status: string,
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }

    let avatar = props.profile.photos.large ? props.profile.photos.large : user
    return (
        <div className={obc.parentDivProfileInfo}>
            <ProfileStatusHooks status={props.status ? props.status : 'No status'}
                                updateStatusThunk={props.updateStatusThunk}/>
            <div className={obc.description}>
                <img src={avatar} alt="Users Avatar losted" style={{width: '300px'}}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelect}/>}
                <div className={obc.descriptionTextInfo}>

                    <div>Fullname: <b>{props.profile.fullName}</b></div>
                    <div>about me: {props.profile.aboutMe}</div>
                    <b>contacts:</b>
                    <div> facebook: {props.profile.contacts.facebook}</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div> instagram:{props.profile.contacts.instagram}</div>
                    <div> twitter: {props.profile.contacts.twitter}</div>
                    {props.profile.contacts.vk ? <div> vk: {props.profile.contacts.vk}</div> : null}
                    <div> website: {props.profile.contacts.website}</div>
                    <div> youtube: {props.profile.contacts.youtube}</div>
                </div>
            </div>
        </div>
    );
};
