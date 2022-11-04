1; //שנוי עוז;
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

2;
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

3;
// Array.reduce(()=>{
//   acc
// },{})

4; //שרת;
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cord = require("cors");
// mongoose.connect("mongodb://localhost/gocodeshop", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const corsOptios = {
//   origin: "http://loclahost:3000",
//   optionSuccessStatus: 200,
// };

// const app = express();

// app.use(bodyParser.json());

// app.use(cord(corsOptios));

// const productsSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   description: String,
//   category: String,
//   image: String,
// });

// const Product = mongoose.model("Products", productsSchema);

// app.get("/products", async (req, res) => {
//   const products = await Product.find({}).exec();
//   const { p } = req.query;
//   if (p) {
//     res.send(products.filter((product) => product.title.includes(p)));
//   } else {
//     res.send(products);
//   }
// });

// app.get("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const product = products.find((product) => product.id === +productId);
//   res.send(product ?? {});
// });

// app.post("/products", async (req, res) => {
//   const { title } = req.body;

//   const Products = new Product({ title });
//   await product.save();

//   res.status(201).send(product);
// });

// app.put("/products/:productId", async (req, res) => {
//   const { productId } = req.params;
//   const { title, price, image, description, category } = req.body;
//   await Product.updateOne({ _id: productId }, { title }).exec();
//   res.status("ok");
// });

// app.delete("/products/:productId", async (req, res) => {
//   const { productId } = req.params;
//   await Product.deleteOne({ _id: productId }).exec();
//   res.status("ok");
// });
// app.listen(8000, () => console.log("Exaple app listening om port 8000!"));

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
// });

5; // reduce פונקצית
// const MaxMin = () => {
//     const priceArray=
//   products.reduce((price, cur) => {
//     return(
//     price.min > cur ? price.min : cur
//         price.max < cur ? price.max : cur
//         )
//   }, {max[0], min[1]});
// };

// function minMax(items) {
//   var minMaxArray = items.reduce(
//      (accumulator, currentValue) => {
//           return (accumulator < currentValue ? accumulator : currentValue);
//      }
//  );

//   return minMaxArray;

// const [filteredPrice, setFilteredPrice] = useState();
// const [products, setProducts] = useState([]);
// console.log("theme", theme);

//   6.
//     const AddProduct = async (title) => {
//   const res= await fetch('http://localhost:8000/products', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({title}),
// })
// const product = await res.json();
//     setProducts([product, ...products]);
//   };

{
  /* <Addproduct onAdd={AddProduct}/> */
}

// import Addproduct from "../../compnoent/AddProduct/AddProduct";

7; // PriceRange שנוי עוז

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";
// // import { Accordion } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider(setFilteredPrice) {
//   const classes = useStyles();
//   const [value, setValue] = useState([1, 999]);

// const handleChange = (event, newValue) => {
//     setFilteredPrice(newValue);
//   };

// console.log("value by slider ", value);

//   return (
//     <div className={classes.root}>
//       <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         min={1}
//         max={999}
//         value={value}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       />
//     </div>
//   );
// }
7; //reduce

// && product.price>minValue &&product.price<maxValue
// && product.price>minValue &&product.price<maxValue

//   const minMax=(products) =>{
//     return products.reduce(
//         (acc, cur) => {
//             return [
//                 Math.min(cur, acc[0]),
//                 Math.max(cur, acc[1]),
//             ];
//         }, [Number.MAX_VALUE, Number.MIN_VALUE]
//     );
// }

/* body{
    display: flex;
    justify-content: center;

} */
/* img {
    display: flex;
    justify-content: space-around;
    border-radius: 12px; 
    padding: 5px; 
    height: 480px;
    width: 500px;
  } */
/* .price{
    display: flex;
    justify-content: flex-end;
  } */

/* .productsPage{ */
/* background-color: rgb(242, 184, 184); */
/* width: 800px; */
/* height: 650px; */
/* border: 2px solid red; */
/* border-radius: 8px;  */
/* padding: 5px;  */
/* border-radius: 5px; */
/* } */
