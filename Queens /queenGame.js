// const readline = require("readline-sync");

// function createMapColorGenerate(colors) {
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       const colorIndex = (i + j * 5) % colors.length;
//       const color = colors[colorIndex];
//       map.set(`${i},${j}`, { color, ContainsQueen: false });
//       // map.set(`${colors[i]},${colors[j]}`,{queens:false})
//     }
//   }
// }

// const map = new Map();

// function PrintColorMap(map) {
//   for (let i = 0; i < 5; i++) {
//     let row = "";
//     console.log("________________________");
//     for (let j = 0; j < 5; j++) {
//       const cell = map.get(`${i},${j}`);
//       if (cell.ContainsQueen) {
//         row += "Q" + cell.color.toUpperCase()[0] + " ";
//       } else {
//         row += `${cell.color.toUpperCase()[0].padEnd(5)}`;
//       }
//     }
//     console.log(row.trim());
//   }
// }

// function StartGame(map) {
//   const rows = new Set();
//   const cols = new Set();
//   const colors = new Set();
//   const diagonals = new Set();
//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       let guess = readline.question(`Enter the Queens row and column`);
//       let [row, col] = guess.split(",");
//       // console.log([row,col])
//       if (map.has(`${row},${col}`)) {
//         let value = map.get(`${row},${col}`);
//         if (value.ContainsQueen) {
//           console.log("Queen already present at this position");
//         } else if (
//           rows.has(row) ||
//           cols.has(col) ||
//           colors.has(value.color) ||
//           diagonals.has(diagonals)
//         ) {
//           console.log(
//             "Queen cnanot placed here due to row ,col and color conflicts"
//           );
//         } else {
//           map.set(`${row},${col}`, { color: value.color, ContainsQueen: true });
//           rows.add(row);
//           cols.add(col);
//           colors.add(value.color);
//           console.log("Queen placed at this position");
//         }
//       } else {
//         console.log("Invalid position!");
//       }
//       if (rows.size === 5) {
//         PrintColorMap(map);
//         console.log("All queens placed");
//         return;
//       }
//     }
//   }
//   // PrintColorMap(map)
// }

// function isValidPlace(queenplaced) {
//   for (let i = 0; i < queenplaced.length; i++) {
//     for (let j = i + 1; j < queenplaced.length; j++) {
//       if (
//         queenplaced[i] == queenplaced[j] ||
//         Math.abs(queenplaced[i] - queenplaced[j] === Math.abs[i - j])
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// const colors = ["green", "blue", "red", "yellow", "orange"];
// createMapColorGenerate(colors);
// StartGame(map);
// // PrintColorMap(map);
// // console.log(map);


const readline = require("readline-sync");

//this function check if queen is place in safe position
//it will check condotion for horizontally, vertically, left diagonal and right diagonal
function isSafe(map, row, col, n) {
    // Check for horizontal
    for (let j = 0; j < n; j++) {
        if (map.get(`${row},${j}`) === 'Q') {
            return false;
        }
    }

    // Check for vertical
    for (let i = 0; i < n; i++) {
        if (map.get(`${i},${col}`) === 'Q') {
            return false;
        }
    }

    // Check for left diagonal 
    let i = row - 1, j = col - 1;
    while (i >= 0 && j >= 0) {
        if (map.get(`${i},${j}`) === 'Q') {
            return false;
        }
        i--;
        j--;
    }

    // Check for right diagonal 
    i = row - 1, j = col + 1;
    while (i >= 0 && j < n) {
        if (map.get(`${i},${j}`) === 'Q') {
            return false;
        }
        i--;
        j++;
    }

    return true;
}

//this function is convert the board array to map object
function convertBoardToMap(board, n) {
    let map = new Map();
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 'Q') {
                map.set(`${row},${col}`, 'Q');
            }
        }
    }
    return map;
}

//this function tries to place queens while checking if the position is safe or not 
function solveNQueensDirect(map, n) {
    let availableCols = new Set([...Array(n).keys()]);   //so i used set to store the available columns

    for (let row = 0; row < n; row++) {
        let cols = Array.from(availableCols);
        if (cols.length === 0) return false;
        let col = cols[Math.floor(Math.random() * cols.length)];   //pick  a random column for place queen

        if (!isSafe(map, row, col, n)) return false;
        
        map.set(`${row},${col}`, 'Q');
        availableCols.delete(col);      // here i delete the column which is used 
    }
    return true;
}

//this function generate random solution
function getRandomNQueensSolution(n) {
    let map = new Map(); 

    while (!solveNQueensDirect(map, n)) {   //this is keep trying until we get the solution
        map = new Map();
    }

    let board = Array.from({ length: n }, () => Array(n).fill('-'));
    for (let [key, value] of map.entries()) {
        if (value === 'Q') {
            let [row, col] = key.split(',').map(Number);
            board[row][col] = 'Q';
        }
    }

    return board.map(row => row.join(''));
}

//this function assign a color to each queen 
function QueenColor(board, n) {
    let regions = Array.from({ length: n }, () => Array(n).fill(null));
    let color = ["🔴","🟣","🟡","🟢","🔵","🟠"];
    let colorIndex = 0;
    
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            if(board[row][col] === 'Q') {
                regions[row][col] = color[colorIndex];    //assign color to queen
                colorIndex++;
            }
        }
    }
    return { regions };
}

//after assigning color to queen, now we want available cells to fill the remaining cells
//this function will return the available cells
function getAvailableCells(regions, n) {
    let availableCells = [];
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (!regions[row][col]) {
                availableCells.push({ row, col });   //store empty cell position
            }           
        }
    }
    return availableCells;
}

//this function will pick a random cell from available cells
function pickRandomCell(availableCells) {
    let randomIndex = Math.floor(Math.random() * availableCells.length);
    return availableCells.splice(randomIndex, 1)[0];   //this will remove the cell from available cells and return the selected cell
}

//this function will get the color of the near cells
function getNearColor(regions, row, col, n) {
    let nearColor = new Set();
    let directions = [[1,0], [-1,0], [0,-1], [0,1]];    //this is the direction to check the near cells
    for (let [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;
        if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && regions[newRow][newCol]) {
            nearColor.add(regions[newRow][newCol]);     //store the color of near cells
        }
    }
    return nearColor;
}

//this function will assign color to the cell
function assignColor(regions, row, col, nearColor) {
    if (nearColor.size > 0) {
        let colors = Array.from(nearColor);
        regions[row][col] = colors[Math.floor(Math.random() * colors.length)];   //// Pick a random color from near cell
    }
}

//this function will fill the remaining cells with color
function fillRegions(regions, n) {
    let availableCells = getAvailableCells(regions, n);

    while (availableCells.length > 0) {     //this will keep filling the cells until all cells are filled
        let cell = pickRandomCell(availableCells);
        let nearColor = getNearColor(regions, cell.row, cell.col, n);
        if (nearColor.size === 0) {
            availableCells.push(cell);
            continue;
        }
        assignColor(regions, cell.row, cell.col, nearColor);
    }
    return regions;
}   

//this function print solution and take user input to place the queen
function main() {
    const n = 5; 
    const solution = getRandomNQueensSolution(n);
    console.log("Generated Queen Solution:");       //print the solution
    solution.forEach(row => console.log(row));

    const board = solution.map(row => row.split(''));
    const { regions } = QueenColor(board, n);
    fillRegions(regions, n);

    //this will clear the queen from the board bez we want to place the queen otherwise it will show the queen on the board
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === 'Q') {
                board[row][col] = '-';
            }
        }
    }

    console.log("\nColored Regions:");   //print the colored regions
    regions.forEach(row => console.log(row.join('')));

    // Take user input for placing queens
    for (let i = 0; i < n; i++) {
        let isValidPosition = false;
        while (!isValidPosition) {
            const userInput = readline.question(`Enter position ${i + 1} (row,col) to place the queen: `);
            const [row, col] = userInput.split(',').map(Number);

            const map = convertBoardToMap(board, n);
            if (isSafe(map, row, col, n)) {     //check if the position is safe or not
                board[row][col] = 'Q';
                console.log(`Queen placed at position (${row}, ${col})`);
                isValidPosition = true;
            } else {
                console.log(`Invalid position (${row}, ${col}). Please enter a valid position.`);
            }
        }
    }
    console.log("\n\n👑👑👑👑👑👑👑👑👑👑👑 congratulation you win 👑👑👑👑👑👑👑👑👑👑👑");
    console.log("\nFinal Board:");
    board.forEach(row => console.log(row.join('')));
}

main();



function overWiteColor(row, col, color, map, n) {
    // Define adjacent directions (including diagonals)
    const directions = [
      [0, 1],   // right
      [1, 0],   // down
      [0, -1],  // left
      [-1, 0],  // up
      [1, 1],   // diagonal down-right
      [1, -1],  // diagonal down-left
      [-1, 1],  // diagonal up-right
      [-1, -1]  // diagonal up-left
    ];
  
    // Check and color only the immediate adjacent cells
    for (const [dx, dy] of directions) {
      const x = row + dx;
      const y = col + dy;
      
      // Only process if adjacent cell is within bounds
      if (x >= 0 && x < n && y >= 0 && y < n) {
        const cell = map.get(`${x},${y}`);
        if (!cell.hasQueen) {
          map.set(`${x},${y}`, { ...cell, color: color });
        }
      }
    }
  }