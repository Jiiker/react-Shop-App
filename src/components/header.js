import React, { useEffect } from "react";
import "./header.css";
import Carticon from "../icons/cart.svg";
import Usericon from "../icons/person.svg";
import Loginicon from "../icons/indent.svg";
import Logouticon from "../icons/box-arrow-right.svg";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export const Header = ({
  cartCounter,
  logOn,
  setLogOn,
  totalCount,
  cartList,
}) => {
  function handleLogout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLogOn(false);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  useEffect(() => {
    totalCount();
  }, [cartList]);

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
          <Link to='/Userpage'>
            <img src={Usericon} />
          </Link>
        ) : (
          <Link to='/LoginPage'>
            <img src={Usericon} />
          </Link>
        )}

        {logOn ? (
          <Link to='/Loginpage'>
            <img src={Logouticon} onClick={handleLogout} />
          </Link>
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
