import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

const Products = ({ products, selectedCategory }) => {
  const [sale, setsale] = useState(true);

  const saleOver = () => {
    setsale((sale) => !sale);
  };

  const listItems = products.map((product) => (
    <Link to={`/products/${product.id}`} key={product.id}>
      <Product
        title={product.title}
        image={product.image}
        price={product.price}
        onSale={sale}
        selectedCategory={selectedCategory}
        category={product.category}
      ></Product>
    </Link>
  ));
  return (
    <div className="products">
      <div>
        <SaleCountDown endSale={saleOver} />
      </div>
      <section className="products" id="product">
        {listItems}
      </section>
    </div>
  );
};

export default Products;
