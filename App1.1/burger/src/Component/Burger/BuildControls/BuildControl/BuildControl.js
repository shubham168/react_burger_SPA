import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Lable}>{props.lable}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default BuildControl;
