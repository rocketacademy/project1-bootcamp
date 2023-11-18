import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./App.css";

const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#e3dad5",
            minHeight: "90vh",

            margin: "30px",
            borderRadius: "40px",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              height: "20vh",
              margin: "20px",
              borderRadius: "50px",
              border: "2px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#dbcbbe",
            }}
          >
            <div className="left-leaf"></div>
            <div className="right-leaf"></div>
          </Box>
          <Box
            sx={{
              height: "80vh",
              margin: "20px",
              borderRadius: "50px",
              border: "2px solid green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              bgcolor: "#dbcbbe",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;
