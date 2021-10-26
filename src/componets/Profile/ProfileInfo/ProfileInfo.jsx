import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import Profile from "../Profile";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/icons-user.png";

const ProfileInfo = ({profile, status, updateStatus,isOwner, savePhoto}) => {

    if(!profile){
        return <Preloader />
    }

        const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }

    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>{profile.aboutMe}</div>
                <div>{profile.lookingForAJobDescription}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;