import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let dialogsData = [
  { id: 1, name: "Maksim" },
  { id: 2, name: "Michael" },
  { id: 3, name: "Kirill" },
  { id: 4, name: "Mitya" },
  { id: 5, name: "Nikolai" },
  { id: 6, name: "Ivan" },
  { id: 7, name: "Mike" },
  { id: 8, name: "Nik" },
  { id: 9, name: "Dan" },
];
let messageData = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 4,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 6,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
  {
    id: 7,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem animi earum eveniet voluptatibus qui, reiciendis labore nobis illo dolor neque porro dolore soluta non quo molestias? Aliquid corrupti fugiat animi?",
  },
];
let postsData = [
  { id: 1, message: "Hello World", Likes: 22 },
  { id: 2, message: "Nice site", Likes: 2 },
  { id: 3, message: "Hey hey", Likes: 12 },
  { id: 4, message: "New World", Likes: 52 },
  { id: 5, message: "Test message", Likes: 3 },
];

ReactDOM.render(
  <App
    dialogsData={dialogsData}
    messageData={messageData}
    postsData={postsData}
  />,
  document.getElementById("root")
);
