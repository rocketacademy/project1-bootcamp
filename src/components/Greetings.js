import React from "react";

const Greetings = ({ username }) => {
  const today = new Date();
  const currHour = today.getHours();

  let greetings;

  const greet = () => {
    if (currHour >= 6 && currHour < 12) {
      greetings = "Good Morning";
    } else if (currHour >= 12 && currHour < 17) {
      greetings = "Good Afternoon";
    } else {
      greetings = "Good Evening";
    }
    return greetings;
  };
  return (
    <>
      <h3>{`${greet()} ${username}! `}</h3>
      <h3>What would you like to do today?</h3>
    </>
  );
};

export default Greetings;
