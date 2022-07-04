import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settingz/Settings";

type dialogsDataPropsType = {
  id: number;
  name: string;
};

type messageDataPropsType = {
  id: number;
  message: string;
};

type postsDataPropsType = {
  id: number;
  message: string;
  Likes: number;
};

type propsAppType = {
  dialogsData: dialogsDataPropsType[];
  messageData: messageDataPropsType[];
  postsData: postsDataPropsType[];
};

const App = (props: propsAppType) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Nav />
        <div className="appWrapperContent">
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                messageData={props.messageData}
                dialogsData={props.dialogsData}
              />
            )}
          />
          <Route
            path={"/profile"}
            render={() => <Profile postsData={props.postsData} />}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settingz"} render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
