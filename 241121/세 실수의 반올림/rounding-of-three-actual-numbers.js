const fs = require("fs");
const input = fs.readFileSync(0).toString();
let numberArr = input.split("\n");

let a = Number(numberArr[0]);
let b = Number(numberArr[1]);
let c = Number(numberArr[2]);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));