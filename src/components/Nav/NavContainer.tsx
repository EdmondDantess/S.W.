import React from "react";
import {Nav} from "./Nav";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {usersPropsDataType} from '../../redux/usersPage-reducer';


export type MapStateToPropsType = {
    state: usersPropsDataType[]
}

const mapStateToProps = (state: ReduxStateType):MapStateToPropsType  => {
    return {
        state: state.usersPage.users
    }
}
const mapDispatchToProps = ( )  => {

}

export const NavContainer = connect(mapStateToProps)(Nav)