import arrayDeepCopy from "./arrayDeepCopy";
import solveSudoku from "./solveSudoku";

const getHint = (board) => {
  let solvedBoard = arrayDeepCopy(board);
  let solvedStatus = solveSudoku(solvedBoard);

  //  If no solution is found
  if (solvedStatus === false) {
    return { board: null, solvedStatus: false };
  }

  // If solution is found
  // Find all empty cells from the orginal given board
  let emptyCellPositionList = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j].value === 0) {
        emptyCellPositionList.push([i, j]);
      }
    }
  }

  // Select random element from the empty cells list
  const randomIndex = Math.floor(Math.random() * emptyCellPositionList.length);
  let row = emptyCellPositionList[randomIndex][0];
  let col = emptyCellPositionList[randomIndex][1];

  // Create new board from the data
  // Make new cell and replace the empty value with the hint
  let result = arrayDeepCopy(board);
  result[row][col].value = solvedBoard[row][col].value;
  result[row][col].isHinted = true;
  result[row][col].isEditable = false;

  return { board: result, solvedStatus: true };
};

export default getHint;
