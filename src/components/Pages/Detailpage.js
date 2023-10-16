import React from "react";
import "./Detailpage.css";

function Detailpage({ productList, addToCart }) {
  const ID = window.location.pathname.split("/")[2];
  const product = productList.filter((p) => p.id === parseInt(ID));

  if (!product) {
    return <div>상품을 찾을 수 없음</div>;
  }

  function handleToCart() {
    addToCart(product[0]);
  }

  return (
    <div className='product-detail'>
      <div className='image-section'>
        <img
          className='product-detail-image'
          src={product[0].image}
          alt={product[0].title}
        />
      </div>
      <div className='detail-section'>
        <div className='detail-category'>[{product[0].category}]</div>
        <div className='detail-title'>Name : {product[0].title}</div>
        <div className='detail-price'>Price : ${product[0].price}</div>
        <div className='detail-description'>
          Description : {product[0].description}
        </div>
        <button className='add-to-cart-btn' onClick={handleToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detailpage;
