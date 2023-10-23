/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let rook = [];
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "R") {
        rook[0] = i;
        rook[1] = j;
        break;
      }
    }

  let ans = 0;
  // u to d
  for (let i = rook[0]; i < board.length; i++) {
    if (board[i][rook[1]] == "B") {
      break;
    }
    if (board[i][rook[1]] == "p") {
      ans++;
      break;
    }
  }

  // d to u
  for (let i = rook[0]; i >= 0; i--) {
    if (board[i][rook[1]] == "B") {
      break;
    }
    if (board[i][rook[1]] == "p") {
      ans++;
      break;
    }
  }

  // l to r
  for (let i = rook[1]; i < board.length; i++) {
    if (board[rook[0]][i] == "B") {
      break;
    }
    if (board[rook[0]][i] == "p") {
      ans++;
      break;
    }
  }

  // r to l
  for (let i = rook[1]; i >= 0; i--) {
    if (board[rook[0]][i] == "B") {
      break;
    }
    if (board[rook[0]][i] == "p") {
      ans++;
      break;
    }
  }
  return ans;
};

const board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  ["p", "p", ".", "R", ".", "p", "B", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

const ans = numRookCaptures(board);
console.log(ans);
