import React from 'react';
import {UsersPropsType} from './UsersContainer';
import obc from './Users.module.css'

export const Users = (props: UsersPropsType) => {
    return (

        <div className={obc.parentDivBody}>
            {
                props.users.map(u => {
                    return (
                        <div className={obc.divUserBody} key={u.id}>
                            <img src={u.urlPhoto} alt='User dont added Avatar'/>
                            <div className={obc.divUserInfo}>
                            <div className={obc.name}>{u.fullName}</div>
                            <div className={obc.location}>{u.location.city}
                                {u.location.country}</div>
                            <div className={obc.date}>{u.dateOfBirth}</div>
                            </div>
                            <div className={obc.buttonInDiv}>
                                {u.followed ?
                                    <button onClick={()=>props.followUnFollowtAC(u.id)}> ✘</button>
                                :
                                <button onClick={()=>props.followUnFollowtAC(u.id)}>{'Add as Friend'}</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

