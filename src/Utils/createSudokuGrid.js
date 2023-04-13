// Check if cell is valid
// It shouldn't match any numbers on the same row, col, or square
const isValidCell = (row, col, value, board) => {
  const cellValue = value;

  // Check cells on same row
  // If any cell on same row has same value, cell is not valid
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === cellValue) return false;
  }

  // Check cells on same col
  // If any cell on same col has same value, cell is not valid
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === cellValue) return false;
  }

  // Check 3x3 squares
  // We only have to check the diagonal of the square
  // If any cell in same square has same value, cell is not valid
  let x0 = Math.floor(row / 3) * 3;
  let y0 = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x0 + i][y0 + j] === cellValue) return false;
    }
  }

  return true;
};

// Count the number of correct numbers on board
const countSudokuSolution = (board) => {
  //   console.log(board);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        let count = 0;
        for (let k = 1; k <= 9; k++) {
          if (isValidCell(i, j, k, board)) {
            board[i][j] = k;
            count += countSudokuSolution(board);
            board[i][j] = 0;
          }
        }
        return count;
      }
    }
  }
  return 1;
};

// Solve a random board
const solveRandomSudoku = (board) => {
  //   console.log(board);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          let num = Math.floor(Math.random() * 9) + 1;
          if (isValidCell(i, j, num, board)) {
            board[i][j] = num;
            if (solveRandomSudoku(board)) return true;
            board[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

// Get a sudoku grid
// A sudoku grid is made up of 9 3x3 boxes that together form a 9x9 board
// We can visualise it as an array made up of 9 array "rows" (a 2D array)
const getSudokuGrid = (maxEmptyCellsCount) => {
  let sudokuGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  solveRandomSudoku(sudokuGrid);

  // The min number of filled cells so that a unique solution exists is 17
  let emptyCells = 0;
  let shuffledCells = [];
  for (let i = 0; i < 81; i++) {
    shuffledCells.push(i);
  }

  // Shuffle the array to get random ordering of elements
  shuffledCells.sort(() => Math.random() - 0.5);

  let index = 0;
  while (emptyCells <= maxEmptyCellsCount && index < 81) {
    if (shuffledCells.length === 0) break;

    let cell = shuffledCells[index];
    index++;

    let i = Math.floor(cell / 9);
    let j = cell % 9;

    let value = sudokuGrid[i][j];
    sudokuGrid[i][j] = 0;

    let count = countSudokuSolution(sudokuGrid);

    if (count === 1) emptyCells++;
    else sudokuGrid[i][j] = value;
  }

  return sudokuGrid;
};

// Get a valid cell
const getCell = (row, column, value, isEditable) => {
  return {
    row: row,
    column: column,
    value: value,
    isValid: true,
    isEditable: isEditable,
    isHinted: false,
  };
};

// Creates random sudoku grid with 9 inner "row" arrays in a single array and min 17 empty cells
// If cell is empty, let it be editable so users can input a value
const createSudokuGrid = (maxEmptyCellsCount) => {
  const numberGrid = getSudokuGrid(maxEmptyCellsCount);
  let sudokuGrid = [];

  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      let isEditable = numberGrid[i][j] === 0;
      let cell = getCell(i, j, numberGrid[i][j], isEditable);
      row.push(cell);
    }
    sudokuGrid.push(row);
  }

  return sudokuGrid;
};

export default createSudokuGrid;
