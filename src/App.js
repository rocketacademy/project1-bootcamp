import React, { useState } from "react";
import ".//assets/App.css";
import { MantineProvider } from "@mantine/core";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";

const theme = {
  fontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.125rem",
    lg: "1.625rem",
    xl: "1.875rem",
  },
};

function App() {
  const [gameState, setGameState] = useState("STARTING");
  // Possible values: STARTING, GUESSING, CONFIRMING, SCORING, SCORING_LAST, GAME_OVER
  const [maxQuestionNum, setMaxQuestionNum] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <MantineProvider theme={theme}>
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
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
