import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settingz/Settings";
import {NavContainer} from "./components/Nav/NavContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
    //const state = useSelector(state => state)
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavContainer/>
                <div className="appWrapperContent">
                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile/>
                        )}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settingz"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
