import React, { useState } from "react";
import Greetings from "./Greetings";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Forms from "./Forms";

const Dashboard = () => {
  const [showCreateTripForm, setShowCreateTripForm] = useState(false);

  const navigate = useNavigate();

  const username = JSON.parse(localStorage.getItem("user"));

  const getTripData = JSON.parse(localStorage.getItem("tripDetails"));

  return (
    <>
      <Stack spacing={8}>
        <Greetings username={username} />
        <Stack spacing={6}>
          {!showCreateTripForm && !getTripData ? (
            <>
              <Button
                onClick={() => {
                  setShowCreateTripForm(true);
                }}
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "#c6ff00",
                  color: "black",
                  fontWeight: "bold",
                }}
                disableRipple
              >
                Add a Trip
              </Button>
            </>
          ) : (
            <Forms />
          )}
          <Button
            onClick={() => {
              navigate("/past-trips");
            }}
            variant="contained"
            size="small"
            color="primary"
            disableRipple
          >
            Browse Past Trips
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;

// no tripname no transactions = add a trip and browse past trips buttons

// once i click onto add a trip, createform appears and create a trip button appears
//
//
