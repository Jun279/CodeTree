const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split("-");

const y = parseInt(arr[2]);
const m = parseInt(arr[0]);
const d = parseInt(arr[1]);

console.log(`${y}.${m}.${d}`);