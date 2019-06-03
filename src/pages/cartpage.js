import React from "react";
import Cart from "../features/cart";

export default function CartPage(props) {
  return (
    <div className="cartpage">
      <h2 className="cartpage-text">My Cart</h2>
      <Cart id="cart1" />
    </div>
  );
}
