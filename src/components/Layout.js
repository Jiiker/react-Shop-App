import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
