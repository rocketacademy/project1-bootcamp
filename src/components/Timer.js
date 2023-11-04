import React, { useState, useEffect } from "react";

const Timer = () => {
  const today = new Date();

  const [currentTimeDate, setCurrentTimeDate] = useState(today);

  useEffect(() => {
    setInterval(() => {
      setCurrentTimeDate(today);
    }, 1000);
  });
  return <>{currentTimeDate.toDateString()}</>;
};

export default Timer;
