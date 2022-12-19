import React from 'react';
import {Nav} from './Nav';
import {connect} from 'react-redux';
import {AppstateType} from '../../redux/redux-store';
import {UsersPropsDataType} from '../../redux/types/types';


export type MapStateToPropsType = {
    state: UsersPropsDataType[]
}

const mapStateToProps = (state: AppstateType):MapStateToPropsType  => {
    return {
        state: state.usersPage.users
    }
}
const mapDispatchToProps = ( )  => {

}

export const NavContainer = connect(mapStateToProps)(Nav)