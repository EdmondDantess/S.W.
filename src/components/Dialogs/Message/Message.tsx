import React from "react";
import obc from "./../Dialogs.module.css";

type MessageTypeProps = {
  text: string;
};

export const Message = (props: MessageTypeProps) => {
  return <div className={obc.message}>{props.text}</div>;
};
