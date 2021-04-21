import React, { useEffect, useState } from "react";
import "./Home.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../../compnoent/Header/Header";
import Products from "../../compnoent/Products/Products";

const Home = () => {
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
// import { createContext } from "react";

// const fonts = {
//   primary: "Tinos",
//   secondary: "HEEBO",
// };

// export const FontContext = createContext(fonts);

// function ProviderFontContext({ children }) {
//   return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
// }
// export default ProviderFontContext;
