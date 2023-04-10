// Checks for errors in user input
// If a number appears in a row/col more than once, add row/col index to wrongLines
const getWrongLines = (board, type) => {
  let wrongLines = new Set();

  for (let i = 0; i < 9; i++) {
    let dict = {};

    for (let j = 0; j < 9; j++) {
      let key;
      if (type === "horizontal") key = board[i][j].value;
      else key = board[j][i].value;

      if (key === 0) continue;

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1;
        if (dict[key] > 1) {
          wrongLines.add(i);
          break;
        }
      } else dict[key] = 1;
    }
  }
  return wrongLines;
};

// Check for errors in 3x3 squares
// If number appears in a square more than once, return false
const isSquareValid = (board, x0, y0) => {
  let dict = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let key = board[x0 + i][y0 + j].value;
      if (key === 0) continue;

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1;
        if (dict[key] > 1) {
          console.log(x0, y0);
          return false;
        }
      } else dict[key] = 1;
    }
  }
  return true;
};

// Return all squares that contain duplicate numbers
const getWrongSquares = (board) => {
  let wrongSquares = new Set();
  let squareValues = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 3 },
    2: { x: 0, y: 6 },
    3: { x: 3, y: 0 },
    4: { x: 3, y: 3 },
    5: { x: 3, y: 6 },
    6: { x: 6, y: 0 },
    7: { x: 6, y: 3 },
    8: { x: 6, y: 6 },
  };

  // We check every box
  for (let square = 0; square < 9; square++) {
    // Now check all cells of the selected square
    let x0 = squareValues[square].x;
    let y0 = squareValues[square].y;

    if (!isSquareValid(board, x0, y0)) {
      wrongSquares.add(square);
    }
  }

  return wrongSquares;
};

// Numbers squares from 0-8
const getSquareNumber = (x, y) => {
  let x0 = Math.floor(x / 3);
  let y0 = Math.floor(y / 3);
  let squareNumber = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ][x0][y0];
  return squareNumber;
};

// If there are duplicate numbers in any given row/col/square, the board is not valid
const checkBoard = (board) => {
  let wrongHorizontal = getWrongLines(board, "horizontal");
  let wrongVertical = getWrongLines(board, "vertical");
  let wrongSquares = getWrongSquares(board);

  console.log(getSquareNumber(1, 5));
  console.log(wrongSquares);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        wrongHorizontal.has(i) ||
        wrongVertical.has(j) ||
        wrongSquares.has(getSquareNumber(i, j))
      ) {
        board[i][j].isValid = false;
      } else {
        board[i][j].isValid = true;
      }
    }
  }
};

export default checkBoard;
