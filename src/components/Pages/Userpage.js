import React from "react";
import "./Userpage.css";

function Userpage({ userData }) {
  console.log(userData);
  return (
    <div className='userpage'>
      <h1>Your email is</h1>
      <div>{userData.email}</div>
    </div>
  );
}

export default Userpage;
