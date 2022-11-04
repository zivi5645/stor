import React, { useEffect, useState } from "react";
import "./ProductsPage.css";

const ProductsPage = ({ match }) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`http://localhost:8000/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, [match.params.productId]);
  // console.log("product",product);
  return (
    <div>
      <div className="img1">
        {" "}
        <img
          className="img"
          src={product ? product.image : ""}
          alt="Product image"
        ></img>{" "}
      </div>
      <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="page">
        <h2 className="h21">About:{product ? product.title : ""}</h2> <br />{" "}
        <br /> <br />
        <h2 className="h22">price:{product ? product.price : ""}</h2>
      </div>
    </div>
  );
};
export default ProductsPage;
