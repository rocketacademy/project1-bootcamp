import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Game from "./Components/Game";
import Leaderboard from "./Components/Leaderboard";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      scoreboard: [
        { easy: "easy", score: 0 },
        { medium: "medium", score: 0 },
        { hard: "hard", score: 0 },
      ],
    };
  }

  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="game-container">
                <Game />
              </div>
            }
          />

          <Route
            path="leaderboard"
            element={<Leaderboard/>}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
