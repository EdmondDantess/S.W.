import React from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader';
import {ProfilePropsType} from '../ProfileContainer';
import {profileStateProps} from '../../../redux/profilePage-reducer';


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
    if (!props.profile) {
        return <Preloader/>
    }
let avatar = props.profile.photos.large ? props.profile.photos.large: ''
    console.log(props.profile.userId)
    return (
        <div>
            <div className={obc.imgHead}>
                <img
                    src="https://ic.pics.livejournal.com/dergachev_va/58474394/4085016/4085016_original.png"
                    alt="Fail"
                />
            </div>
            <div className={obc.description}>
                <img src={avatar} alt="Users Avatar losted"/>
                ava i description
            </div>
        </div>
    );
};
