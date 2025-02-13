const readline = require("readline-sync");

const map = new Map();
const GameMap=new Map()

function makeBoard(n) {
  const colors = ["green", "blue", "red", "yellow", "orange"];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      map.set(`${i},${j}`, { hasQueen: false, color: randomColor });
      GameMap.set(`${i},${j}`, { hasQueen: false, color: randomColor });
    }
  }
}

function PrintBoard(n,map) {
  for (let i = 0; i < n; i++) {
    let row = "";
    console.log("________________________________________________________");

    for (let j = 0; j < n; j++) {
      const cell = map.get(`${i},${j}`);

      if (cell.hasQueen) {
        row += "Q"+cell.color.toUpperCase()[0].padEnd(8)+' ';
      } else {
        row += `${cell.color.toUpperCase()[0].padEnd(8)}`;
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

function PlacedQueens(row, n, map) {
  if (row === n) {
    PrintBoard(n, map);
    return true;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(row, col, map, n)) {
      map.set(`${row},${col}`, { hasQueen: true, color: map.get(`${row},${col}`).color });

      if (PlacedQueens(row + 1, n, map)) {
        return true;
      }

      map.set(`${row},${col}`, { hasQueen: false, color: map.get(`${row},${col}`).color });
    }
  }
  return false;
}

function StartGame(n, GameMap) {
  const rows = new Set();
  const cols = new Set();
  const colors = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let guess = readline.question(`Enter Queen position (row,col): `);
      let [row, col] = guess.split(",").map(Number);

      if (map.has(`${row},${col}`)) {
        let value = GameMap.get(`${row},${col}`);
        if (value.hasQueen) {
          console.log("Queen already placed at this position.");
        } else if (!isSafe(row, col, GameMap, n)) {
          console.log("Cannot place queen here due to row, column, or diagonal conflict.");
        } else {
          GameMap.set(`${row},${col}`, { hasQueen: true, color: value.color });
          rows.add(row);
          cols.add(col);
          colors.add(value.color);
          console.log("Queen placed!");
        }
      } else {
        console.log("Invalid position!");
      }
    }
    if (rows.size === n) {
      PrintBoard(n,GameMap);
      console.log("All queens placed!");
      return;
    }
  }
}

const n = parseInt(readline.question("Enter board size: "));
makeBoard(n);
PlacedQueens(0, n, map);
StartGame(n, GameMap);

// PrintBoard(n, GameMap);