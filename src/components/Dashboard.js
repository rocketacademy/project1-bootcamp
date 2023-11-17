import React, { useState } from "react";
import Greetings from "./greetings/Greetings";
import { Stack, Button } from "@mui/material";

import Forms from "./forms/Forms";

const Dashboard = () => {
  const [isTripFormShown, setIsTripFormShown] = useState(false);

  const username = JSON.parse(localStorage.getItem("user"));

  // get tripname and companions details
  const getTripData = JSON.parse(localStorage.getItem("tripDetails"));

  return (
    <>
      <Stack spacing={8}>
        <Greetings username={username} />
        {!isTripFormShown && !getTripData ? (
          <>
            <p>You have no ongoing activity. Add a trip to begin.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  setIsTripFormShown(true);
                }}
                style={{
                  backgroundColor: "#c6c09c",
                  color: "black",
                  fontWeight: "bold",
                  width: "140px",
                }}
                disableRipple
              >
                Add a Trip
              </Button>
            </div>
          </>
        ) : (
          <Forms />
        )}
      </Stack>
    </>
  );
};

export default Dashboard;
