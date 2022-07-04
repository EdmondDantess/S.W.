import React from "react";
import { NavLink } from "react-router-dom";
import obc from "./../Dialogs.module.css";

type DialogItemTypeProps = {
  name: string;
  id: number;
};

export const DialogItem = (props: DialogItemTypeProps) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={obc.dialog + " " + obc.active}>
      <NavLink to={path} activeClassName={obc.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};
