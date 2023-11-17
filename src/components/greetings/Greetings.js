import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";

import "./Greetings.css";

const Greetings = ({ username }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
  const currHour = currentDate.getHours();

  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000);
  });

  const greetUser = () => {
    let greetings;
    if (currHour >= 6 && currHour < 12) {
      greetings = "Good morning";
    } else if (currHour >= 12 && currHour < 17) {
      greetings = "Good afternoon";
    } else {
      greetings = "Good evening";
    }
    return greetings;
  };

  let greetMessage = `${greetUser()} ${username},`;

  return (
    <>
      <Stack spacing={4} className="greetings">
        <p
          style={{ fontSize: "15px" }}
        >{`${currentDate.toDateString()}, ${currentTime}`}</p>

        <h2>{greetMessage}</h2>
      </Stack>
    </>
  );
};

export default Greetings;
