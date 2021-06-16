import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../../compnoent/Header/Header";
import Products from "../../compnoent/Products/Products";
import RangeSlider from "../../compnoent/PriceRange/PriceRange";
import ThemeContext from "../../ThemeContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [filteredPrice, setFilteredPrice] = useState();
  const theme = useContext(ThemeContext);
  // console.log("theme", theme);

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
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch("http://localhost:8000/products", {
  //       method: "GET",
  //     });
  //     let productsFromServer = await response.json();
  //     setProducts(productsFromServer);
  //   };
  //   getProducts();
  // });
  // let filteredProducts = products.filter(
  //   (product) =>
  //     product.category === selectedCategory || selectedCategory === ""
  // );

  // const MaxMin = () => {
  //     const priceArray=
  //   products.reduce((price, cur) => {
  //     return(
  //     price.min > cur ? price.min : cur
  //         price.max < cur ? price.max : cur
  //         )
  //   }, {max[0], min[1]});
  // };
  console.log("filteredPrice", filteredPrice);
  const setFunc = (event, value) => setFilteredPrice(value);
  return (
    <div className="app" style={{ background: theme.background }}>
      <RangeSlider setFilteredPrice={setFunc}></RangeSlider>
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
