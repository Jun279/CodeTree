const fs = require("fs");
let input = fs.readFileSync(0).toString();
let number = input.split("\n");
let a = parseInt(number[0]);
let b = parseInt(number[1]);

console.log(a+87);
console.log(b%10);