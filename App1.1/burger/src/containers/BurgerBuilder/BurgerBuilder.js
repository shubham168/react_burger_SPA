import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../Component/Burger/Burger";
class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
