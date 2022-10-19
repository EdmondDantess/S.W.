import React, {useState} from 'react';
import obc from './Post.module.css';
import Like from '../../../../assets/images/likepng.png'
import userPhoto from '../../../../assets/images/user.png'

type PostTypeProps = {
    message: string
    Likes: number
    avatars: string | null
}


export const Post = (props: PostTypeProps) => {

    let [like, setLike] = useState(props.Likes)

    return (
        <div className={obc.item}>
            <img
                src={props.avatars ? props.avatars : userPhoto}
                alt="download img fail"
                className={obc.avatarPost}/>
            {props.message}
            <div className={obc.footerPost}><img
                onClick={() => setLike(like + 1)}
                src={Like} alt="Likes"
                style={{height: '30px'}}/><span
            > {like}</span></div>
        </div>
    );
};
