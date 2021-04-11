import React, { useEffect, useState } from "react";
import "./App.css";
// import Todos from "./compnoent/Todos/Todos";
// import Todos from "./compnoent/TodosListitem/TodosListitem";
import Products from "./compnoent/Products/Products";
import Header from "./compnoent/Header/Header";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  let filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory || selectedCategory === ""
  );

  return (
    <div className="app">
      {/* <div>{selectedCategory}</div> */}
      <Header
        category={selectedCategory}
        setselectedCategory={setselectedCategory}
        categories={Object.keys(groupBy(products, "category"))}
      />
      <Products products={filteredProducts} category={selectedCategory} />
    </div>
  );
};

export default App;
