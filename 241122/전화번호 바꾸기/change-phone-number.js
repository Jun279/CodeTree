const fs = require("fs");
const input = fs.readFileSync(0).toString();
let arr = input.split("-");
let first = arr[0];
let second = arr[1];
let third = arr[2];

console.log(`${first}-${third}-${second}`);