const fs = require("fs");
let arr = fs.readFileSync(0).toString();
let numberArr = arr.split(" ");

let a = parseINf(numberArr[0]);
let b = parseINf(numberArr[1]);

console.log(a+b);