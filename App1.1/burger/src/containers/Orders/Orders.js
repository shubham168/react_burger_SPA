import React, { Component } from "react";
import axios from "../../axios_orders";
import { connect } from "react-redux";
import Order from "../../Component/Order/Order";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../Component/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    console.log(this.props.token);
    this.props.onFetchOrders(this.props.token,this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }
    console.log(this.props.orders);
    return (<div>{orders}</div>);
  }
}

const mapStateToProps = (state) => {
  return {
    token : state.auth.idToken,
    orders: state.order.orders,
    loading: state.order.loading,
    userId : state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token,userId) => dispatch(actions.fetchOrders(token,userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
