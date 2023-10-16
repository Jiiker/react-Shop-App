import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

function Products({ category, selectedProduct, productList, productID }) {
  let productsToDisplay = selectedProduct;

  if (category === "all") {
    productsToDisplay = productList;
  }

  return (
    <div>
      <ul>
        {productsToDisplay.map((product, index) => (
          <li className='list-box' key={index}>
            <Link to={`/Detailpage/${product.id}`}>
              <div className='list-image-box'>
                <img
                  className='list-image'
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className='list-category'>{product.category}</div>
              <div className='list-title'>{product.title}</div>
              <div className='list-price'>${product.price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
