import React, { useState, useEffect } from "react";
import appicon from "../data/appicon.png";
import { Button } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [authUserName, setAuthUserName] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  return (
    <div className="base-container">
        <img src={appicon} className="App-logo" alt="app-icon" />
        <p className="m-10 text-2xl text-dark-pink">Welcome Back !</p>
        <form className="grid grid-cols-1 gap-3 text-xl text-dark-pink text-left font-light p-3 m-1 w-80 bg-white drop-shadow-lg rounded-xl">
          <label>Username</label>
          <input
            className="border-solid border-2 border-dark-pink rounded"
            type="text"
            id="authUsername"
            required
            placeholder="abcde"
            value={authUserName}
            onChange={(e) => setAuthUserName(e.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            className="border-solid border-2 border-dark-pink rounded"
            type="text"
            id="authPassword"
            required
            placeholder="abcde"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
          />
        </form>
        <Link to="/home">
          <Button value="Login" />
        </Link>
    </div>
  );
};

export default Login;
