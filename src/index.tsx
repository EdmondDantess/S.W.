import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Store} from "redux";

const renderTree = ( ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById("root")
    );
}

renderTree()

store.subscribe(()=>renderTree())
