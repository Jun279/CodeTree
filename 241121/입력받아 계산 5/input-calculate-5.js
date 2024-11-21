const fs = require("fs");
let arr = fs.readFileSync(0).toString();
let numberArr = arr.split(" ");

let a = parseInt(numberArr[0]);
let b = parseInt(numberArr[1]);

console.log(a+b);