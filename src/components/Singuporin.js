import React, { useState } from "react";
import "./Singuporin.css";
import amazonimg from "../images/header-logo.png";
import { Link, useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth"; // Import the necessary Firebase functions
import { auth } from "../firebase";

function SignupOrIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, name,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully:", user);

        navigate("/");
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <>
      <div className="container">
        <form id="signup-form" className="signup-form">
          <img src={amazonimg} alt="logo" className="Sing-image" />
          <h2>Create your Amazon account</h2>
          <label htmlFor="name" className="head-lable">
            Name
          </label>
          <input
            className="user-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="head-lable">
            Email
          </label>
          <input
            className="user-input"
            type="email"
            id="email"
            name="email"
            placeholder="example123@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="head-lable">
            Password
          </label>
          <input
            className="user-input"
            type="password"
            id="password"
            name="password"
            placeholder="at least 7 characters needed"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={register} className="createacc-button">
            Create Account
          </button>
        </form>
      </div>
<div className="peraAndbutton"> 
      <div id="login-link">
        <p className="pAcc">Already have an account?</p>
      <p className="pHome">Back To Home?</p>
      </div>
      <div className="only-button">
        <Link to={"/Signin"}>
          <button className="createacc-button registerTosignin">
            <strong>Sign-In</strong>
          </button>
        </Link>
        <Link to={"/"}>
      <button  className="createacc-button loginTohome">Home</button>
      </Link>
      </div>
      </div>
    </>
  );
}

export default SignupOrIn;
