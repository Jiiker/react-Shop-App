import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./components/Pages/Homepage";
import Loginpage from "./components/Pages/Loginpage";
import Detailpage from "./components/Pages/Detailpage";
import Cartpage from "./components/Pages/Cartpage";
import request from "./api/axios";

function App() {
  const [productList, setProductList] = useState([]);
  const { productID } = useParams();
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await request();
      setProductList(data);
    };
    fetchProducts();
  }, []);

  function addToCart(product) {
    const updatedCart = [...cartList];

    const existingProduct = updatedCart.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      updatedCart.push({ product, count: 1 });
    }

    setCartList(updatedCart);
  }

  function updateCart(newCartList) {
    setCartList(newCartList);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <Homepage
                productList={productList}
                setProductList={productList}
                productID={productID}
              />
            }
          ></Route>
          <Route path='/Loginpage' element={<Loginpage />}></Route>
          <Route
            path='/Detailpage/:productID'
            element={
              <Detailpage productList={productList} addToCart={addToCart} />
            }
          ></Route>
          <Route
            path='/Cartpage'
            element={<Cartpage cartList={cartList} updateCart={updateCart} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
