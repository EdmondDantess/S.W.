import React from 'react';
import {BrowserRouter, Redirect, Route, withRouter} from 'react-router-dom';
import './App.css';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settingz/Settings';
import {NavContainer} from './components/Nav/NavContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from 'redux';
import {initializeTC} from './redux/app-reducer';
import {ReduxStateType} from './redux/redux-store';
import {Preloader} from './common/Preloader';

type mstd = {
    initializeTC: () => any
}
type mpstp = ReturnType<typeof mstp>
type AppPropsType = mstd & mpstp

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className="appWrapper">
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className="appWrapperContent">
                        <Route
                            path={'/dialogs'}
                            render={() => <DialogsContainer/>}
                        />
                        <Route
                            path={'/profile/:userId?'}
                            render={() => (
                                <ProfileContainer/>
                            )}
                        />
                        <Redirect from = '*' to = '/profile'/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settingz'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mstp = (state: ReduxStateType) => {
    return {initialized: state.app.initialized}

}
export default compose<React.ComponentType>(
    withRouter,
    connect(mstp, {initializeTC}))
(App)
