import React, { Component } from "react";
import axios from "../../../axios_orders";
import Button from "../../../Component/UI/Button/Button";
import Spinner from "../../../Component/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import Input from "../../../Component/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP CODE",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    console.log(this.props.price);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    console.log(order);

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        console.log(this.props.history);
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  inputChangedHandler = (event,inputIdentifier) => {
    
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement={...updatedOrderForm[inputIdentifier]}
    updatedFormElement.value=event.target.value;
    updatedOrderForm[inputIdentifier]=updatedFormElement;
    this.setState({orderForm  : updatedOrderForm})
  };

  render() {
    const fromElementsArray = [];
    for (let key in this.state.orderForm) {
      fromElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {fromElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={ (event)=>  this.inputChangedHandler(event,formElement.id) }
          />
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
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
