import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import Greetings from "./Greetings";

import Form from "./Form";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  const navigate = useNavigate();

  const getName = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return (
    <>
      <h2>{getName()}</h2>
      <Timer />
      <Greetings />

      <h3>What would you like to do today?</h3>
      {}
      <button onClick={() => setShow(true)}>Add a Trip</button>

      <h6>Ongoing trips</h6>
      {!show ? (
        <p>This space is currently empty! Add a trip to start.</p>
      ) : (
        <Form />
      )}

      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

export default Dashboard;
