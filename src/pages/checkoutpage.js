import React from "react";
import Checkout from "../features/checkout";

export default function CheckOutPage(props) {
  return (
    <div className="checkout">
      <h2 className="checkout-text">Checkout</h2>
      <Checkout />
    </div>
  );
}
