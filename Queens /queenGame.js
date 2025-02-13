const readline = require("readline-sync");

function createMapColorGenerate(colors) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const colorIndex = (i + j * 5) % colors.length;
      const color = colors[colorIndex];
      map.set(`${i},${j}`, { color, ContainsQueen: false });
      // map.set(`${colors[i]},${colors[j]}`,{queens:false})
    }
  }
}

const map = new Map();

function PrintColorMap(map) {
  for (let i = 0; i < 5; i++) {
    let row = "";
    console.log("________________________");
    for (let j = 0; j < 5; j++) {
      const cell = map.get(`${i},${j}`);
      if (cell.ContainsQueen) {
        row += "Q" + cell.color.toUpperCase()[0] + " ";
      } else {
        row += `${cell.color.toUpperCase()[0].padEnd(5)}`;
      }
    }
    console.log(row.trim());
  }
}

function StartGame(map) {
  const rows = new Set();
  const cols = new Set();
  const colors = new Set();
  const diagonals = new Set();
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let guess = readline.question(`Enter the Queens row and column`);
      let [row, col] = guess.split(",");
      // console.log([row,col])
      if (map.has(`${row},${col}`)) {
        let value = map.get(`${row},${col}`);
        if (value.ContainsQueen) {
          console.log("Queen already present at this position");
        } else if (
          rows.has(row) ||
          cols.has(col) ||
          colors.has(value.color) ||
          diagonals.has(diagonals)
        ) {
          console.log(
            "Queen cnanot placed here due to row ,col and color conflicts"
          );
        } else {
          map.set(`${row},${col}`, { color: value.color, ContainsQueen: true });
          rows.add(row);
          cols.add(col);
          colors.add(value.color);
          console.log("Queen placed at this position");
        }
      } else {
        console.log("Invalid position!");
      }
      if (rows.size === 5) {
        PrintColorMap(map);
        console.log("All queens placed");
        return;
      }
    }
  }
  // PrintColorMap(map)
}

function isValidPlace(queenplaced) {
  for (let i = 0; i < queenplaced.length; i++) {
    for (let j = i + 1; j < queenplaced.length; j++) {
      if (
        queenplaced[i] == queenplaced[j] ||
        Math.abs(queenplaced[i] - queenplaced[j] === Math.abs[i - j])
      ) {
        return false;
      }
    }
  }
  return true;
}

const colors = ["green", "blue", "red", "yellow", "orange"];
createMapColorGenerate(colors);
StartGame(map);
// PrintColorMap(map);
// console.log(map);
