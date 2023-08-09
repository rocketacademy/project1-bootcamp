import React from "react";
import ".//assets/App.css";
import GameScreen from "./components/GameScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameScreen />
      </header>
    </div>
  );
}

export default App;
