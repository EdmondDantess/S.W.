import React, {FC, useState} from 'react';
import {ProfileType} from '../../../redux/types/types';
import {useDispatch} from 'react-redux';
import {saveProfile} from '../../../redux/profile-reducer';

type ProfileDataFormPropsType = {
    profile: ProfileType | any
    updateProfileData?: (data: ProfileType, userId: string) => void
    setEditMode: () => void
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile, updateProfileData, setEditMode}) => {
const dispatch = useDispatch()


    const [profileData, setProfileData] = useState<ProfileDataType>({
        fullName: profile!.fullName,
        lookingForAJob: profile!.lookingForAJob,
        lookingForAJobDescription: profile!.lookingForAJobDescription as string,
        aboutMe: profile!.aboutMe as string,

    })


    const inputFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, fullName: e.currentTarget.value})
    }

    const inputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, lookingForAJobDescription: e.currentTarget.value})
    }

    const inputAboutMe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({...profileData, aboutMe: e.currentTarget.value})
    }

    const radioLookingForAJob = (value: boolean) => {
        setProfileData({...profileData, lookingForAJob: value})
    }

    const newData: any = {
        userId: profile!.userId,
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        ...profileData
    }
    // const newData = {...profileData}

    const onCLickHandler = () => {
    dispatch(saveProfile(newData))
        // updateProfileData(newData, String(profile!.userId))
        setEditMode()
    }

    return (
        <form style={{backgroundColor: '#4db2ef'}}>
            <div>
                <b>Full Name</b>: <input value={profileData.fullName} onChange={inputFullName}/>
            </div>
            <div>
                <b>Looking for a job</b>:
                <label>
                    <input type="radio" name={'radio'} value={'true'} checked={profileData.lookingForAJob}
                           onChange={() => radioLookingForAJob(true)}/> yes
                    <input type="radio" name={'radio'} value={'false'} checked={!profileData.lookingForAJob}
                           onChange={() => radioLookingForAJob(false)}/> no
                </label>
            </div>
            {profileData.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: <input value={profileData.lookingForAJobDescription}
                                                          onChange={inputDescription}/>
                </div>
            }
            <div>
                <b>About me</b>: <input value={profileData.aboutMe} onChange={inputAboutMe}/>
            </div>
            <div>

            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 10}}>
                <button onClick={onCLickHandler}>Save</button>
                  <button onClick={() => setEditMode()}>X</button>
            </div>
        </form>
    );
};

export type ProfileDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}