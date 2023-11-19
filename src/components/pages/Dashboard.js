import React, { useState } from "react";
import Greetings from "../greetings/Greetings";
import { Stack, Button, Box } from "@mui/material";

import Forms from "../forms/Forms";

const Dashboard = () => {
  const [isTripFormShown, setIsTripFormShown] = useState(false);

  const username = JSON.parse(localStorage.getItem("user"));

  // get tripname and companions details
  const getActivityData = JSON.parse(localStorage.getItem("activityDetails"));

  return (
    <>
      <Stack spacing={1}>
        <Greetings username={username} />
        <Box
          sx={{
            margin: "auto",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {!isTripFormShown && !getActivityData ? (
            <>
              <Stack spacing={5}>
                <p style={{ fontSize: "18px" }}>
                  You have no ongoing activity. Add one to begin.
                </p>
                <div>
                  <Button
                    onClick={() => {
                      setIsTripFormShown(true);
                    }}
                    style={{
                      backgroundColor: "#693237",
                      color: "white",
                      fontWeight: "bold",
                      width: "140px",
                      display: "block",
                      margin: "auto",
                    }}
                    disableRipple
                  >
                    Add Activity
                  </Button>
                </div>
              </Stack>
            </>
          ) : (
            <Forms />
          )}
        </Box>
      </Stack>
    </>
  );
};

export default Dashboard;
