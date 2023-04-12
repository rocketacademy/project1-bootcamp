import React from "react";
import { TrophyFill } from "react-bootstrap-icons";

class GameOutcome extends React.Component {
  render() {
    const {
      closeModal,
      movesTaken,
      hintsTaken,
      mistakesMade,
      hasPlayerWon,
      clickSolve,
      gameMode,
      mediumMaxEmptyCells,
      hardMaxEmptyCells,
    } = this.props;

    let gameModeName = "Easy";
    if (gameMode === mediumMaxEmptyCells) gameModeName = "Medium";
    else if (gameMode === hardMaxEmptyCells) gameModeName = "Hard";

    return (
      <div className="gameoutcome-ctn">
        <div className="modal-ctn">
          <div className="modal-close-btn-ctn">
            <button onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-title">
            {movesTaken === 0 && ""}
            {movesTaken > 0 && !hasPlayerWon && !clickSolve && (
              <p>You can do it!</p>
            )}
            {clickSolve && <p>Better luck next time.</p>}
            {hasPlayerWon && !clickSolve && <p>Genius! You did it!</p>}
            <br />
            <h2>
              <TrophyFill fill="#F5BB00" size={24} />
              <span id="stats-title">Your Stats</span>
              <TrophyFill fill="#F5BB00" size={24} />
            </h2>
          </div>
          <div className="modal-body">
            <p>
              Difficulty: <span id="accent">{gameModeName}</span>
            </p>
            <p>
              Moves: <span id="accent">{movesTaken}</span>
            </p>
            <p>
              Mistakes: <span id="accent">{mistakesMade}</span>
            </p>
            <p>
              Hints: <span id="accent">{hintsTaken}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOutcome;
