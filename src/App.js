import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "./App.css";

const App = () => {
  return (
    <>
      <Container sx={{ minWidth: "95vw", minHeight: "70vh" }}>
        <Box
          sx={{
            minHeight: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="left-leaf"></div>
          <div className="right-leaf"></div>
        </Box>
        <Box
          sx={{
            minHeight: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 20px",
            // bgcolor: "#daa06d",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default App;
