import React, { useState } from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

const Products = ({ products, selectedCategory }) => {
  const [sale, setsale] = useState(true);

  const saleOver = () => {
    setsale((sale) => !sale);
  };

  const listItems = products.map((product) =>
    product.price > 10 && product.price < 300 ? (
      <Product
        key={product.id}
        id={product._id}
        title={product.title}
        image={product.image}
        price={product.price}
        onSale={sale}
        selectedCategory={selectedCategory}
        category={product.category}
      ></Product>
    ) : null
  );

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
