const fs = require("fs");
const input = fs. readFileSync(0).toString();
const numberArr = input.split("\n");

let a = parseInt(numberArr[0]);
let b = parseInt(numberArr[1]);

console.log(a*b);