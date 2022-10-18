import React from "react";
import { useState } from "react";
import "./App.css";
import FirstPage from "./first-page";
import Basics from "./basics";
import "bootstrap/dist/css/bootstrap.min.css";
import Intervals from "./intervals";
import MajorScales from "./major-scales";
import MinorScales from "./minor-scales";
import CircleOfFifths from "./circle-of-fifths";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      {pageNumber === 1 && <FirstPage setPageNumber={setPageNumber} />}
      {pageNumber === 2 && <Basics setPageNumber={setPageNumber} />}
      {pageNumber === 3 && <Intervals setPageNumber={setPageNumber} />}
      {pageNumber === 4 && <MajorScales setPageNumber={setPageNumber} />}
      {pageNumber === 5 && <MinorScales setPageNumber={setPageNumber} />}
      {pageNumber === 6 && <CircleOfFifths setPageNumber={setPageNumber} />}
    </div>
  );
}

export default App;
