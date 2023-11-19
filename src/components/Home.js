import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Stack, InputAdornment } from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!username) {
      return;
    }
    setUsername(username);

    // store username in local storage
    localStorage.setItem("user", JSON.stringify(username));
    navigate("/dashboard");
  };

  return (
    <>
      <Stack spacing={6}>
        <h2>Hello, welcome back!</h2>
        <Stack direction="row" spacing={2}>
          <TextField
            id="name-field"
            variant="outlined"
            placeholder="Name"
            style={{ border: "2px solid black" }}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={handleClick}
            style={{ backgroundColor: "#ec407a", color: "white" }}
            disableRipple
          >
            <EastIcon />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
