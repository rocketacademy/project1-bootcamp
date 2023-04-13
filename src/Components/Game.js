import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

import arrayDeepCopy from "../Utils/arrayDeepCopy";
import getHint from "../Utils/getHint";
import solveSudoku from "../Utils/solveSudoku";
import createSudokuGrid from "../Utils/createSudokuGrid";
import checkWin from "../Utils/checkWin";
import checkBoard from "../Utils/checkBoard";

import NumberBar from "./NumberBar";
import Button from "./Button";
import DifficultyModal from "./DifficultyModal";
import GameOutcome from "./GameOutcome";
import Grid from "./Grid";
import InformationModal from "./InformationModal";
import NoSolutionModal from "./NoSolutionModal";

import { Trophy } from "react-bootstrap-icons";

const easyMaxEmptyCells = 30;
const mediumMaxEmptyCells = 40;
const hardMaxEmptyCells = 50;

const Game = () => {
  const [grid, setGrid] = useLocalStorage("currentGrid", null);
  const [startingGrid, setStartingGrid] = useLocalStorage("startingGrid", null);
  const [clickValue, setClickValue] = useLocalStorage("clickValue", 1);

  // Game Score logic
  const [gameMode, setGameMode] = useLocalStorage(
    "gameMode",
    mediumMaxEmptyCells
  );
  const [movesTaken, setMovesTaken] = useLocalStorage("movesTaken", 0);
  const [hintsTaken, setHintsTaken] = useLocalStorage("hintsTaken", 0);
  const [mistakesMade, setMistakesMade] = useLocalStorage("mistakesMade", 0);
  const [hasPlayerWon, setHasPlayerWon] = useLocalStorage("playerWon", false);
  const [clickSolve, setClickSolve] = useLocalStorage("clickSolve", false);

  // Logic for modal
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [showNoSolutionModal, setShowNoSolutionModal] = useState(false);
  const [showGameOutcome, setShowGameOutcome] = useState(false);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);

  const handleSolve = () => {
    let solvedBoard = arrayDeepCopy(grid);
    let solvedStatus = solveSudoku(solvedBoard);
    if (solvedStatus === false) {
      showNoSolutionModal((show) => !show);
      return;
    }

    let newHints = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j].value === 0) {
          newHints++;
          solvedBoard[i][j].isHinted = true;
          solvedBoard[i][j].isEditable = false;
        }
      }
    }

    setHintsTaken((hints) => hints + newHints);
    setHasPlayerWon(false);
    setShowGameOutcome(true);
    setClickSolve(true);
    setGrid(solvedBoard);
  };

  const handleHint = () => {
    // Check if player has won
    if (hasPlayerWon) return;

    // Get hint
    let hintResponse = getHint(grid);

    // Check if the grid cannot be solved
    if (hintResponse.solvedStatus === false) {
      setShowNoSolutionModal((show) => !show);
      return;
    }

    // Set the result board
    setGrid(hintResponse.board);

    // Increment number of hints taken
    setHintsTaken((hints) => hints + 1);

    // Check if the player has won
    let playerWon = checkWin(hintResponse.board);
    if (playerWon) {
      setHasPlayerWon(true);
      setShowGameOutcome(true);
    }
  };

  const handleNewGame = (maxEmptyCellsCount) => {
    // Wait for the function to return the grid
    let newSudokuGrid = createSudokuGrid(maxEmptyCellsCount);

    setStartingGrid(arrayDeepCopy(newSudokuGrid));
    setGrid(arrayDeepCopy(newSudokuGrid));

    // Set the game mode with maxEmptyCellsCount
    setGameMode(maxEmptyCellsCount);

    // Reset the values
    setMovesTaken(0);
    setHintsTaken(0);
    setMistakesMade(0);
    setHasPlayerWon(false);
    setClickSolve(false);

    // Close the difficulty modal
    setShowDifficultyModal((show) => !show);
  };

  const handleClearBoard = () => {
    setHasPlayerWon(false);
    setGrid(arrayDeepCopy(startingGrid));
  };

  const handleCellClick = (row, column, isEditable) => {
    if (!isEditable) return;

    // moves registered when the value is not 0
    if (clickValue !== 0) {
      setMovesTaken((moves) => moves + 1);
      if (!clickValue.isValid) setMistakesMade((mistakes) => mistakes + 1);
    }

    let newGrid = arrayDeepCopy(grid);
    newGrid[row][column].value = clickValue;

    // Marking the cell valid or invalid depending on the grid
    checkBoard(newGrid);

    // Checking if the player has won
    let playerWon = checkWin(newGrid);
    if (playerWon) {
      setHasPlayerWon(true);
      setShowGameOutcome(true);
    }

    // setting the value to the grid and also to the local storage
    setGrid(newGrid);
  };

  console.log("....");

  // If we do not have anything in the local storage
  if (grid == null && startingGrid == null) handleNewGame(gameMode);

  return (
    <div className="game-ctn">
      <header className="header-ctn">
        <h1
          onClick={() => setShowInformationModal((show) => !show)}
          className="main-title"
        >
          SUDOKU
        </h1>
      </header>
      {showInformationModal && (
        <InformationModal
          closeModal={() => setShowInformationModal((show) => !show)}
        />
      )}

      {showNoSolutionModal && (
        <NoSolutionModal
          closeModal={() => setShowNoSolutionModal((show) => !show)}
        />
      )}

      {showDifficultyModal && (
        <DifficultyModal
          closeModal={() => setShowDifficultyModal((show) => !show)}
          handleNewGame={handleNewGame}
          easyMaxEmptyCells={easyMaxEmptyCells}
          mediumMaxEmptyCells={mediumMaxEmptyCells}
          hardMaxEmptyCells={hardMaxEmptyCells}
        />
      )}

      {showGameOutcome && (
        <GameOutcome
          closeModal={() => setShowGameOutcome((show) => !show)}
          movesTaken={movesTaken}
          hintsTaken={hintsTaken}
          mistakesMade={mistakesMade}
          hasPlayerWon={hasPlayerWon}
          clickSolve={clickSolve}
          gameMode={gameMode}
          mediumMaxEmptyCells={mediumMaxEmptyCells}
          hardMaxEmptyCells={hardMaxEmptyCells}
        />
      )}
      <div className="action-ctn">
        <div className="left-action-ctn">
          <Button
            onClickAction={handleClearBoard}
            buttonStyle="btn-clear"
            text="Clear"
          ></Button>
          <Button
            onClickAction={handleSolve}
            buttonStyle="btn-solve"
            text="Solve"
          ></Button>
          <Button
            onClickAction={handleHint}
            buttonStyle="btn-hint"
            text="Hint"
          ></Button>
          <Button
            onClickAction={() => setShowDifficultyModal((show) => !show)}
            buttonStyle="btn-newgame"
            text="New Game"
          ></Button>
        </div>
        <div className="right-action-ctn">
          <button
            className="game-detail-btn btn-info"
            onClick={() => setShowGameOutcome((show) => !show)}
          >
            <Trophy size={20} className="info-icon" />
          </button>
        </div>
      </div>
      <div className="grid-ctn">
        <Grid className="grid" handleCellClick={handleCellClick} grid={grid} />
      </div>
      <NumberBar setClickValue={setClickValue} selected={clickValue} />
    </div>
  );
};

export default Game;
