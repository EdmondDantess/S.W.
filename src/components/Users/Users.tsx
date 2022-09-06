import React from 'react';
import obc from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {toggleFollowingInProgress, unFollowThunk, usersPropsDataType} from '../../redux/usersPage-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {usersAPI} from '../../api/api';

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


export const Users = (props: propsFromUsersContainer) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pageSelector = () => {
        let filteredPages = pages.filter(p => (p <= 50))
        return (
            <div className={obc.pageSelectorDIV}>
                {
                    filteredPages.map((p) => {
                        return (
                            <span key={p}
                                  className={props.currentPage === p ? obc.activePageSelector : ''}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p}</span>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={obc.parentDivBodyUsers}>
            {pageSelector()}
            {
                props.users.map((u: any) => {
                    return (
                        <div className={obc.divUserBody} key={u.id}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt="User dont added Avatar"/>
                            </NavLink>
                            <div className={obc.divUserInfo}>
                                <div className={obc.name}>{u.name}</div>
                                <div className={obc.location}>{'u.location.city'}
                                    {'u.location.country'}</div>
                                <div className={obc.date}>{u.status}</div>
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
            {pageSelector()}
        </div>
    )
}