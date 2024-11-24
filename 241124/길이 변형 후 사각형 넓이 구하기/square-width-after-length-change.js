const fs = require("fs");
const input = fs.readFileSync(0).toString();
let number = input.split(" ");

let a = parseInt(number[0])+8;
let b = parseInt(number[1])*3;

console.log(a);
console.log(b);
console.log(a*b);