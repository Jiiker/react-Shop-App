import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "./Layout.css";

export const Layout = ({
  cartCounter,
  logOn,
  setLogOn,
  totalCount,
  cartList,
}) => {
  return (
    <>
      <div className='wrapper'>
        <Header
          cartCounter={cartCounter}
          logOn={logOn}
          setLogOn={setLogOn}
          totalCount={totalCount}
          cartList={cartList}
        />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
