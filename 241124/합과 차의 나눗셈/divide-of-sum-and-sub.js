const fs = require('fs');
const input = fs.readFileSync(0).toString();
let number = input.split(" ");
let a = parseInt(number[0]);
let b = parseInt(number[1]);

console.log(((a+b)/(a-b)).toFixed(2));