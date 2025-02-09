import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Login</button>
        <button>Signup</button>
      </form>
    </>
  );
};

export default LoginForm;
