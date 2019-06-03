import React, { Component } from "react";
import Router from "./Router";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = ({ cart }) => (
  //holding how many items in cart(i) here on navlink
  <nav>
    <ul className="top-menu ">
      <div class="row btn-group">
        <li>
          <NavLink to="/">
            <button id="home" type="button" class="btn btn-primary">
              Home
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <button id="cart" type="button" class="btn btn-primary ">
              Cart(
              {cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              )
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout">
            <button id="checkout" type="button" class="btn btn-primary">
              Check Out
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/:id">
            <button id="order" type="button" class="btn btn-primary">
              Orders
            </button>
          </NavLink>
        </li>
      </div>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(App));
