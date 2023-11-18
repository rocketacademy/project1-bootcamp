import React, { useState } from "react";
import Greetings from "./greetings/Greetings";
import { Stack, Button, Box } from "@mui/material";

import Forms from "./forms/Forms";

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
            height: "50vh",
            margin: "0 auto",
            borderRadius: "20px",
            border: "2px solid orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            bgcolor: "#dbcbbe",
          }}
        >
          {!isTripFormShown && !getActivityData ? (
            <>
              <Stack spacing={5}>
                <p
                  style={{ fontSize: "18px", display: "block", margin: "auto" }}
                >
                  You have no ongoing activity. Add one to begin.
                </p>
                <div>
                  <Button
                    onClick={() => {
                      setIsTripFormShown(true);
                    }}
                    style={{
                      backgroundColor: "#ec407a",
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
