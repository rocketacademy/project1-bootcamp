import React, { useState } from "react";

import Timer from "../components/Timer";
import Greetings from "./Greetings";

import Form from "./Form";

import Button from "./Button";
import CreatedForm from "./CreatedForm";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCreatedForm, setShowCreatedForm] = useState(false);

  const getUsername = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getCreatedFormNames = () => {
    return JSON.parse(localStorage.getItem("stateObject"));
  };

  // useEffect(() => {
  //   return ()=> setShowForm(false);
  // // });
  // if (showCreatedForm) {
  //   return setShowForm(false);
  // }

  return (
    <>
      <h2>{getUsername()}</h2>
      <Timer />
      <Greetings username={getUsername()} />
      <h5>Ongoing Trips</h5>
      {!showForm && !showCreatedForm ? (
        <>
          <Button onClick={() => setShowForm(true)}>Add a trip</Button>
          <p>This space is currently empty! Add a trip to start</p>
        </>
      ) : showForm && !showCreatedForm ? (
        <>
          <Form />
          <Button
            onClick={() => {
              setShowCreatedForm(true);
            }}
          >
            Create Trip
          </Button>
        </>
      ) : (
        <CreatedForm getNames={getCreatedFormNames()} />
      )}
    </>
  );
};

export default Dashboard;
