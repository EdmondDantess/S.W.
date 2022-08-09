import React from "react";
import {Nav} from "./Nav";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {friendsNavPagePropsType} from "../../redux/sidebarPage-reducer";


export type MapStateToPropsType = {
    state: friendsNavPagePropsType
}

const mapStateToProps = (state: ReduxStateType):MapStateToPropsType  => {
    return {
        state: state.sidebarPage
    }
}
const mapDispatchToProps = ( )  => {

}

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)