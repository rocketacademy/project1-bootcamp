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
      </div>
    </>
  );
};

export default App;
