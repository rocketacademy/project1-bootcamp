import React, { useState, useEffect } from "react";

const Timer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;

  useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000);
  });

  return (
    <>
      <p>{`${currentDate.toDateString()}, ${currentTime}`}</p>
    </>
  );
};

export default Timer;
