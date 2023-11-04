import React from "react";

const Greetings = () => {
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
      <h4>{greet()}</h4>
    </>
  );
};

export default Greetings;
