import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import appicon from "../data/appicon.png";

const Start = () => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 3000);
  }, [start]);

  return (
    <div>
      <div className="base-container">
        <div className="App-name">Aime</div>
        <img src={appicon} className="App-logo" alt="app-icon" />
      </div>
      {start && <Navigate to="./Welcome" />}
    </div>
  );
};

export default Start;
