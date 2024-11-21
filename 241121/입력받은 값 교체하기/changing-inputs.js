const fs = require("fs");
const arr = fs.readFileSync(0).toString();
const numberArr = arr.split(" ");
let a = parseInt(numberArr[0]);
let b = parseInt(numberArr[1]);

let temp = a;
a = b;
b = temp;

console.log(a, b);