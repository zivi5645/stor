import React, { useEffect, useState } from "react";

const About = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  return <h2>About:{products ? products.title : ""}</h2>;
};
export default About;
