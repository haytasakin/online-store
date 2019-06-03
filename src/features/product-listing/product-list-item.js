import React from "react";
import AddButton from "./add-btn";
import RemoveButton from "./remove-btn";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <div
        style={{
          display: "absolute",
          height: 180,
          width: "auto",
          marginRight: "-50%"
        }}
      >
        <h3 style={{ height: "60px", fontFamily: "cursive" }}>
          {props.product.name}
        </h3>
        <div id="photo-text">
          <img
            id="photo"
            style={{ display: "absolute", marginLeft: 15 }}
            height={100}
            src={props.product.image}
          />
        </div>
      </div>
      <div id="price">${props.product.price}</div>

      <div>
        <AddButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveButton
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
      <div id="mouse_over">{props.product.description} </div>
    </div>
  );
}
