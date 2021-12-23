// Word Search II Problem Attempt

/**
  Input
  [["a", "b"], ["a", "a"]]
  ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]
  Output
  ["aba", "baa", "aaab", "aaa"]
  Expected
  ["aba", "aaa", "aaab", "baa", "aaba"]
**/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  var words_found = [];

  for (var i = 0; i < words.length; i++) {
    var thisWord = words[i];

    if (searchAdjacentForNextLetter(undefined, undefined, thisWord, board, getMatrixCopy(board))) {
      words_found.push(thisWord);
    }
  }

  return words_found;
};

var searchAdjacentForNextLetter = function (startRow, startCol, remainingLetters, board, usedCells) {
  if (remainingLetters.length === 0) {
    return true
  }

  var usedCells = getMatrixCopy(usedCells);
  var nextLetter = remainingLetters[0];

  // Start searching from coordinates
  if (startRow === undefined && startCol === undefined) {
    for (var r = 0; r < board.length; r++) {
      for (var c = 0; c < board[0].length; c++) {
        if (cellLetterIsValid(r, c, nextLetter, board, usedCells)) {
          usedCells[r][c] = 1;

          if (searchAdjacentForNextLetter(r, c, remainingLetters.slice(1), board, usedCells)) {
            return true
          }
        }
      }

    }
  } else {
    var coordsToCheck = [[startRow - 1, startCol], [startRow + 1, startCol], [startRow, startCol - 1], [startRow, startCol + 1]];

    // Iterate through the adjacent cells
    for (var d = 0; d < coordsToCheck.length; d++) {
      const [r, c] = coordsToCheck[d]

      if (cellLetterIsValid(r, c, nextLetter, board, usedCells)) {
        usedCells[r][c] = 1;

        if (remainingLetters.length > 1) {
          if (searchAdjacentForNextLetter(r, c, remainingLetters.slice(1), board, usedCells)) {
            return true
          }
        } else {
          return true
        }
      }
    }

  }

  return false
}

var getMatrixCopy = function (board) {
  var newBoard = [];

  if (board[0] === undefined) {
    return newBoard;
  }

  for (var r = 0; r < board.length; r++) {
    var thisRow = [];

    for (var c = 0; c < board[0].length; c++) {
      thisRow.push(board[r][c])
    }

    newBoard.push(thisRow);
  }

  return newBoard
};

var cellLetterIsValid = function (row, col, targetLetter, board, usedCells) {
  const validCoords = row >= 0 && row < board.length && col >= 0 && col < board[0].length;

  return validCoords && board[row][col] === targetLetter && typeof usedCells[row][col] === "string"
};