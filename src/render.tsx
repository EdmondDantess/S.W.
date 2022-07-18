import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPosts, allStateProps, postsTextValueArea } from "./redux/state";

export const renderTree=(state: allStateProps)=>{
      ReactDOM.render(
      <App state={state} addPosts={addPosts} postsTextValueArea={postsTextValueArea}/>,
      document.getElementById("root")
    );
  }