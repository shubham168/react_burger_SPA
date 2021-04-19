import React, { Component } from "react";
import axios from "../../../axios_orders";
import Button from "../../../Component/UI/Button/Button";
import Spinner from "../../../Component/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading : false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    console.log(this.props.price);

     this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Shubham Jadhav",
        address: {
          street: "TestStreet 1",
          zipCode: "41351",
          country: "India",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    console.log(order);

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        console.log(this.props.history);
        this.props.history.push('/');
      })
      .catch((error) => this.setState({ loading: false}));
  }

  render() {
    let form = (
      <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
        </form>
    );
    if(this.state.loading)
    {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
          {form}
      </div>
    );
  }
}

export default ContactData;
