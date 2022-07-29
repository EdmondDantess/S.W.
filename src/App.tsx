import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settingz/Settings";
import {StoreRootType} from "./redux/state";

const App = (props: StoreRootType) => {
    let state = props.store.getState();
       return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Nav state={state.sidebarPage}/>
                <div className="appWrapperContent">
                    <Route
                        path={"/dialogs"}
                        render={() => <Dialogs state={state.dialogsPage}/>}
                    />
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                state={state.profilePage}
                                dispatch={props.store.dispatch.bind(props.store)}
                            />
                        )}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settingz"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
