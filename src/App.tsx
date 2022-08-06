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
import {Store} from "redux";
import {ActionsType, AppReducersReduxType} from "./redux/redux-store";
import {NavContainer} from "./components/Nav/NavContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppType = {
    store: Store
}

const App = (props: AppType) => {
    //const state = useSelector(state => state)
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavContainer state={props.store}/>
                <div className="appWrapperContent">
                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer
                            state={props.store}
                        />}
                    />
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                state={props.store}
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
