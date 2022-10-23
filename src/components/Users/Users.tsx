import React from 'react';
import obc from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {usersPropsDataType} from '../../redux/usersPage-reducer';
import {NavLink} from 'react-router-dom';
import {Paginator} from './Paginator';

type propsFromUsersContainer = {
    onPageChanged: (p: number) => void
    followUnFollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: usersPropsDataType[]
    isFetching: boolean
    followingInProgress: []
    toggleFollowingInProgress: (status: boolean, userId: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

export const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: propsFromUsersContainer) => {
    const pages = <Paginator totalUsersCount={totalUsersCount}
                             pageSize={pageSize}
                             currentPage={currentPage}
                             onPageChanged={onPageChanged}/>

    return (
        <div className={obc.parentDivBodyUsers}>
            {pages}
            {
                props.users.map((u: any) => {
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
                                    :
                                    <button
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