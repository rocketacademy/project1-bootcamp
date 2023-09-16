import React, { Component } from "react";
import Stock from "./Stock.js";
import Trading from "./Trading.js";
import Portfolio from "./Portfolio.js";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Stock />
        <Trading />
        <Portfolio />
      </div>
    );
  }
}

export default App;
