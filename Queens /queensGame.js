const readline = require("readline-sync");

const map = new Map();
const GameMap = new Map();
const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function assignColors(i, j, n) {
  const colorIndex = (i + j) % colors.length;
  return { hasQueen: false, color: colors[colorIndex] };
}

function makeBoard(n) {
  shuffleArray(colors);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cell = assignColors(i, j, n);
      map.set(`${i},${j}`, cell);
      GameMap.set(`${i},${j}`, cell);
    }
  }
}

function PrintBoard(n, map) {
  for (let i = 0; i < n; i++) {
    let row = "";
    console.log("________________________________________________________");

    for (let j = 0; j < n; j++) {
      const cell = map.get(`${i},${j}`);

      if (cell.hasQueen) {
        row += "♛" + cell.color + "   ";
      } else {
        row += cell.color + "   ";
      }
    }
    console.log(row);
  }
  console.log("------------------------------------------------------");
}

function isSafe(row, col, map, n) {
  for (let i = 0; i < row; i++) {
    if (map.get(`${i},${col}`).hasQueen) return false;
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (map.get(`${i},${j}`).hasQueen) return false;
  }
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (map.get(`${i},${j}`).hasQueen) return false;
  }
  return true;
}

function overWiteColor(row, col, queenColor, map, n) {

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
    [1, 1], // diagonal down-right
    [1, -1], // diagonal down-left
    [-1, 1], // diagonal up-right
    [-1, -1], // diagonal up-left
  ];
  map.set(`${row},${col}`, {
    hasQueen: true,
    color: queenColor,
  });
  for (const [dx, dy] of directions) {
    const x = row + dx;
    const y = col + dy;

    if (x >= 0 && x < n && y >= 0 && y < n) {
      const cell = map.get(`${x},${y}`);
      if (!cell.hasQueen) {
        map.set(`${x},${y}`, {
          hasQueen: false,
          color: queenColor,
        });
      }
    }
  }
}
function PlacedQueens(row, n, map) {
  if (row === n) {
    console.log(
      "===============This is one of the solution if you want to learn that so give this output:============="
    );
    PrintBoard(n, map);
    return true;
  }
  let columns = [];
  for (let i = 0; i < n; i++) {
    columns.push(i);
  }
  shuffleArray(columns);

  for (let col of columns) {
    if (isSafe(row, col, map, n)) {
      const color = colors[row % colors.length];
      map.set(`${row},${col}`, { hasQueen: true, color: color });
      overWiteColor(row, col, color, map, n);
      if (PlacedQueens(row + 1, n, map)) {
        return true;
      }
      const resetColor = colors[(row + col) % colors.length];
      map.set(`${row},${col}`, { hasQueen: false, color: resetColor });
      overWiteColor(row, col, resetColor, map, n);
    }
  }
  return false;
}

function StartGame(n, GameMap) {
  const rows = new Set();
  const cols = new Set();
  const colorsSet = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let guess = readline.question(`Enter Queen position (row,col): `);
      let [row, col] = guess.split(",").map(Number);

      if (map.has(`${row},${col}`)) {
        let value = GameMap.get(`${row},${col}`);
        if (value.hasQueen) {
          console.log("Queen already placed at this position.");
        } else if (!isSafe(row, col, GameMap, n)) {
          console.log(
            "Cannot place queen here due to row, column, or diagonal conflict."
          );
        } else {
          const colorIndex = (row + col) % colors.length; // Assign color based on row and column index
          const color = colors[colorIndex];
          GameMap.set(`${row},${col}`, { hasQueen: true, color: color });
          overWiteColor(row, col, color, GameMap, n);
          rows.add(row);
          cols.add(col);
          colorsSet.add(value.color);
          console.log("Queen placed!");
        }
      } else {
        console.log("Invalid position!");
      }
    }
    if (rows.size === n) {
      PrintBoard(n, GameMap);
      console.log("All queens placed!");
      return;
    }
  }
}

const n = parseInt(readline.question("Enter board size: "));
makeBoard(n);
PlacedQueens(0, n, map);
StartGame(n, GameMap);
// PrintBoard(n, map)
// PrintBoard(n, GameMap);
