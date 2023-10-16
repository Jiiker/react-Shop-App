import React from "react";
import "./Cartpage.css";

function Cartpage({ cartList, updateCart }) {
  console.log(cartList);

  const handleCountChange = (event, index) => {
    const newCartList = [...cartList];
    newCartList[index].count = parseInt(event.target.value);

    if (newCartList[index].count === 0) {
      newCartList.splice(index, 1);
    }

    updateCart(newCartList);
  };

  function calculateTotal() {
    let sum = 0;
    cartList.map((item) => {
      sum = sum + item.count * item.product.price;
    });
    return sum;
  }

  return (
    <div className='cartpage'>
      {cartList.map((item, index) => (
        <li className='cart-list' key={index}>
          <div className='cart-item-image'>
            <img src={item.product.image} alt={item.product.title} />
          </div>
          <div className='cart-item-title'>{item.product.title}</div>
          <div className='cart-item-price'>${item.product.price}</div>
          <input
            className='cart-item-counter'
            type='number'
            value={item.count}
            onChange={(event) => handleCountChange(event, index)}
          />
        </li>
      ))}
      <div className='total-price'>Total: ${calculateTotal()}</div>
    </div>
  );
}

export default Cartpage;
