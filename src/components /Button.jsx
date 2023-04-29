import React, { useState } from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.handleSubmit}
      className="text-xl p-3 m-4 w-68 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
    >
      {props.value}
    </button>
  );
};

export default Button;
