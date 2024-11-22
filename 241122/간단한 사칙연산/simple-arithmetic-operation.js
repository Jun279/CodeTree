const fs = require("fs");
const input = fs.readFileSync(0).toString();
const number = input.split(" ");

const a = parseInt(number[0]);
const b = parseInt(number[1]);

console.log(a+b);
console.log(a-b);
console.log(parseInt(a/b));
console.log(a%b);