import React from "react";
import burgerLogo from "../../assests/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;
