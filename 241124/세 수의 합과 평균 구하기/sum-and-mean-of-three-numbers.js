const fs = require('fs');
const input = fs.readFileSync(0).toString();
let number = input.split(" ");
let a = parseInt(number[0]);
let b = parseInt(number[1]);
let c = parseInt(number[2]);

console.log(a+b+c);
console.log(parseInt((a+b+c)/3));