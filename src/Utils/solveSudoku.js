const isValidCell = (row, col, value, board) => {
  const cellValue = value;

  for (let i = 0; i < 9; i++) {
    if (board[row][i].value === cellValue) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col].value === cellValue) return false;
  }

  let x0 = Math.floor(row / 3) * 3;
  let y0 = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x0 + i][y0 + j].value === cellValue) return false;
    }
  }

  return true;
};

// Users have option to "give up" if they can't solve the puzzle by clicking the Solve button
const solveSudoku = (board) => {
  //   console.log(board);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j].value === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValidCell(i, j, k, board)) {
            board[i][j].value = k;
            if (solveSudoku(board)) return true;
            board[i][j].value = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

export default solveSudoku;
