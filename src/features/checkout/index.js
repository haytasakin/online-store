import React from "react";
import { connect } from "react-redux";
import Cart from "../cart";
import CheckoutForm from "./form";
import fetchApi from "../../modules/fetch-api";

function submitOrder(values, cart) {
  const { email, name } = values.order;
  fetchApi("post", "https://student-example-api.herokuapp.com/v1/orders.json", {
    order: {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert("something went wrong");
      return;
    }
    document.location.href = `/orders/${json.id}`;
  });
}

function sort(item) {
  return item.sort((a, b) => a.id < b.id);
}

function Checkout(props) {
  const { cart } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {sort(props.cart).map(item => (
            <tr>
              <td>{item.name}</td>
              <td style={{ textAlign: "center" }}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Checkout);
