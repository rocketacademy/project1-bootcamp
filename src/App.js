import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="app-header">
          <div className="app-logo-wrapper">
            <div className="left-leaf"></div>
            <div className="right-leaf"></div>
          </div>
        </div>

        <div className="form-wrapper">
          <div style={{ margin: "auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
