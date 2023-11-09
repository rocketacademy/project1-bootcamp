import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AccountCircle } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c853",
    },
  },
});

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    if (username === "") {
      return;
    }
    // store username in local storage
    localStorage.setItem("user", JSON.stringify(username));
    navigate("/dashboard");
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData !== null) {
      setUsername(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <Stack spacing={4} direction="column">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
        >
          Hey there!
        </Typography>
        <Stack>
          <TextField
            placeholder="Your name goes here"
            value={username}
            onChange={handleChange}
            variant="outlined"
            sx={{ fontStyle: "italic" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            size="medium"
            onClick={handleClick}
            theme={theme}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
