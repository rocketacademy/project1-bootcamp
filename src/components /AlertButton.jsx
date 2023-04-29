import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsExclamationDiamond } from "react-icons/bs";

const AlertButton = (props) => {
  const phoneNumber = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://wa.me/${phoneNumber}?text=Your%20patient%20needs%20immediate%20assistance!%20Please%20call%20back!`;
  };
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="text-xxl text-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:text-pink-700"
    >
      <BsExclamationDiamond />
    </button>
  );
};

export default AlertButton;
