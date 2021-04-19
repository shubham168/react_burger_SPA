import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../Component/Order/CheckoutSummary/CheckoutSummary";
import classes from "../../Component/Order/CheckoutSummary/CheckoutSummary.module.css";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (let param of query.entries()) {
      if (param[0] === "Price") {
        price=param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    console.log("ingredients from checkout.js");
    console.log(price);

    this.setState({ ingredients: ingredients , price : price});
  }

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
          ingredients={this.state.ingredients}
          onCheckoutCancel={this.onCheckoutCancelHandler}
          onCheckoutContinue={this.onCheckoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;
