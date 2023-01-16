import React, {useEffect} from 'react';
import obc from './../Dialogs.module.css';
import {getUsers, setFilter} from '../../../redux/users-reducer';
import userPhoto from '../../../assets/images/user.png'
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPage, getPageSize, getUsersFilter, getUsersS} from '../../../redux/users-selectors';


export const DialogItem = () => {
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsersS)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, {term: '', friend: true}))
        return () => {
            dispatch(setFilter({term: '', friend: null}))
        }
    }, [])

    return (
        <div className={obc.dialog}>
            {
                users.map(u => {
                    return (
                        <div style={{display: 'flex'}}
                             key={u.id}
                        >
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 style={{width: '40px'}}
                                 alt="avatar"/>
                            <div
                                title={u.name ? u.name : ''}
                                style={{
                                    color: 'whitesmoke', fontSize: '14px', overflowX: 'clip',
                                    borderBottom: '1px solid white', width: '100%',
                                    borderLeft: '1px solid white',
                                }}>{u.name}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};
