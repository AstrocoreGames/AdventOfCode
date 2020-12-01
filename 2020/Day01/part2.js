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
				for (i in codes) {
					i = codes[i];
					if (i != v && i != code) {
						let answer = parseInt(v) + parseInt(code) + parseInt(i);
						if (answer == 2020) {
							return `${code} : ${v} : ${i}`;
						}
					}
				}
			}
		}
	}
}
console.log(main());
