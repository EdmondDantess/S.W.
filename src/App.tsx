import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import './App.css';
import {NavContainer} from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppstateType} from './redux/redux-store';
import {Preloader} from './common/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type mstd = {
    initializeApp: () => void
}
type mpstp = ReturnType<typeof mstp>
type AppPropsType = mstd & mpstp

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
                <div className="appWrapper">
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className="appWrapperContent">
                        <Route
                            path={'/dialogs'}
                            render={() => {
                                return <React.Suspense fallback={<div><Preloader/>
                                    <p>its component is lazy</p>
                                </div>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}
                        />
                        <Route
                            path={'/profile/:userId?'}
                            render={() => {
                                return <React.Suspense fallback={<div><Preloader/>
                                    <p>its component is lazy</p>
                                </div>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }}
                        />
                        <Redirect from="*" to="/profile"/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}

const mstp = (state: AppstateType) => {
    return {initialized: state.app.initialized}
}
export default compose<React.ComponentType>(
    withRouter,
    connect(mstp, {initializeApp}))
(App)
