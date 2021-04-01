import React from "react";
import classes from "./Menu.module.css";
console.log(classes)
const menu = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>

  </div>
);

export default menu;
