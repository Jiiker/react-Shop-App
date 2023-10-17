import React from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import Registerpage from "./Registerpage";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function Loginpage({ logOn, setLogOn }) {
  const handleSignin = (event) => {
    event.preventDefault();
    const email = event.target["loginemail"].value;
    const password = event.target["loginpassword"].value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("success login");
        setLogOn(true);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  return (
    <div className='login-page'>
      <form className='login-page-wrap' onSubmit={handleSignin}>
        <div className='login-title'>Sign in</div>
        <div className='login-email'>Email</div>
        <input
          className='login-email-input'
          name='loginemail'
          type='email'
        ></input>
        <div className='login-password'>Password</div>
        <input
          className='login-password-input'
          name='loginpassword'
          type='password'
        ></input>
        <div>
          <button className='login-submit-btn' type='submit'>
            sign in
          </button>
          <br />
          <Link to='/Registerpage' element={<Registerpage />}>
            <button className='login-create-btn'>Create your account</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
