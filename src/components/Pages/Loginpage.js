import React from "react";
import "./Loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import Registerpage from "./Registerpage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Loginpage({ logOn, setLogOn }) {
  const navigate = useNavigate();
  const handleSignin = (event) => {
    event.preventDefault();
    const email = event.target["loginemail"].value;
    const password = event.target["loginpassword"].value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
