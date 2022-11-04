// import { styled } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import sale from "./sale.jfif";

const Product = ({ image, title, price, onSale, id }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${id} `}>
        {price > 50 && onSale && <img src={sale} width="100" alt="sale" />}
        <div className="product-image">
          <img src={image} alt="some text" />
        </div>
        <div className="product-info">
          <h5> {title}</h5>
          <h6>{price + "$"}</h6>
        </div>
      </Link>
    </div>
  );
};

export default Product;
