import React from "react";
import "./App.css";
import HomePage from "./homepage";
import Basics from "./basics";
import Intervals from "./intervals";
import MajorScales from "./major-scales";
import MinorScales from "./minor-scales";
import CircleOfFifths from "./circle-of-fifths";

function App() {
  return (
    <div className="App">
      <HomePage id="Home" />
      <Basics />
      <Intervals />
      <MajorScales />
      <MinorScales />
      <CircleOfFifths />
    </div>
  );
}

export default App;
