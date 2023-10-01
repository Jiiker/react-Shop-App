import React from "react";
import "./header.css";
import Carticon from "../icons/cart.svg";
import Usericon from "../icons/person.svg";
import Loginicon from "../icons/indent.svg";

export const Header = () => {
  return (
    <div className='header'>
      <div className='title'>Shop</div>
      <div className='icons'>
        <img src={Carticon} />
        <img src={Usericon} />
        <img src={Loginicon} />
      </div>
    </div>
  );
};

export default Header;
