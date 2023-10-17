import React from "react";
import "./Registerpage.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Registerpage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target["regiemail"].value;
    const password = event.target["regipassword"].value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        event.target["regiemail"].value = "";
        event.target["regipassword"].value = "";
        navigate("/Loginpage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className='regi-page'>
      <form className='regi-page-wrap' onSubmit={handleSubmit}>
        <div className='regi-title'>Create account</div>
        <div className='regi-eamil'>Email</div>
        <input
          className='regi-email-input'
          name='regiemail'
          type='email'
        ></input>
        <div className='regi-password'>Password</div>
        <input
          className='regi-password-input'
          name='regipassword'
          type='password'
        ></input>
        <br />
        <button className='regi-submit-btn' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
}

export default Registerpage;
