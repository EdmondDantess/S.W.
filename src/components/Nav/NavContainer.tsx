import React from "react";
import {NavLink} from "react-router-dom";
import {FriendsNav} from "./FriendsNav/FriendsNav";
import obc from "./Nav.module.css";
import {Nav} from "./Nav";
import {Store} from "redux";
import {AppReducersReduxType} from "../../redux/redux-store";

type NavPagePropsType = {
    state: Store
}

export const NavContainer = (props: NavPagePropsType) => {
    let state = props.state.getState().sidebarPage
    return (
       <Nav state={state}/>
    )
};
