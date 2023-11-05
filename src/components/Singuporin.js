import React from "react";
import "./Singuporin.css";
import amazonimg from "../images/header-logo.png";
import { Link } from "react-router-dom";
import Signin from "./Signin";

function Singuporin() {
  return (
    <div class="container">
      <form id="signup-form">
        <img src={amazonimg} alt="logo" className="Sing-image" />
        <h2>Create your Amazon account</h2>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name.."
          required
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example123@gmail.com"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="atleast 7 character needed"
          required
        />
        <button type="submit">Create Account</button>
      </form>
      <div id="login-link">
        <p>Already have an account?</p>

        <Link to={"/Signin"}>
          <button>Sign-In</button>
        </Link>
      </div>
    </div>
  );
}

export default Singuporin;
