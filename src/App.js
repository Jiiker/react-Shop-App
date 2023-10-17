import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import Homepage from "./components/Pages/Homepage";
import Loginpage from "./components/Pages/Loginpage";
import Registerpage from "./components/Pages/Registerpage";
import Userpage from "./components/Pages/Userpage";
import Detailpage from "./components/Pages/Detailpage";
import Cartpage from "./components/Pages/Cartpage";
import request from "./api/axios";
import app from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [productList, setProductList] = useState([]);
  const { productID } = useParams();
  const [cartList, setCartList] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [logOn, setLogOn] = useState(false);
  const [userData, setUserData] = useState({});
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
      setLogOn(true);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      setLogOn(false);
      // User is signed out
      // ...
    }
  });
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
    totalCount();
  }

  function updateCart(newCartList) {
    setCartList(newCartList);
    totalCount();
  }

  function totalCount() {
    let sum = 0;
    cartList.map((item) => {
      sum = sum + item.count;
    });
    setCartCounter(sum);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              cartCounter={cartCounter}
              logOn={logOn}
              setLogOn={setLogOn}
            />
          }
        >
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
          <Route
            path='/Loginpage'
            element={<Loginpage logOn={logOn} />}
          ></Route>
          <Route path='/Registerpage' element={<Registerpage />}></Route>
          <Route
            path='/Userpage'
            element={<Userpage userData={userData} />}
          ></Route>
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
