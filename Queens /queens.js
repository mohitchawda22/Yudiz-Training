const readline = require("readline-sync");

function createMap() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      map.set(`${i},${j}`, { color: "red", queens: false });
    }
  }
}
const map = new Map();

// const colors=[
//   ["blue","blue","green","green","green"]
//   ["blue","blue","green","green","green"],
//   ["blue","blue","yellow","yellow","orange"],
//   ["red","red","yellow","yellow","orange"],
//   ["red","red","yellow","yellow","orange"],
// ]

const colors = ["green", "red", "blue", "yellow", "orange"];

function PrintGame(map) {
  for (let i = 0; i < 5; i++) {
    let row = "";
    console.log("____________");

    for (let j = 0; j < 5; j++) {
      const cell = map.get(`${i},${j}`);
      if (cell.queens) {
        row += "Q ";
      } else {
        switch (cell.color) {
          case "red":
            row += "R ";
            break;
          case "blue":
            row += "B ";
            break;
          case "green":
            row += "G ";
            break;
          case "yellow":
            row += "Y ";
            break;
          case "orange":
            row += "O ";
            break;
          default:
            row += "- ";
            break;
        }
      }
    }
    console.log(row.trim());
  }
}
function randomColor(colors) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const key = `${i},${j}`;
      const colorIndex = (i * 5 + j) % colors.length;
      const color = colors[colorIndex];
      map.set(key, { color });
    }
  }
}
{
  map.set("0,0", { color: "blue", queens: false });
  map.set("0,1", { color: "blue", queens: false });
  map.set("0,2", { color: "green", queens: false });
  map.set("0,3", { color: "green", queens: false });
  map.set("0,4", { color: "green", queens: false });
  map.set("1,0", { color: "blue", queens: false });

  map.set("1,1", { color: "blue", queens: false });
  map.set("1,2", { color: "green", queens: false });
  map.set("1,3", { color: "green", queens: false });
  map.set("1,4", { color: "green", queens: false });

  map.set("2,0", { color: "blue", queens: false });
  map.set("2,1", { color: "blue", queens: false });
  map.set("2,2", { color: "yellow", queens: false });
  map.set("2,3", { color: "yellow", queens: false });
  map.set("2,4", { color: "orange", queens: false });

  map.set("3,0", { color: "red", queens: false });
  map.set("3,1", { color: "red", queens: false });
  map.set("3,2", { color: "yellow", queens: false });
  map.set("3,3", { color: "yellow", queens: false });
  map.set("3,4", { color: "orange", queens: false });

  map.set("4,0", { color: "red", queens: false });
  map.set("4,1", { color: "red", queens: false });
  map.set("4,2", { color: "yellow", queens: false });
  map.set("4,3", { color: "yellow", queens: false });
  map.set("4,4", { color: "orange", queens: false });
}

function PlacedQueens() {
  const rows = new Set();
  const cols = new Set();
  const colors = new Set();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let guess = readline.question(`Enter the Queens row and columns:`);
      let [row, col] = guess.split(",");
        // console.log([row,col]);

      if (map.has(`${row},${col}`)) {
        let value = map.get(`${row},${col}`);
        // console.log(value);

        if (value.queens) {
          console.log("Queen already placed at this position");
        } else if (rows.has(row) || cols.has(col) || colors.has(value.color)) {
          console.log("Cannot place queen here due to row, column, or color conflict");
        } else {
          map.set(`${row},${col}`, { color: value.color, queens: true });
          rows.add(row);
          cols.add(col);
          colors.add(value.color);
          console.log("Queen placed at this position");
        }
      } else {
        console.log("Invalid position");
      }

      if (rows.size === 5) {
        PrintGame(map);
        console.log("All queens placed");
        return;
      }
    }
  }
  PrintGame(map);
}
//  console.log(map);
randomColor()
console.log(map);

// PlacedQueens();
// PrintGame(map);
