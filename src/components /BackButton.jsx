import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const BackButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link to="/home">
      <button
        type="button"
        onClick={() => setIsClicked(true)}
        className="mt-7 text-6xl inset-x-2 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-full"
      >
        <BsArrowLeftCircle />
      </button>
    </Link>
  );
};

export default BackButton;
