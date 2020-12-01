const fs = require("fs");
let codes = fs.readFileSync("input.txt", "utf8").split("\n");

for (code in codes) {
	codes[code] = parseInt(codes[code].replace("\r", ""));
}

function part1() {
	for (code in codes) {
		code = codes[code];

		for (v in codes) {
			v = codes[v];
			if (v != code) {
				let answer = v + code;
				if (answer == 2020) {
					return `Numbers: ${code}, ${v} Answer: ${code * v}`;
				}
			}
		}
	}
}

function part2() {
	for (code in codes) {
		code = codes[code];

		for (v in codes) {
			v = codes[v];
			if (v != code) {
				for (i in codes) {
					i = codes[i];
					if (i != v && i != code) {
						let answer = v + code + i;
						if (answer == 2020) {
							return `Numbers: ${code}, ${v}, ${i} Answer: ${code * v * i}`;
						}
					}
				}
			}
		}
	}
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);
