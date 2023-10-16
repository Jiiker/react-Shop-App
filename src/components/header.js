import React from "react";
import "./header.css";
import Carticon from "../icons/cart.svg";
import Usericon from "../icons/person.svg";
import Loginicon from "../icons/indent.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='title'>Shop</div>
      </Link>

      <div className='icons'>
        <Link to='/CartPage'>
          <img src={Carticon} />
        </Link>
        <Link to='/LoginPage'>
          <img src={Usericon} />
        </Link>
        <Link to='/LoginPage'>
          <img src={Loginicon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
