const fs = require("fs");
let codes = fs.readFileSync("input.txt", "utf8").split("\n");

for (code in codes) {
	codes[code] = codes[code].replace("\r", "");
}

function main() {
	for (code in codes) {
		code = codes[code];

		for (v in codes) {
			v = codes[v];
			if (v != code) {
				let answer = parseInt(v) + parseInt(code);
				if (answer == 2020) {
					return `${code} : ${v}`;
				}
			}
		}
	}
}

console.log(main());
