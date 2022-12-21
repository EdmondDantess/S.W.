import React, {FC} from 'react';
import obc from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../../common/Paginator/Paginator';
import {UserType} from '../../redux/types/types';

type PropsFromUsersContainer = {
    onPageChanged: (p: number) => void
    followUnFollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    isFetching: boolean
    followingInProgress: number[]
    toggleFollowingInProgress: (status: boolean, userId: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

export const Users: React.FC<PropsFromUsersContainer> = ({
                                                             totalUsersCount,
                                                             pageSize,
                                                             currentPage,
                                                             onPageChanged,
                                                             ...props
                                                         }) => {
    return (
        <div className={obc.parentDivBodyUsers}>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {
                props.users.map((u: UserType) => {
                    let trimmedStatus = []
                    if (u.status) {
                        let copyStatus = u.status.split('')
                        for (let i = 0; i < 40; i++) {
                            trimmedStatus.push(copyStatus[i])
                        }
                    }
                    return (
                        <div className={obc.divUserBody} key={u.id}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt="User dont added Avatar"/>
                            </NavLink>
                            <div className={obc.divUserInfo}>
                                <NavLink to={'/profile/' + u.id}>
                                    <div className={obc.name}>{u.name}
                                        <hr/>
                                    </div>
                                </NavLink>
                                <div className={obc.date}>
                                    <b>Status: </b>{u.status ? trimmedStatus.join('') : `the user has not yet set the status`}
                                    <hr/>
                                </div>
                            </div>
                            <div className={obc.buttonInDiv}>
                                {u.followed ?
                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unFollowThunk(u.id)
                                        }}>✘</button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.followThunk(u.id)
                                        }}>Add as Friends</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}