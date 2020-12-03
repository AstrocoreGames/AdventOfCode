const fs = require("fs");
const lines = fs.readFileSync("input.txt", "utf8").split("\n");

for (line in lines) {
	lines[line] = lines[line].replace("\r", "");
}

function part1() {
	let trees = 0;
	let x = 0;
	for (let y = 1; y < lines.length; y++) {
		x += 3;
		if (x >= 31) x -= 31;
		if (lines[y].split("")[x] == "#") {
			trees++;
		}
	}
	return trees;
}

function part2() {
	let trees = 1;
	let slopevals = [];
	let slopes = ["1:1", "3:1", "5:1", "7:1", "1:2"];
	for (slope in slopes) {
		let Right = parseInt(slopes[slope].split(":")[0]);
		let Down = parseInt(slopes[slope].split(":")[1]);

		let x = 0;
		let slopetotal = 0;

		for (let y = Down; y < lines.length; y += Down) {
			x += Right;
			if (x >= 31) x -= 31;
			if (lines[y].split("")[x] == "#") {
				slopetotal++;
			}
		}
		slopevals.push(slopetotal);
	}
	for (val in slopevals) {
		trees *= slopevals[val];
	}
	return trees;
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);
