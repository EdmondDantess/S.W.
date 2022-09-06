import React from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader';


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
    }
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }
    let avatar = props.profile.photos.large ? props.profile.photos.large : ''
    return (
        <div>
            <div className={obc.description}>
                <img src={avatar} alt="Users Avatar losted"/>
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
