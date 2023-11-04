import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    if (username === "") {
      return;
    }
    navigate("/dashboard");
  };

  return (
    <>
      {/*<h4>EQUALS</h4>*/}
      <form>
        <h6>Hey there!</h6>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Your name goes here"
        />
        <button type="button" onClick={handleClick}>
          Get Started
        </button>
      </form>
    </>
  );
};

export default Home;
