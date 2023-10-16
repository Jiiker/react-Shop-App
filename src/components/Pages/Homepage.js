import React, { useState } from "react";
import "./Homepage.css";
import Products from "./Products/Products";

function Homepage({ productList, setProductList, productID }) {
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState([]);

  function handleClick(event) {
    setCategory(event.target.id);

    if (event.target.id === "all") {
      setSelectedProduct(productList);
    } else {
      let newList = productList.filter(
        (data) => data.category === event.target.id
      );
      setSelectedProduct(newList);
    }
  }

  return (
    <div className='homepage'>
      <div>
        <h1>Product</h1>
      </div>
      <div className='buttons'>
        <button className='product-button' id='all' onClick={handleClick}>
          모두
        </button>
        <button
          className='product-button'
          id='electronics'
          onClick={handleClick}
        >
          전자기기
        </button>
        <button className='product-button' id='jewelery' onClick={handleClick}>
          쥬얼리
        </button>
        <button
          className='product-button'
          id="men's clothing"
          onClick={handleClick}
        >
          남성의류
        </button>
        <button
          className='product-button'
          id="women's clothing"
          onClick={handleClick}
        >
          여성의류
        </button>
      </div>
      <Products
        category={category}
        selectedProduct={selectedProduct}
        productList={productList}
        productID={productID}
      />
    </div>
  );
}

export default Homepage;
