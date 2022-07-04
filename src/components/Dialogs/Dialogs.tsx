import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import { Message } from "./Message/Message";

type dialogsDataPropsType = {
  id: number;
  name: string;
};
type messageDataPropsType = {
  id: number;
  message: string;
};

type DialogPropsType = {
  dialogsData: dialogsDataPropsType[];
  messageData: messageDataPropsType[];
};

export const Dialogs = (props: DialogPropsType) => {
  
  let usersName = props.dialogsData.map((el) => {
    return (
      <div className={obc.dialogsItems} key={el.id}>
        <DialogItem name={el.name} id={el.id} />
      </div>
    );
  });

  let messages = props.messageData.map((el) => {
    return (
      <div className={obc.messages} key={el.id}>
        <Message text={el.message} />
      </div>
    );
  });

  return (
    <div className={obc.dialogs}>
      <div className={obc.parentDialogsItem}>{usersName}</div>
      <div className={obc.parentMessages}>{messages}</div>
    </div>
  );
};
