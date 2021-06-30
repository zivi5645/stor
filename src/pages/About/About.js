import React, { useEffect, useState } from "react";

const About = ({ match }) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`http://localhost:8000/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, []);
  console.log("product",product);
  return <h2>About:{product ? product.title : ""}</h2>;
};
export default About;
