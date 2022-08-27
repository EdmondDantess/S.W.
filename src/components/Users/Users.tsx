import React from 'react';
import {UsersPropsType} from './UsersContainer';
import obc from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {usersPagePropsType} from '../../redux/usersPage-reducer';

export class Users extends React.Component<UsersPropsType, usersPagePropsType[]> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={obc.parentDivBodyUsers}>
                <div className={obc.pageSelectorDIV}>
                    {
                        pages.map(p => {
                            return (
                                <span key={p}
                                      className={this.props.currentPage === p ? obc.activePageSelector : ''}
                                      onClick={(e) => {
                                          this.onPageChanged(p)
                                      }}>{p}</span>
                            )
                        })
                    }
                </div>
                {
                    this.props.users.map((u: any) => {
                        return (
                            <div className={obc.divUserBody} key={u.id}>
                                <img src={u.photos.small !== null ? u.photos : userPhoto} alt="User dont added Avatar"/>
                                <div className={obc.divUserInfo}>
                                    <div className={obc.name}>{u.name}</div>
                                    <div className={obc.location}>{'u.location.city'}
                                        {'u.location.country'}</div>
                                    <div className={obc.date}>{u.status}</div>
                                </div>
                                <div className={obc.buttonInDiv}>
                                    {u.followed ?
                                        <button onClick={() => this.props.followUnFollowAC(u.id)}> ✘</button>
                                        :
                                        <button
                                            onClick={() => this.props.followUnFollowAC(u.id)}>Add as Friends</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
