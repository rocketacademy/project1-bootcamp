import React from "react";
import "./App.css";
import Tiles from "./Components/Tiles";

class App extends React.Component {
  // handleClick = (e) => {
  //   console.log("welcome!");
  //   console.log(e.target);
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Waffle</h1>
          <Tiles />
        </header>
      </div>
    );
  }
}

export default App;
