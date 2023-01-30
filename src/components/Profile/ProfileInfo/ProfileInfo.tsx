import React, {useState} from 'react';
import obc from './ProfileInfo.module.css';
import {Preloader} from '../../../common/Preloader/Preloader';
import {ProfileStatusHooks} from './ProfileStatusHooks';
import user from '../../../assets/images/user.png'
import {ProfilePageInitialStateType} from '../../../redux/profile-reducer';
import {ProfileDataForm} from './ProfileEditForm';


export type ProfileInfoPropsType = {
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType & ProfilePageInitialStateType) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
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
                <img src={avatar ? avatar : user} alt="Users Avatar losted" style={{width: '300px', borderRadius: '10px'}}/>
                {props.isOwner && !editMode && <button onClick={onEditMode} style={{height: '40px', width: '80%', margin: 'auto'}}>Edit info</button>}
                {editMode
                    ? <ProfileDataForm setEditMode={offEditMode} profile={props.profile} />
                    : <div className={obc.descriptionTextInfo} style={{borderRadius: '10px'}}>
                        <div><b><i>Fullname:</i></b><b
                            style={{color: 'blanchedalmond', fontSize: '20px'}}>{props.profile.fullName}</b></div>
                        <div><b><i>about me:</i></b> {props.profile.aboutMe ? props.profile.aboutMe : 'no info'}
                        </div>
                        <div>
                            <b><i>Looking for a job:</i> </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
                        </div>
                        {props.profile.lookingForAJob &&
                            <div>
                                <b><i>My professional skils:</i> </b> {props.profile.lookingForAJobDescription}
                            </div>
                        }
                        <hr/>
                    </div>}
            </div>
        </div>
    )
        ;
};
