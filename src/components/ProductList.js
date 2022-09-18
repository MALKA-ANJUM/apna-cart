import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  console.log(props);
  return props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
      ></Product>
    );
  });
};

export default ProductList;
