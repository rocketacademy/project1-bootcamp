import React from "react";
import "./App.css";
import Tiles from "./Components/Tiles";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WAFFLE</h1>
          <Tiles />
        </header>
      </div>
    );
  }
}

export default App;
