import React from 'react';
import {UsersPropsType} from './UsersContainer';
import obc from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {usersPagePropsType} from '../../redux/usersPage-reducer';

export class Users extends React.Component<UsersPropsType, usersPagePropsType[]> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={obc.parentDivBodyUsers}>
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
