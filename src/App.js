import React from "react";
import "./App.css";
import Homepage from "./homepage";
import Basics from "./basics";
import Intervals from "./intervals";
import MajorScales from "./major-scales";
import MinorScales from "./minor-scales";
import CircleOfFifths from "./circle-of-fifths";

function App() {
  // const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      <Homepage />
      <Basics />
      <Intervals />
      <MajorScales />
      <MinorScales />
      <CircleOfFifths />
    </div>
  );
}

export default App;
