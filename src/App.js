import React from "react";
import "./App.css";
import Gameboard from "./GameBoard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gameboard />
        </header>
      </div>
    );
  }
}

export default App;
