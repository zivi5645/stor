import React, { Component } from "react";
import sale from "./sale.jfif";

const Product = ({
  image,
  title,
  price,
  selectedCategory,
  category,
  onSale,
}) => {
  return (
    <div className="product-card">
      {price > 50 && onSale && <img src={sale} width="100" alt="sale" />}
      <div className="product-image">
        <img src={image} alt="some text" />
      </div>
      <div className="product-info">
        <h5> {title}</h5>
        <h6>{price + "$"}</h6>
      </div>
    </div>
  );
};

export default Product;
