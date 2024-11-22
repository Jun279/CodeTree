const fs = require("fs");
let input = fs.readFileSync(0).toString();

let arr = input.split("\n");
let c = arr[0];
let a = Number(arr[1]).toFixed(2);
let b = Number(arr[2]).toFixed(2);

console.log(c);
console.log(a);
console.log(b);
