const fs = require("fs");
let input = fs.readFileSync(0).toString();

let arr = input.split("\n");

let s = arr[0];
let t = arr[1];

let temp = s;
s = t;
t = temp;

console.log(s);
console.log(t);