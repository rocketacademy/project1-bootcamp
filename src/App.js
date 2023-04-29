import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Alert,
  Home,
  Log,
  Welcome,
  Medicine,
  Mood,
  Notification,
  Profile,
  Registration,
  Start,
  Login,
} from "./pages";

import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // const [users, setUsers] = useLocalStorage("users", []);

  // setUsers([...users, "Yuji"])

  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ""}>
        <div>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/log" element={<Log />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
