import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Game from "./Components/Game";

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="game-container">
          <Header />
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
