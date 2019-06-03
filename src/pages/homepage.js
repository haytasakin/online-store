import React from "react";
import ProductListing from "../features/product-listing";

export default function Homepage(props) {
  return (
    <div className="homepage">
      <h2 className="homepage-text">HomePage</h2>
      <ProductListing />
    </div>
  );
}
