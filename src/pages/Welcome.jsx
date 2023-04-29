import React, { useState, useEffect } from "react";
import appicon from "../data/appicon.png";
import { Button } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="base-container">
        <img src={appicon} className="App-logo" alt="app-icon" />
        <p className="m-10 text-2xl text-dark-pink">
          Please choose the following options:
        </p>
        <Link to="/registration">
          <Button value="New User" />
        </Link>
        <Link to="/login">
          <Button value="Existing User" />
        </Link>
    </div>
  );
};

export default Welcome;
