import * as fs from 'fs'
const codes = fs.readFileSync("input.txt", "utf8").split("\n")

for (let code in codes) {
	codes[code] = codes[code].replace("\r", "");
}


function part1() {
    let validPasswords = 0;
    for (let code in codes) {
        code = codes[code]
    
        let ammount = code.split(" ")[0]
        let letter = code.split(" ")[1].replace(":", "")
        let password = code.split(" ")[2]

        let min = parseInt(ammount.split("-")[0])
        let max = parseInt(ammount.split("-")[1])
        let letterCount = 0;

        for (let char in password.split("")) {
            char = password.split("")[char]
            if (char == letter) {
                letterCount++;
            }
        }

        if (letterCount >= min && letterCount <= max) {
            validPasswords++;
        }
    }
    return validPasswords
}

function part2() {
    let validPasswords = 0;
    for (let code in codes) {
        code = codes[code]
    
        let ammount = code.split(" ")[0]
        let letter = code.split(" ")[1].replace(":", "")
        let password = code.split(" ")[2]

        let one = parseInt(ammount.split("-")[0])
        let two = parseInt(ammount.split("-")[1])

        if (password.split("")[one - 1] == letter && password.split("")[two - 1] != letter ||  password.split("")[one - 1] != letter && password.split("")[two - 1] == letter) {
            validPasswords++;
        } 
    }
    return validPasswords
}

console.log("Part 1: " + part1())
console.log("Part 2: " + part2())
