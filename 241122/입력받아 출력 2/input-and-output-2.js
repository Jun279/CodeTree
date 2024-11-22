const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split("-");
let number = arr[0]+arr[1];
console.log(number);