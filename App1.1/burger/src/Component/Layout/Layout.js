import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Aux>
    <div> Toolbar , sideBar, backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
