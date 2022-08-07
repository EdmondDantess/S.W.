import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const renderTree = ( ) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById("root"));
}

renderTree()

store.subscribe(()=>renderTree())
