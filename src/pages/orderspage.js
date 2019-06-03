import React from "react";
import Order from "../features/order";

export default function OrdersPage(props) {
  return (
    <div className="order" style={{ backgroundColor: "yellow" }}>
      <h2 className="order-text">My Order</h2>
      <Order id={props.match.params.id} />
    </div>
  );
}
