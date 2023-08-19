import React, { useState } from "react";
import ".//assets/App.css";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";

function App() {
  const [gameState, setGameState] = useState("STARTING");
  // Possible values: STARTING, GUESSING, CONFIRMING, SCORING, SCORING_LAST, GAME_OVER
  const [maxQuestionNum, setMaxQuestionNum] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        {gameState === "STARTING" && (
          <StartScreen
            setGameState={setGameState}
            setMaxQuestionNum={setMaxQuestionNum}
          />
        )}
        {gameState !== "STARTING" && (
          <GameScreen
            gameState={gameState}
            setGameState={setGameState}
            maxQuestionNum={maxQuestionNum}
          />
        )}
      </header>
    </div>
  );
}

export default App;
