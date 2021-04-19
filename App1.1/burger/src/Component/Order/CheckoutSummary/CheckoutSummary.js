import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
const CheckoutSummary = (props) => {
  return (
    <div>
      <h1>We hope it tates well!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
