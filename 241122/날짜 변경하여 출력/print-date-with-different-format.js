const fs = require("fs");
let input = fs.readFileSync(0).toString();
let date = input.split(".");

const y = parseInt(date[0]);
const m = parseInt(date[1]);
const d = parseInt(date[2]);

console.log(`${m}-${d}-${y}`);