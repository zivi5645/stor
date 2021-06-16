import React, { useEffect, useState } from "react";

const About = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  return <h2>About:{products ? products.title : ""}</h2>;
};
export default About;
