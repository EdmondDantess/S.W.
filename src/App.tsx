import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import './App.css';
import {NavContainer} from './components/Nav/NavContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppstateType} from './redux/redux-store';
import {Preloader} from './common/Preloader/Preloader';
import {Users} from './components/Users/Users';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPageContainer = React.lazy(() => import('./pages/Chat/ChatPage'))

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
                        path={'/profile/:userId?'}
                        render={() => {
                            return <React.Suspense fallback={<>
                                <Preloader/>
                                its component is lazy</>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                    <Redirect from="*" to="/profile"/>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/chat'} render={() => {
                        return <React.Suspense fallback={<>
                            <Preloader/>
                            its component is lazy</>}>
                            <ChatPageContainer/>
                        </React.Suspense>
                    }}/>
                </div>
            </div>
        );
    }
}

const mstp = (state: AppstateType) => {
    return {initialized: state.app.initialized}
}
export default compose
< React.ComponentType > (
    withRouter, connect(mstp, {initializeApp}))
(App)
