import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../Component/Order/CheckoutSummary/CheckoutSummary";
import classes from "../../Component/Order/CheckoutSummary/CheckoutSummary.module.css";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  onCheckoutCancelHandler = () => {
    this.props.history.goBack();
  };

  onCheckoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <CheckoutSummary
          ingredients={this.props.ings}
          onCheckoutCancel={this.onCheckoutCancelHandler}
          onCheckoutContinue={this.onCheckoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price : state.totalPrice
  };
};

export default connect(mapStateToProps)(Checkout);
