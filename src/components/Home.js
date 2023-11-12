import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Stack, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (username === "") {
      return;
    }
    setUsername(username);
    // store username in local storage
    localStorage.setItem("user", JSON.stringify(username));

    navigate("/dashboard");
  };

  return (
    <>
      <Stack spacing={3}>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
            letterSpacing: "4px",
          }}
        >
          Hey there,
        </p>
        <Stack direction="row" spacing={2}>
          <TextField
            placeholder="Your name goes here"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            style={{
              backgroundColor: "white",
              fontStyle: "italic",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Button
            size="small"
            onClick={handleClick}
            style={{ backgroundColor: "#ffc400", color: "black" }}
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
