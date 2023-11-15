import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddTransactionsForm from "./components/AddTransactionsForm";
import PastTrips from "./components/PastTrips";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            backgroundColor: "#f48fb1",
            width: "100vw",
            height: "30vh",
            borderRadius: "0px 0px 0px 150px",
          }}
        ></div>
        <p className="hello"></p>
        <div className="form-wrapper ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="add-transactions-form"
              element={<AddTransactionsForm />}
            />
            <Route path="past-trips" element={<PastTrips />} />
          </Routes>
        </div>
        <div
          style={{
            backgroundColor: "#fce4ec",
            width: "100vw",
            height: "30vh",
            borderRadius: "0px 150px 0px 0px",
          }}
        ></div>
      </div>
    </>
  );
};

export default App;
