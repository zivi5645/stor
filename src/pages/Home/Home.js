import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../../compnoent/Header/Header";
import Products from "../../compnoent/Products/Products";
import ThemeContext from "../../ThemeContext";
import Addproduct from "../../compnoent/AddProduct/AddProduct";
import RangeSlider from "../../compnoent/PriceRange/PriceRange";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [filteredPrice, setfilteredPrice] = useState("");
  const theme = useContext(ThemeContext);

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  let filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory || selectedCategory === ""
  );

  const AddProduct = async (title) => {
    console.log(title);
    const res = await fetch("http://localhost:8000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    // const product = await res.json();
    // setProducts([product, ...products]);
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  };

  return (
    <div
      className="app"
      // style={{ background: theme.background }}
    >
      <RangeSlider></RangeSlider>
      {/* {timeOut} */}
      <Addproduct onAdd={AddProduct} />
      <Header
        category={selectedCategory}
        setselectedCategory={setselectedCategory}
        categories={Object.keys(groupBy(products, "category"))}
      />
      <Products products={filteredProducts} category={selectedCategory} />
    </div>
  );
};

export default Home;
