const readline = require("readline-sync");

// // // // function createMap() {
// // // //   for (let i = 0; i < 5; i++) {
// // // //     for (let j = 0; j < 5; j++) {
// // // //       map.set(`${i},${j}`, { color: "red", queens: false });
// // // //     }
// // // //   }
// // // // }
// // // // const map = new Map();

// // // // // const colors=[
// // // // //   ["blue","blue","green","green","green"]
// // // // //   ["blue","blue","green","green","green"],
// // // // //   ["blue","blue","yellow","yellow","orange"],
// // // // //   ["red","red","yellow","yellow","orange"],
// // // // //   ["red","red","yellow","yellow","orange"],
// // // // // ]

// // // // const colors = ["green", "red", "blue", "yellow", "orange"];

// // // // function PrintGame(map) {
// // // //   for (let i = 0; i < 5; i++) {
// // // //     let row = "";
// // // //     console.log("____________");

// // // //     for (let j = 0; j < 5; j++) {
// // // //       const cell = map.get(`${i},${j}`);
// // // //       if (cell.queens) {
// // // //         row += "Q ";
// // // //       } else {
// // // //         switch (cell.color) {
// // // //           case "red":
// // // //             row += "R ";
// // // //             break;
// // // //           case "blue":
// // // //             row += "B ";
// // // //             break;
// // // //           case "green":
// // // //             row += "G ";
// // // //             break;
// // // //           case "yellow":
// // // //             row += "Y ";
// // // //             break;
// // // //           case "orange":
// // // //             row += "O ";
// // // //             break;
// // // //           default:
// // // //             row += "- ";
// // // //             break;
// // // //         }
// // // //       }
// // // //     }
// // // //     console.log(row.trim());
// // // //   }
// // // // }
// // // // function randomColor(colors) {
// // // //   for (let i = 0; i < 5; i++) {
// // // //     for (let j = 0; j < 5; j++) {
// // // //       const key = `${i},${j}`;
// // // //       const colorIndex = (i * 5 + j) % colors.length;
// // // //       const color = colors[colorIndex];
// // // //       map.set(key, { color });
// // // //     }
// // // //   }
// // // // }
// // // // {
// // // //   map.set("0,0", { color: "blue", queens: false });
// // // //   map.set("0,1", { color: "blue", queens: false });
// // // //   map.set("0,2", { color: "green", queens: false });
// // // //   map.set("0,3", { color: "green", queens: false });
// // // //   map.set("0,4", { color: "green", queens: false });
// // // //   map.set("1,0", { color: "blue", queens: false });

// // // //   map.set("1,1", { color: "blue", queens: false });
// // // //   map.set("1,2", { color: "green", queens: false });
// // // //   map.set("1,3", { color: "green", queens: false });
// // // //   map.set("1,4", { color: "green", queens: false });

// // // //   map.set("2,0", { color: "blue", queens: false });
// // // //   map.set("2,1", { color: "blue", queens: false });
// // // //   map.set("2,2", { color: "yellow", queens: false });
// // // //   map.set("2,3", { color: "yellow", queens: false });
// // // //   map.set("2,4", { color: "orange", queens: false });

// // // //   map.set("3,0", { color: "red", queens: false });
// // // //   map.set("3,1", { color: "red", queens: false });
// // // //   map.set("3,2", { color: "yellow", queens: false });
// // // //   map.set("3,3", { color: "yellow", queens: false });
// // // //   map.set("3,4", { color: "orange", queens: false });

// // // //   map.set("4,0", { color: "red", queens: false });
// // // //   map.set("4,1", { color: "red", queens: false });
// // // //   map.set("4,2", { color: "yellow", queens: false });
// // // //   map.set("4,3", { color: "yellow", queens: false });
// // // //   map.set("4,4", { color: "orange", queens: false });
// // // // }

// // // // function PlacedQueens() {
// // // //   const rows = new Set();
// // // //   const cols = new Set();
// // // //   const colors = new Set();

// // // //   for (let i = 0; i < 5; i++) {
// // // //     for (let j = 0; j < 5; j++) {
// // // //       let guess = readline.question(`Enter the Queens row and columns:`);
// // // //       let [row, col] = guess.split(",");
// // // //         // console.log([row,col]);

// // // //       if (map.has(`${row},${col}`)) {
// // // //         let value = map.get(`${row},${col}`);
// // // //         // console.log(value);

// // // //         if (value.queens) {
// // // //           console.log("Queen already placed at this position");
// // // //         } else if (rows.has(row) || cols.has(col) || colors.has(value.color)) {
// // // //           console.log("Cannot place queen here due to row, column, or color conflict");
// // // //         } else {
// // // //           map.set(`${row},${col}`, { color: value.color, queens: true });
// // // //           rows.add(row);
// // // //           cols.add(col);
// // // //           colors.add(value.color);
// // // //           console.log("Queen placed at this position");
// // // //         }
// // // //       } else {
// // // //         console.log("Invalid position");
// // // //       }

// // // //       if (rows.size === 5) {
// // // //         PrintGame(map);
// // // //         console.log("All queens placed");
// // // //         return;
// // // //       }
// // // //     }
// // // //   }
// // // //   PrintGame(map);
// // // // }
// // // // //  console.log(map);
// // // // randomColor()
// // // // console.log(map);

// // // // // PlacedQueens();
// // // // // PrintGame(map);

// // // // const readline = require("readline-sync");

// // // // const map = new Map();
// // // // const GameMap = new Map();
// // // // const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

// // // // function assignDifferentColors(array) {
// // // //   for (let i = array.length - 1; i > 0; i--) {
// // // //     const j = Math.floor(Math.random() * (i + 1));
// // // //     [array[i], array[j]] = [array[j], array[i]];
// // // //   }
// // // // }

// // // // function assignColors(i, j, n) {
// // // //   const colorIndex = (i + j) % colors.length; // Assign color based on row and column index
// // // //   return { hasQueen: false, color: colors[colorIndex] };
// // // // }

// // // // function makeBoard(n) {
// // // //   assignDifferentColors(colors);
// // // //   for (let i = 0; i < n; i++) {
// // // //     for (let j = 0; j < n; j++) {
// // // //       const cell = assignColors(i, j, n);
// // // //       map.set(`${i},${j}`, cell);
// // // //       GameMap.set(`${i},${j}`, cell);
// // // //     }
// // // //   }
// // // // }

// // // // function PrintBoard(n, map) {
// // // //   for (let i = 0; i < n; i++) {
// // // //     let row = "";
// // // //     console.log("________________________________________________________");

// // // //     for (let j = 0; j < n; j++) {
// // // //       const cell = map.get(`${i},${j}`);

// // // //       if (cell.hasQueen) {
// // // //         row += "Q" + cell.color.padEnd(8);
// // // //       } else {
// // // //         row += cell.color.padEnd(8);
// // // //       }
// // // //     }
// // // //     console.log(row);
// // // //   }
// // // //   console.log("------------------------------------------------------");
// // // // }

// // // // function isSafe(row, col, map, n) {
// // // //   for (let i = 0; i < row; i++) {
// // // //     if (map.get(`${i},${col}`).hasQueen) return false;
// // // //   }
// // // //   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
// // // //     if (map.get(`${i},${j}`).hasQueen) return false;
// // // //   }
// // // //   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
// // // //     if (map.get(`${i},${j}`).hasQueen) return false;
// // // //   }
// // // //   return true;
// // // // }

// // // // function overWiteColor(row, col, color, map, n) {
// // // //   const directions = [
// // // //     [0, 1],
// // // //     [1, 0],
// // // //     [0, -1],
// // // //     [-1, 0], // Horizontal and vertical // Diagonals
// // // //   ];

// // // //   for (const [dx, dy] of directions) {
// // // //     let x = row + dx;
// // // //     let y = col + dy;

// // // //     while (x >= 0 && x < n && y >= 0 && y < n) {
// // // //       const cell = map.get(`${x},${y}`);
// // // //       if (!cell.hasQueen) {
// // // //         map.set(`${x},${y}`, { hasQueen: false, color: color });
// // // //       }
// // // //       x += dx;
// // // //       y += dy;
// // // //     }
// // // //   }
// // // // }

// // // // function PlacedQueens(row, n, map) {
// // // //   if (row === n) {
// // // //     console.log(
// // // //       "===============This is one of the solution if you want to learn that so give this output:============="
// // // //     );
// // // //     PrintBoard(n, map);
// // // //     return true;
// // // //   }

// // // //   for (let col = 0; col < n; col++) {
// // // //     if (isSafe(row, col, map, n)) {
// // // //       const colorIndex = (row + col) % colors.length; // Assign color based on row and column index
// // // //       const color = colors[colorIndex];
// // // //       map.set(`${row},${col}`, { hasQueen: true, color: color });

// // // //       overWiteColor(row, col, color, map, n);

// // // //       if (PlacedQueens(row + 1, n, map)) {
// // // //         return true;
// // // //       }

// // // //       map.set(`${row},${col}`, {
// // // //         hasQueen: false,
// // // //         color: map.get(`${row},${col}`).color,
// // // //       });
// // // //     }
// // // //   }
// // // //   return false;
// // // // }

// // // // function StartGame(n, GameMap) {
// // // //   const rows = new Set();
// // // //   const cols = new Set();
// // // //   const colors = new Set();

// // // //   for (let i = 0; i < n; i++) {
// // // //     for (let j = 0; j < n; j++) {
// // // //       let guess = readline.question(`Enter Queen position (row,col): `);
// // // //       let [row, col] = guess.split(",").map(Number);

// // // //       if (map.has(`${row},${col}`)) {
// // // //         let value = GameMap.get(`${row},${col}`);
// // // //         if (value.hasQueen) {
// // // //           console.log("Queen already placed at this position.");
// // // //         } else if (!isSafe(row, col, GameMap, n)) {
// // // //           console.log(
// // // //             "Cannot place queen here due to row, column, or diagonal conflict."
// // // //           );
// // // //         } else {
// // // //           const colorIndex = (row + col) % colors.length; // Assign color based on row and column index
// // // //           const color = colors[colorIndex];
// // // //           GameMap.set(`${row},${col}`, { hasQueen: true, color: color });
// // // //           overWiteColor(row, col, color, GameMap, n);
// // // //           rows.add(row);
// // // //           cols.add(col);
// // // //           colors.add(value.color);
// // // //           console.log("Queen placed!");
// // // //         }
// // // //       } else {
// // // //         console.log("Invalid position!");
// // // //       }
// // // //     }
// // // //     if (rows.size === n) {
// // // //       PrintBoard(n, GameMap);
// // // //       console.log("All queens placed!");
// // // //       return;
// // // //     }
// // // //   }
// // // // }

// // // // const n = parseInt(readline.question("Enter board size: "));
// // // // makeBoard(n);
// // // // PlacedQueens(0, n, map);
// // // // // StartGame(n, GameMap);
// // // // // PrintBoard(n, map)
// // // // // PrintBoard(n, GameMap);


// // // // const readline = require("readline-sync");

// // // // const map = new Map();
// // // // const GameMap = new Map();
// // // // const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

// // // const map = new Map();
// // // const GameMap = new Map();
// // // // Generate n colors

// // // function shuffleArray(array) {
// // //   for (let i = array.length - 1; i > 0; i--) {
// // //     const j = Math.floor(Math.random() * (i + 1));
// // //     [array[i], array[j]] = [array[j], array[i]];
// // //   }
// // // }

// // // function assignColors(i, j, n) {
// // //   const colorIndex = (i + j) % colors.length; // Assign color based on row and column index
// // //   return { hasQueen: false, color: colors[colorIndex] };
// // // }

// // // // function makeBoard(n) {
// // // //   shuffleArray(colors);
// // // //   for (let i = 0; i < n; i++) {
// // // //     for (let j = 0; j < n; j++) {
// // // //       const cell = assignColors(i, j, n);
// // // //       map.set(`${i},${j}`, cell);
// // // //       GameMap.set(`${i},${j}`, cell);
// // // //     }
// // // //   }
// // // // }

// // // // function PrintBoard(n, map) {
// // // //   for (let i = 0; i < n; i++) {
// // // //     let row = "";
// // // //     console.log("________________________________________________________");

// // // //     for (let j = 0; j < n; j++) {
// // // //       const cell = map.get(`${i},${j}`);

// // // //       if (cell.hasQueen) {
// // // //         row += "♛" + cell.color;
// // // //       } else {
// // // //         row += cell.color;
// // // //       }
// // // //     }
// // // //     console.log(row);
// // // //   }
// // // //   console.log("------------------------------------------------------");
// // // // }

// // // function isSafe(row, col, map, n) {
// // //   for (let i = 0; i < row; i++) {
// // //     if (map.get(`${i},${col}`).hasQueen) return false;
// // //   }
// // //   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
// // //     if (map.get(`${i},${j}`).hasQueen) return false;
// // //   }
// // //   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
// // //     if (map.get(`${i},${j}`).hasQueen) return false;
// // //   }
// // //   return true;
// // // }



// // // // Remove the overWiteColor function and modify PlacedQueens and StartGame functions

// // // function PlacedQueens(row, n, map) {
// // //   if (row === n) {
// // //     console.log("===============This is one of the solution if you want to learn that so give this output:=============");
// // //     PrintBoard(n, map);
// // //     return true;
// // //   }

// // //   let columns = Array.from({ length: n }, (_, i) => i);
// // //   shuffleArray(columns);

// // //   for (let col of columns) {
// // //     if (isSafe(row, col, map, n)) {
// // //       const colorIndex = (row + col) % colors.length;
// // //       const color = colors[colorIndex];
// // //       map.set(`${row},${col}`, { hasQueen: true, color: color });

// // //       if (PlacedQueens(row + 1, n, map)) {
// // //         return true;
// // //       }

// // //       map.set(`${row},${col}`, { 
// // //         hasQueen: false, 
// // //         color: colors[(row + col) % colors.length] 
// // //       });
// // //     }
// // //   }
// // //   return false;
// // // }

// // // function StartGame(n, GameMap) {
// // //   const rows = new Set();
// // //   const cols = new Set();
// // //   const colorsSet = new Set();

// // //   for (let i = 0; i < n; i++) {
// // //     for (let j = 0; j < n; j++) {
// // //       let guess = readline.question(`Enter Queen position (row,col): `);
// // //       let [row, col] = guess.split(",").map(Number);

// // //       if (map.has(`${row},${col}`)) {
// // //         let value = GameMap.get(`${row},${col}`);
// // //         if (value.hasQueen) {
// // //           console.log("Queen already placed at this position.");
// // //         } else if (!isSafe(row, col, GameMap, n)) {
// // //           console.log("Cannot place queen here due to row, column, or diagonal conflict.");
// // //         } else {
// // //           const colorIndex = (row + col) % colors.length;
// // //           const color = colors[colorIndex];
// // //           GameMap.set(`${row},${col}`, { hasQueen: true, color: color });
// // //           rows.add(row);
// // //           cols.add(col);
// // //           colorsSet.add(value.color);
// // //           console.log("Queen placed!");
// // //         }
// // //       } else {
// // //         console.log("Invalid position!");
// // //       }
// // //     }
// // //     if (rows.size === n) {
// // //       PrintBoard(n, GameMap);
// // //       console.log("All queens placed!");
// // //       return;
// // //     }
// // //   }
// // // }


// // // // Function to generate n different colors
// // // function generateColors(n) {
// // //   const baseColors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];
// // //   let colors = [];
  
// // //   // If n is less than or equal to base colors length, take first n colors
// // //   if (n <= baseColors.length) {
// // //     colors = baseColors.slice(0, n);
// // //   } else {
// // //     // If n is greater, repeat colors with numbers
// // //     for (let i = 0; i < n; i++) {
// // //       const baseColor = baseColors[i % baseColors.length];
// // //       const colorNum = Math.floor(i / baseColors.length) + 1;
// // //       colors.push(colorNum > 1 ? `${baseColor}${colorNum}` : baseColor);
// // //     }
// // //   }
// // //   return colors;
// // // }

// // // // Update the existing code to use dynamic colors


// // // // Rest of your existing code remains the same, just remove the static colors array
// // // function makeBoard(n) {
// // //   shuffleArray(colors);
// // //   for (let i = 0; i < n; i++) {
// // //     for (let j = 0; j < n; j++) {
// // //       const cell = assignColors(i, j, n);
// // //       map.set(`${i},${j}`, cell);
// // //       GameMap.set(`${i},${j}`, cell);
// // //     }
// // //   }
// // // }

// // // // Update PrintBoard function to handle longer color strings
// // // function PrintBoard(n, map) {
// // //   for (let i = 0; i < n; i++) {
// // //     let row = "";
// // //     console.log("_".repeat(n * 10));

// // //     for (let j = 0; j < n; j++) {
// // //       const cell = map.get(`${i},${j}`);
// // //       if (cell.hasQueen) {
// // //         row += "♛" + cell.color.padEnd(8);
// // //       } else {
// // //         row += cell.color.padEnd(9);
// // //       }
// // //     }
// // //     console.log(row);
// // //   }
// // //   console.log("-".repeat(n * 10));
// // // }

// // // // const readline = require("readline-sync");
// // // const n = parseInt(readline.question("Enter board size: "));
// // // const colors = generateColors(n); 
// // // makeBoard(n)
// // // PlacedQueens(0, n, map);
// // // StartGame(n, GameMap);


// // const readline = require("readline-sync");

// // const map = new Map();
// // const GameMap = new Map();
// // const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

// // function shuffleArray(array) {
// //     for (let i = array.length - 1; i > 0; i--) {
// //         const j = Math.floor(Math.random() * (i + 1));
// //         [array[i], array[j]] = [array[j], array[i]];
// //     }
// // }

// // function assignColors(i, j, n) {
// //     const colorIndex = (i + j) % colors.length;
// //     return { hasQueen: false, color: colors[colorIndex] };
// // }

// // function makeBoard(n) {
// //     shuffleArray(colors);
// //     for (let i = 0; i < n; i++) {
// //         for (let j = 0; j < n; j++) {
// //             const cell = assignColors(i, j, n);
// //             map.set(`${i},${j}`, cell);
// //             GameMap.set(`${i},${j}`, { ...cell }); // Create a new object for GameMap
// //         }
// //     }
// // }

// // function PrintBoard(n, map) {
// //     for (let i = 0; i < n; i++) {
// //         let row = "";
// //         console.log("________________________________________________________");
// //         for (let j = 0; j < n; j++) {
// //             const cell = map.get(`${i},${j}`);
// //             if (cell.hasQueen) {
// //                 row += `👑${cell.color} `;
// //             } else {
// //                 row += `${cell.color} `;
// //             }
// //         }
// //         console.log(row);
// //     }
// //     console.log("------------------------------------------------------");
// // }

// // // ... rest of your existing functions ...

// // function isSafe(row, col, map, n) {
// //   for (let i = 0; i < row; i++) {
// //     if (map.get(`${i},${col}`).hasQueen) return false;
// //   }
// //   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
// //     if (map.get(`${i},${j}`).hasQueen) return false;
// //   }
// //   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
// //     if (map.get(`${i},${j}`).hasQueen) return false;
// //   }
// //   return true;
// // }

// // // function overWiteColor(row, col, color, map, n) {
// // //   const directions = [
// // //     [0, 1],
// // //     [1, 0],
// // //     [0, -1],
// // //     [-1, 0], // Horizontal and vertical // Diagonals
// // //   ];

// // //   for (const [dx, dy] of directions) {
// // //     let x = row + dx;
// // //     let y = col + dy;

// // //     while (x >= 0 && x < n && y >= 0 && y < n) {
// // //       const cell = map.get(`${x},${y}`);
// // //       if (!cell.hasQueen) {
// // //         map.set(`${x},${y}`, { ...cell, color: color });
// // //       }
// // //       x += dx;
// // //       y += dy;
// // //     }
// // //   }
// // // }

// // function getAvailableCells(map, n) {
// //   const availableCells = [];
  
// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       const cell = map.get(`${i},${j}`);
// //       if (!cell.hasQueen && cell.color === " ") {
// //         availableCells.push([i, j]);
// //       }
// //     }
// //   }
// //   return availableCells;
// // }

// // function pickRandomCell(available) {
// //   if (available.length === 0) return null;
// //   const randomIndex = Math.floor(Math.random() * available.length);
// //   const selectedCell = available[randomIndex];
// //   available.splice(randomIndex, 1); // Remove the selected cell from available array
// //   return selectedCell;
// // }

// // function getNearColor(row, col, map, n) {
// //   const directions = [
// //       [-1, -1], [-1, 0], [-1, 1],
// //       [0, -1],           [0, 1],
// //       [1, -1],  [1, 0],  [1, 1]
// //   ];
  
// //   const nearColors = new Set();
  
// //   for (const [dx, dy] of directions) {
// //       const newRow = row + dx;
// //       const newCol = col + dy;
      
// //       if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
// //           const cell = map.get(`${newRow},${newCol}`);
// //           if (cell && cell.color !== " ") {
// //               nearColors.add(cell.color);
// //           }
// //       }
// //   }
  
// //   // Return available colors (colors that are not used by neighbors)
// //   const availableColors = colors.filter(color => !nearColors.has(color));
// //   return availableColors.length > 0 ? availableColors[0] : colors[0];
// // }

// // function fillRegion(map, n) {
// //   // Get all available cells
// //   const availableCells = getAvailableCells(map, n);
  
// //   // Process each available cell
// //   for (const [row, col] of availableCells) {
// //       // Get appropriate color based on neighboring cells
// //       const newColor = getNearColor(row, col, map, n);
      
// //       // Update the cell with the new color
// //       const cell = map.get(`${row},${col}`);
// //       map.set(`${row},${col}`, { ...cell, color: newColor });
// //   }
// // }

// // // Example usage - add this after each queen placement in StartGame function:

// // function PlacedQueens(row, n, map) {
// //   if (row === n) {
// //     console.log("=== Solution ===");
// //     fillRegion(map, n);
// //     PrintBoard(n, map);
// //     return true;
// //   }

// //   let columns = Array.from({ length: n }, (_, i) => i);
// //   shuffleArray(columns);

// //   for (let col of columns) {
// //     if (isSafe(row, col, map, n)) {
// //       const newColor = getNearColor(row, col, map, n);
// //       map.set(`${row},${col}`, { hasQueen: true, color: newColor });

// //       if (PlacedQueens(row + 1, n, map)) {
// //         return true;
// //       }

// //       map.set(`${row},${col}`, { hasQueen: false, color: ' ' });
// //     }
// //   }
// //   return false;
// // }

// // function StartGame(n, GameMap) {
// //   const rows = new Set();
// //   const cols = new Set();

// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       let guess = readline.question(`Enter Queen position (row,col): `);
// //       let [row, col] = guess.split(",").map(Number);
// //       if (map.has(`${row},${col}`)) {
// //         let value = GameMap.get(`${row},${col}`);
// //         if (value.hasQueen) {
// //           console.log("Queen already placed at this position.");
// //         } else if (!isSafe(row, col, GameMap, n)) {
// //           console.log("Cannot place queen here due to conflicts.");
// //         } else {
// //           const newColor = getNearColor(row, col, GameMap, n);
// //           GameMap.set(`${row},${col}`, { hasQueen: true, color: newColor });
// //           fillRegion(GameMap, n);
// //           rows.add(row);
// //           cols.add(col);
// //           console.log("Queen placed!");
// //         }
// //       } else {
// //         console.log("Invalid position!");
// //       }
// //     }
// //     if (rows.size === n) {
// //       PrintBoard(n, GameMap);
// //       console.log("All queens placed!");
// //       return;
// //     }
// //   }
// // }

// // const n = parseInt(readline.question("Enter board size: "));
// // makeBoard(n);
// // PlacedQueens(0, n, map);
// // StartGame(n, GameMap);

// // function main() {
// //     const n = parseInt(readline.question("Enter board size (4-9): "));
// //     if (n < 4 || n > 9) {
// //         console.log("Please enter a board size between 4 and 9");
// //         return;
// //     }

// //     console.log("\n1. Auto Solve");
// //     console.log("2. Play Game");
// //     const choice = parseInt(readline.question("Enter your choice (1/2): "));

// //     makeBoard(n);

// //     if (choice === 1) {
// //         if (!PlacedQueens(0, n, map)) {
// //             console.log("No solution exists!");
// //         }
// //     } else if (choice === 2) {
// //         StartGame(n, GameMap);
// //     } else {
// //         console.log("Invalid choice!");
// //     }
// // }

// // main();


// const readline = require("readline-sync");

// const map = new Map();
// const GameMap = new Map();
// const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function assignColors(i, j, n) {
//   return { hasQueen: false, color: " " };
// }

// function makeBoard(n) {
//   shuffleArray(colors);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       const cell = assignColors(i, j, n);
//       map.set(`${i},${j}`, cell);
//       GameMap.set(`${i},${j}`, cell);
//     }
//   }
// }

// function PrintBoard(n, map) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     console.log("________________________________________________________");

//     for (let j = 0; j < n; j++) {
//       const cell = map.get(`${i},${j}`);
//       if (cell.hasQueen) {
//         row += "👑" + cell.color + "   ";
//       } else {
//         row += cell.color + "   ";
//       }
//     }
//     console.log(row);
//   }
//   console.log("------------------------------------------------------");
// }

// function isSafe(row, col, map, n) {
//   for (let i = 0; i < row; i++) {
//     if (map.get(`${i},${col}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//     if (map.get(`${i},${j}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
//     if (map.get(`${i},${j}`).hasQueen) return false;
//   }
//   return true;
// }

// function getAvailableCells(map, n) {
//   const availableCells = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       const cell = map.get(`${i},${j}`);
//       if (!cell.hasQueen && cell.color === " ") {
//         availableCells.push([i, j]);
//       }
//     }
//   }
//   return availableCells;
// }

// function isSameRegion(row1, col1, row2, col2) {
//   const verticalDist = Math.abs(row1 - row2);
//   const horizontalDist = Math.abs(col1 - col2);
//   return verticalDist <= 1 && horizontalDist <= 1;
// }

// function getNearColor(row, col, map, n) {
//   const nearbyColors = new Set();
  
//   // Check all cells in the board for same region
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (isSameRegion(row, col, i, j)) {
//         const cell = map.get(`${i},${j}`);
//         if (cell && cell.color !== ' ') {
//           nearbyColors.add(cell.color);
//         }
//       }
//     }
//   }
  
//   return Array.from(nearbyColors);
// }

// function pickRandomCell(availableCells) {
//   if (availableCells.length === 0) return null;
//   const randomIndex = Math.floor(Math.random() * availableCells.length);
//   return availableCells.splice(randomIndex, 1)[0];
// }

// function getNearColor(row, col, map, n) {
//   const directions = [
//     [1, 0], [-1, 0], [0, 1], [0, -1],
//     [1, 1], [1, -1], [-1, 1], [-1, -1]
//   ];
//   const nearColors = new Set();

//   for (const [dx, dy] of directions) {
//     const newRow = row + dx;
//     const newCol = col + dy;
    
//     if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
//       const cell = map.get(`${newRow},${newCol}`);
//       if (cell && cell.color !== " ") {
//         nearColors.add(cell.color);
//       }
//     }
//   }
//   return Array.from(nearColors);
// }


// function fillRegions(map, n) {
//   const availableCells = getAvailableCells(map, n);
  
//   while (availableCells.length > 0) {
//     const [row, col] = pickRandomCell(availableCells) || [null, null];
//     if (row === null) break;

//     const nearColors = getNearColor(row, col, map, n);
//     const availableColors = colors.filter(color => !nearColors.includes(color));

//     if (availableColors.length > 0) {
//       const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
//       const cell = map.get(`${row},${col}`);
//       map.set(`${row},${col}`, { ...cell, color: randomColor });
//     } else {
//       // If no available colors, push cell back to try later
//       availableCells.push([row, col]);
//     }
//   }
// }

// function PlacedQueens(row, n, map) {
//   if (row === n) {
//     console.log("=== Solution ===");
//     fillRegions(map, n); // Fill regions after placing all queens
//     PrintBoard(n, map);
//     return true;
//   }

//   let columns = Array.from({ length: n }, (_, i) => i);
//   shuffleArray(columns);

//   for (let col of columns) {
//     if (isSafe(row, col, map, n)) {
//       const nearColors = getNearColor(row, col, map, n);
//       const availableColors = colors.filter(color => !nearColors.includes(color));
//       const queenColor = availableColors.length > 0 ? 
//         availableColors[0] : 
//         colors[row % colors.length];

//       map.set(`${row},${col}`, { hasQueen: true, color: queenColor });

//       if (PlacedQueens(row + 1, n, map)) {
//         return true;
//       }

//       map.set(`${row},${col}`, { hasQueen: false, color: ' ' });
//     }
//   }
//   return false;
// }

// function StartGame(n, GameMap) {
//   const rows = new Set();
//   const cols = new Set();

//   while (rows.size < n) {
//     PrintBoard(n, GameMap);
//     let guess = readline.question(`Enter Queen position (row,col): `);
//     let [row, col] = guess.split(",").map(Number);

//     if (map.has(`${row},${col}`)) {
//       let value = GameMap.get(`${row},${col}`);
//       if (value.hasQueen) {
//         console.log("Queen already placed at this position.");
//       } else if (!isSafe(row, col, GameMap, n)) {
//         console.log("Cannot place queen here due to conflicts.");
//       } else {
//         const nearColors = getNearColor(row, col, GameMap, n);
//         const availableColors = colors.filter(color => !nearColors.includes(color));
//         const queenColor = availableColors[0] || colors[0];
        
//         GameMap.set(`${row},${col}`, { hasQueen: true, color: queenColor });
//         rows.add(row);
//         cols.add(col);
//         console.log("Queen placed!");
//         fillRegions(GameMap, n);
//       }
//     } else {
//       console.log("Invalid position!");
//     }
//   }

//   console.log("\nFinal board:");
//   PrintBoard(n, GameMap);
//   console.log("All queens placed!");
// }

// console.log("Welcome to the N-Queens Game!");
// console.log("Place queens on the board without conflicts.");
// console.log("Queens cannot share the same row, column, or diagonal.");

// const n = parseInt(readline.question("Enter board size (recommended 4-8): "));
// makeBoard(n);
// console.log("\nSolution board (for reference):");
// PlacedQueens(0, n, map);
// console.log("\nNow it's your turn!");
// StartGame(n, GameMap);

// const readline = require("readline-sync");

// const map = new Map();
// const GameMap = new Map();
// const colors = ["🔴", "🔵", "🟢", "🟡", "🟠", "🟣", "⚫", "⚪", "🟤"];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function assignColors(i, j) {
//   const colorIndex = (i + j) % colors.length;
//   return { hasQueen: false, color: colors[colorIndex] };
// }

// function makeBoard(n) {
//   shuffleArray(colors);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       const cell = assignColors(i, j);
//       map.set(`${i},${j}`, { ...cell });
//       GameMap.set(`${i},${j}`, { ...cell });
//     }
//   }
// }

// function PrintBoard(n, board) {
//   console.log("________________________________________________________");
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       const cell = board.get(`${i},${j}`);
//       row += cell.hasQueen ? "👑" + cell.color + "   " : cell.color + "   ";
//     }
//     console.log(row);
//   }
//   console.log("------------------------------------------------------");
// }

// function isSafe(row, col, board, n) {
//   for (let i = 0; i < row; i++) {
//     if (board.get(`${i},${col}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//     if (board.get(`${i},${j}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
//     if (board.get(`${i},${j}`).hasQueen) return false;
//   }
//   return true;
// }

// function getAvailableCells(board, n) {
//   const available = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (!board.get(`${i},${j}`).hasQueen) {
//         available.push([i, j]);
//       }
//     }
//   }
//   return available;
// }

// function pickRandomCell(available) {
//   if (available.length === 0) return null;
//   const randomIndex = Math.floor(Math.random() * available.length);
//   return available.splice(randomIndex, 1)[0];
// }

// function getNearColor(row, col, board, n) {
//   const directions = [
//     [-1, -1], [-1, 0], [-1, 1],
//     [0, -1],           [0, 1],
//     [1, -1],  [1, 0],  [1, 1]
//   ];
//   const nearColors = new Set();
//   for (const [dx, dy] of directions) {
//     const newRow = row + dx;
//     const newCol = col + dy;
//     if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
//       const cell = board.get(`${newRow},${newCol}`);
//       if (cell && cell.color) {
//         nearColors.add(cell.color);
//       }
//     }
//   }
//   const availableColors = colors.filter(color => !nearColors.has(color));
//   return availableColors.length > 0 ? availableColors[0] : colors[0];
// }

// function fillRegion(row, col, color, board, n) {
//   const directions = [
//     [0, 1], [1, 0], [0, -1], [-1, 0],
//     [1, 1], [1, -1], [-1, 1], [-1, -1]
//   ];
//   for (const [dx, dy] of directions) {
//     let x = row + dx;
//     let y = col + dy;
//     while (x >= 0 && x < n && y >= 0 && y < n) {
//       const cell = board.get(`${x},${y}`);
//       if (cell.hasQueen) break;
//       board.set(`${x},${y}`, { ...cell, color });
//       x += dx;
//       y += dy;
//     }
//   }
// }

// function PlacedQueens(row, n, board) {
//   if (row === n) {
//     PrintBoard(n, board);
//     return true;
//   }
//   let columns = Array.from({ length: n }, (_, i) => i);
//   shuffleArray(columns);
//   for (let col of columns) {
//     if (isSafe(row, col, board, n)) {
//       const color = colors[(row + col) % colors.length];
//       board.set(`${row},${col}`, { hasQueen: true, color });
//       if (PlacedQueens(row + 1, n, board)) return true;
//       board.set(`${row},${col}`, { hasQueen: false, color });
//     }
//   }
//   return false;
// }

// function StartGame(n, board) {
//   let queensPlaced = 0;
//   while (queensPlaced < n) {
//     let guess = readline.question(`Enter Queen position (row,col): `);
//     let [row, col] = guess.split(",").map(Number);
//     if (row < 0 || row >= n || col < 0 || col >= n) {
//       console.log("Invalid position! Out of bounds.");
//       continue;
//     }
//     let cell = board.get(`${row},${col}`);
//     if (cell.hasQueen) {
//       console.log("Queen already placed here.");
//       continue;
//     }
//     if (!isSafe(row, col, board, n)) {
//       console.log("Invalid move! Queen conflicts with another.");
//       continue;
//     }
//     let color = getNearColor(row, col, board, n);
//     board.set(`${row},${col}`, { hasQueen: true, color });
//     fillRegion(row, col, color, board, n);
//     queensPlaced++;
//     console.log("Queen placed!");
//     PrintBoard(n, board);
//   }
//   console.log("All queens placed!");
// }

// const n = parseInt(readline.question("Enter board size: "));
// makeBoard(n);
// PlacedQueens(0, map);
// StartGame(n, GameMap);

// function convertBoardToMap(board, n) {
//   let map = new Map();
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (board[row][col] === 'Q') {
//         map.set(`${row},${col}`, 'Q');
//       }
//     }
//   }
//   return map;
// }

// function getRandomNQueensSolution(n) {
//   let map = new Map();
//   while (!solveNQueensDirect(map, n)) {
//     map = new Map();
//   }

//   let board = Array.from({ length: n }, () => Array(n).fill('-'));
//   for (let [key, value] of map.entries()) {
//     if (value === 'Q') {
//       let [row, col] = key.split(',').map(Number);
//       board[row][col] = 'Q';
//     }
//   }

//   return board.map(row => row.join(''));
// }

// function solveNQueensDirect(map, n) {
//   let availableCols = new Set([...Array(n).keys()]);

//   for (let row = 0; row < n; row++) {
//     let cols = Array.from(availableCols);
//     if (cols.length === 0) return false;
//     let col = cols[Math.floor(Math.random() * cols.length)];

//     if (!isSafe(map, row, col, n)) return false;
//     map.set(`${row},${col}`, 'Q');
//     availableCols.delete(col);
//   }
//   return true;
// }

// function QueenColor(board, n) {
//   let regions = Array.from({ length: n }, () => Array(n).fill(null));
//   let color = ["🔴","🟣","🟡","🟢","🔵","🟠"];
//   let colorIndex = 0;

//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (board[row][col] === 'Q') {
//         regions[row][col] = color[colorIndex];
//         colorIndex++;
//       }
//     }
//   }
//   return { regions };
// }

// function getAvailableCells(regions, n) {
//   let availableCells = [];
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (!regions[row][col]) {
//         availableCells.push({ row, col });
//       }
//     }
//   }
//   return availableCells;
// }

// function pickRandomCell(availableCells) {
//   let randomIndex = Math.floor(Math.random() * availableCells.length);
//   return availableCells.splice(randomIndex, 1)[0];
// }

// function getNearColor(regions, row, col, n) {
//   let nearColor = new Set();
//   let directions = [[1,0], [-1,0], [0,-1], [0,1]];
//   for (let [dx, dy] of directions) {
//     let newRow = row + dx;
//     let newCol = col + dy;
//     if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && regions[newRow][newCol]) {
//       nearColor.add(regions[newRow][newCol]);
//     }
//   }
//   return nearColor;
// }

// function assignColor(regions, row, col, nearColor) {
//   if (nearColor.size > 0) {
//     let colors = Array.from(nearColor);
//     regions[row][col] = colors[Math.floor(Math.random() * colors.length)];
//   }
// }

// function fillRegions(regions, n) {
//   let availableCells = getAvailableCells(regions, n);

//   while (availableCells.length > 0) {
//     let cell = pickRandomCell(availableCells);
//     let nearColor = getNearColor(regions, cell.row, cell.col, n);
//     if (nearColor.size === 0) {
//       availableCells.push(cell);
//       continue;
//     }
//     assignColor(regions, cell.row, cell.col, nearColor);
//   }
//   return regions;
// }

// function isSafe(row, col, map, n) {
//   for (let i = 0; i < row; i++) {
//     if (map.get(`${i},${col}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//     if (map.get(`${i},${j}`).hasQueen) return false;
//   }
//   for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
//     if (map.get(`${i},${j}`).hasQueen) return false;
//   }
//   return true;
// }

// function main() {
//   const n = 5;
//   const solution = getRandomNQueensSolution(n);
//   console.log("Generated Queen Solution:");
//   solution.forEach(row => console.log(row));

//   const board = solution.map(row => row.split(''));
//   const { regions } = QueenColor(board, n);
//   fillRegions(regions, n);

//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       if (board[row][col] === 'Q') {
//         board[row][col] = '-';
//       }
//     }
//   }

//   console.log("\nColored Regions:");
//   regions.forEach(row => console.log(row.join('')));

//   for (let i = 0; i < n; i++) {
//     let isValidPosition = false;
//     while (!isValidPosition) {
//       const userInput = readline.question(`Enter position ${i + 1} (row,col) to place the queen: `);
//       const [row, col] = userInput.split(',').map(Number);

//       const map = convertBoardToMap(board, n);
//       if (isSafe(map, row, col, n)) {
//         board[row][col] = 'Q';
//         console.log(`Queen placed at position (${row}, ${col})`);
//         isValidPosition = true;
//       } else {
//         console.log(`Invalid position (${row}, ${col}). Please enter a valid position.`);
//       }
//     }
//   }

//   console.log("\n\n👑👑👑👑👑👑👑👑👑👑👑 congratulation you win 👑👑👑👑👑👑👑👑👑👑👑");
//   console.log("\nFinal Board:");
//   board.forEach(row => console.log(row.join('')));
// }

// main();


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
  const colorIndex = (i + j) % colors.length; // Assign color based on row and column index
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
        row += "♛" + cell.color+"   ";
      } else {
        row += cell.color+"   ";
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

function overWiteColor(row, col, color, map, n) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // Horizontal and vertical // Diagonals
  ];

  for (const [dx, dy] of directions) {
    let x = row + dx;
    let y = col + dy;

    while (x >= 0 && x < n && y >= 0 && y < n) {
      const cell = map.get(`${x},${y}`);
      if (!cell.hasQueen) {
        map.set(`${x},${y}`, { ...cell, color: color });
      }
      x += dx;
      y += dy;
    }
  }
}

function PlacedQueens(row, n, map) {
  if (row === n) {
    console.log("===============This is one of the solution if you want to learn that so give this output:=============");
    PrintBoard(n, map);
    return true;
  }

  let columns = Array.from({ length: n }, (_, i) => i);
  shuffleArray(columns);

  for (let col of columns) {
    if (isSafe(row, col, map, n)) {
      const colorIndex = (row + col) % colors.length; // Assign color based on row and column index
      const color = colors[colorIndex];
      map.set(`${row},${col}`, { hasQueen: true, color: color });

      overWiteColor(row, col, color, map, n);

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
          console.log("Cannot place queen here due to row, column, or diagonal conflict.");
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