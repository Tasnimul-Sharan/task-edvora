import React, { useEffect, useState } from "react";
import Product from "./Product";
// import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container fluid">
      <h1 className="text-primary">All Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
