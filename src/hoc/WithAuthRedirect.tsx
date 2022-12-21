import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppstateType} from '../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateProps = (state: AppstateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T} />
    }
    return connect(mapStateProps)(RedirectComponent)
}