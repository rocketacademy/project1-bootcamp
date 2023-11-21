import React, { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";

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
      <Box
        sx={{
          height: "20vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Stack spacing={4}>
          <p>{`${currentDate.toDateString()}, ${currentTime}`}</p>

          <h2>{greetMessage}</h2>
        </Stack>
      </Box>
    </>
  );
};

export default Greetings;
