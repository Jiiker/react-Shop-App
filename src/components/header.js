import React from "react";
import "./header.css";
import Carticon from "../icons/cart.svg";
import Usericon from "../icons/person.svg";
import Loginicon from "../icons/indent.svg";
import Logouticon from "../icons/box-arrow-right.svg";
import { Link } from "react-router-dom";

export const Header = ({ cartCounter, logOn, setLogOn }) => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='title'>Shop</div>
      </Link>
      <div className='icons'>
        <Link to='/CartPage'>
          <div className='cart-icon-container'>
            <img className='cart-icon' src={Carticon} />
            {cartCounter > 0 ? (
              <div className='cart-icon-badge'>{cartCounter}</div>
            ) : null}
          </div>
        </Link>

        {logOn ? (
          <img src={Usericon} />
        ) : (
          <Link to='/LoginPage'>
            <img src={Usericon} />
          </Link>
        )}

        {logOn ? (
          <img src={Logouticon} />
        ) : (
          <Link to='/LoginPage'>
            <img src={Loginicon} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
