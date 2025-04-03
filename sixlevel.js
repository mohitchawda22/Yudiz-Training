let region = [];
let row = [];
let column = [];
let edge = [];

let matrix = [
	[
		6,
		6,
		6,
		3,
		3,
		3
	],
	[
		6,
		6,
		6,
		3,
		3,
		3
	],
	[
		5,
		6,
		6,
		2,
		3,
		1
	],
	[
		5,
		5,
		5,
		2,
		2,
		1
	],
	[
		4,
		4,
		2,
		2,
		2,
		1
	],
	[
		4,
		4,
		2,
		2,
		2,
		1
	]
]

let colors = {
	1: "green",
	2: "yellow",
	3: "red",
	4: "blue",
	5: "lavender",
	6: "cyan",
	7: "teal",
};

for (let i = 0; i < 6; i++) {
	for (let j = 0; j < 6; j++) {
		matrix[i][j] = colors[matrix[i][j]];
	}
}

function checkValidityOfCell(color, loc) {
	// Checks if a queen can be placed at the given location
	return (
		region.includes(color) ||
		row.includes(loc[0]) ||
		column.includes(loc[2]) ||
		edge.includes(loc)
	);
}

function updateValidity(color, loc) {
	// Updates the game state after placing a queen
	region.push(color);
	row.push(loc[0]);
	column.push(loc[2]);

	let arr = [
		[loc[0] - 1, loc[2] - 1],
		[loc[0] - 1, parseInt(loc[2]) + 1],
		[parseInt(loc[0]) + 1, loc[2] - 1],
		[parseInt(loc[0]) + 1, parseInt(loc[2]) + 1],
	];

	for ([x, y] of arr) {
		if (x != -1 && x != 6 && y != -1 && y != 6) {
			edge.push(`${x},${y}`);
		}
	}
}

console.log(matrix);

let count = 0;

for (let c1 = 0; c1 < 6; c1++) {
	let tempRegion0 = [...region];
	let tempRow0 = [...row];
	let tempCol0 = [...column];
	let tempEdge0 = [...edge];

	if (checkValidityOfCell(matrix[0][c1], `${0},${c1}`)) {
		region = [...tempRegion0];
		row = [...tempRow0];
		column = [...tempCol0];
		edge = [...tempEdge0];
		continue;
	} else {
		updateValidity(matrix[0][c1], `${0},${c1}`);
	}

	for (let c2 = 0; c2 < 6; c2++) {
		let tempRegion1 = [...region];
		let tempRow1 = [...row];
		let tempCol1 = [...column];
		let tempEdge1 = [...edge];

		if (checkValidityOfCell(matrix[1][c2], `${1},${c2}`)) {
			region = [...tempRegion1];
			row = [...tempRow1];
			column = [...tempCol1];
			edge = [...tempEdge1];
			continue;
		} else {
			updateValidity(matrix[1][c2], `${1},${c2}`);
		}

		for (let c3 = 0; c3 < 6; c3++) {
			let tempRegion2 = [...region];
			let tempRow2 = [...row];
			let tempCol2 = [...column];
			let tempEdge2 = [...edge];

			if (checkValidityOfCell(matrix[2][c3], `${2},${c3}`)) {
				region = [...tempRegion2];
				row = [...tempRow2];
				column = [...tempCol2];
				edge = [...tempEdge2];
				continue;
			} else {
				updateValidity(matrix[2][c3], `${2},${c3}`);
			}

			for (let c4 = 0; c4 < 6; c4++) {
				let tempRegion3 = [...region];
				let tempRow3 = [...row];
				let tempCol3 = [...column];
				let tempEdge3 = [...edge];

				if (checkValidityOfCell(matrix[3][c4], `${3},${c4}`)) {
					region = [...tempRegion3];
					row = [...tempRow3];
					column = [...tempCol3];
					edge = [...tempEdge3];
					continue;
				} else {
					updateValidity(matrix[3][c4], `${3},${c4}`);
				}
				for (let c5 = 0; c5 < 6; c5++) {
					let tempRegion4 = [...region];
					let tempRow4 = [...row];
					let tempCol4 = [...column];
					let tempEdge4 = [...edge];

					if (checkValidityOfCell(matrix[4][c5], `${4},${c5}`)) {
						region = [...tempRegion4];
						row = [...tempRow4];
						column = [...tempCol4];
						edge = [...tempEdge4];
						continue;
					} else {
						updateValidity(matrix[4][c5], `${4},${c5}`);
					}

					for (let c6 = 0; c6 < 6; c6++) {
						let tempRegion5 = [...region];
						let tempRow5 = [...row];
						let tempCol5 = [...column];
						let tempEdge5 = [...edge];

						if (checkValidityOfCell(matrix[5][c6], `${5},${c6}`)) {
							region = [...tempRegion5];
							row = [...tempRow5];
							column = [...tempCol5];
							edge = [...tempEdge5];
							continue;
						} else {
							updateValidity(matrix[5][c6], `${5},${c6}`);
							count++;
						}
						region = [...tempRegion5];
						row = [...tempRow5];
						column = [...tempCol5];
						edge = [...tempEdge5];
					}

					region = [...tempRegion4];
					row = [...tempRow4];
					column = [...tempCol4];
					edge = [...tempEdge4];
				}
				region = [...tempRegion3];
				row = [...tempRow3];
				column = [...tempCol3];
				edge = [...tempEdge3];
			}
			region = [...tempRegion2];
			row = [...tempRow2];
			column = [...tempCol2];
			edge = [...tempEdge2];
		}
		region = [...tempRegion1];
		row = [...tempRow1];
		column = [...tempCol1];
		edge = [...tempEdge1];
	}

	region = [...tempRegion0];
	row = [...tempRow0];
	column = [...tempCol0];
	edge = [...tempEdge0];
}
console.log(count);
