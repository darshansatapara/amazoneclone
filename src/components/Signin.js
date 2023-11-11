import React, { useState } from "react";
import "./Singuporin.css";
import amazonimg from "../images/header-logo.png";
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      const user = auth.user;
    
      if (user) {
          console.log("i am a user" )
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
      });
  };

  return (
    <>
      <div className="container">
        <form id="login-form" className="signup-form">
          <img src={amazonimg} alt="logo" className="Sing-image" />
          <h2>Sign in</h2>
          <label htmlFor="email" className="head-lable">
            Email
          </label>
          <input
            className="user-input"
            type="email"
            id="email"
            name="email"
            value={email} // Add this line to set the value of the email input
            onChange={(e) => setEmail(e.target.value)} // Add this line to update the state
            required
          />
          <label htmlFor="password" className="head-lable">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password} // Add this line to set the value of the password input
            onChange={(e) => setPassword(e.target.value)} // Add this line to update the state
            className="user-input"
            required
          />

          <button onClick={SignIn} className="createacc-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
