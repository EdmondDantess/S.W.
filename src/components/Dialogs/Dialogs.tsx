import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import obc from "./Dialogs.module.css";
import { Message } from "./Message/Message";

type dialogsDataPropsType = {
  id: number;
  name: string;
  urlAvatar: string;
};
type messageDataPropsType = {
  id: number;
  message: string;
};

type stateDialogsPropsType = {
  dialogsData: dialogsDataPropsType[];
  messageData: messageDataPropsType[];
};

type DialogPropsTypePage = {
  state: stateDialogsPropsType;
};

export const Dialogs = (props: DialogPropsTypePage) => {
  let usersName = props.state.dialogsData.map((el) => {
    return (
      <div className={obc.dialogsItems} key={el.id}>
        <DialogItem
          name={el.name}
          id={el.id}
          urlAvatar={el.urlAvatar}
        />
      </div>
    );
  });

  let messages = props.state.messageData.map((el) => {
    return (
      <div className={obc.messages} key={el.id}>
        <Message text={el.message} />
      </div>
    );
  });

  const dialogRef = React.createRef<HTMLTextAreaElement>()

const inputTextAreaDialog=()=>{
  alert(dialogRef.current?.value)
}

  return (
    <div className={obc.dialogs}>
      <div className={obc.parentDialogsItem}>{usersName}</div>
      <div className={obc.parentMessages}>{messages}</div>
      <textarea ref={dialogRef} className={obc.textAreaInput}></textarea>
     <button onClick={inputTextAreaDialog}>Send</button> 
    </div>
  );
};
