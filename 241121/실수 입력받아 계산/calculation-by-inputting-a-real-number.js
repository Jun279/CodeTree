const fs = require("fs");
const input = fs.readFileSync(0).toString();
const numberArr = input.split("\n");

let a = Number(numberArr[0]);
let b = Number(numberArr[1]);

console.log((a+b).toFixed(2));