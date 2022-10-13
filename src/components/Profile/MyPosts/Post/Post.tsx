import React from 'react';
import obc from './Post.module.css';
import like from '../../../../assets/images/likepng.png'
import userPhoto from '../../../../assets/images/user.png'

type PostTypeProps = {
    message: string
    Likes: number
    avatars: string | null
}


export const Post = (props: PostTypeProps) => {

    return (
        <div className={obc.item}>
            <img
                src={props.avatars ? props.avatars : userPhoto}
                alt="download img fail"
                className={obc.avatarPost}/>
            {props.message}
            <div className={obc.footerPost}><img src={like} alt="Likes"
                                                 style={{height: '30px'}}/><span
            > {props.Likes}</span></div>
        </div>
    );
};
