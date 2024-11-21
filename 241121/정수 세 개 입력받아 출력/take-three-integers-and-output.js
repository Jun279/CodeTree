const fs = require("fs");
const input = fs.readFileSync(0).toString();
let temp = input.split(" ");
let a = parseInt(temp[0]);
temp = temp[1].split("\n");
let b = parseInt(temp[0]);
let c = parseInt(temp[1]);

console.log(a, b, c);