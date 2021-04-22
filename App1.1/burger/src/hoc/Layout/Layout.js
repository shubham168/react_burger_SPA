import React, { Component } from "react";
import Aux from "../Auxilary/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../../Component/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Component/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState((prevState) =>  {
      console.log(prevState.showSideDrawer);
      return { showSideDrawer: !prevState.showSideDrawer };
    });
    };
  sideDrawerToogleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar menu={this.sideDrawerToogleHandler} />

        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div> sideBar</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
