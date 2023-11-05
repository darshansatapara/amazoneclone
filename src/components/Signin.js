import React from "react";
import "./Singuporin.css";
function Signin() {
  return (
    <>
      <div class="container">
        <form id="login-form">
          <h2>Sign in</h2>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Signin;
