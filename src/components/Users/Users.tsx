import React, {useEffect} from 'react';
import obc from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../../common/Paginator/Paginator';
import {UserType} from '../../redux/types/types';
import {UsersSearchForm} from './UsersSearchForm';
import {FilterType, follow, getUsers, unFollow} from '../../redux/users-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersS
} from '../../redux/users-selectors';
import {Preloader} from '../../common/Preloader/Preloader';


export const Users = React.memo(() => {
    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersS)
    const isFetching = useSelector(getIsFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, {term: '', friend: null}))
        return () => {
            dispatch(getUsers(currentPage, pageSize, {term: '', friend: null}))
        }
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const unfollow = (userId: number) => {
        dispatch(unFollow(userId))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }

    return <>{isFetching
        ? <Preloader/>
        : <div className={obc.parentDivBodyUsers}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.length === 0
                ? <div style={{fontSize: '20px', color: 'darkred', textAlign: 'center', backgroundColor: 'grey'}}>Users not found</div>
                : users.map((u: UserType) => {
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
                                        <b>Status: </b>{u.status
                                        ?
                                        u.status.length > 25
                                            ? <span title={u.status}>{u.status.slice(0, 25) + '...'}</span>
                                            : u.status
                                        : `no status`}
                                        <hr/>
                                    </div>
                                </div>
                                <div className={obc.buttonInDiv}>
                                    {u.followed ?
                                        <button
                                            disabled={followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                unfollow(u.id)
                                            }}>✘</button>
                                        : <button
                                            disabled={followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                followUser(u.id)
                                            }
                                            }>Add as Friend</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    }</>
})
