const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split(":");
let h = parseInt(arr[0]);
let m = parseInt(arr[1]);

console.log(`${h+1}:${m}`);