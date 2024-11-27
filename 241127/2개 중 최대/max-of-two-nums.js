const fs = require('fs');
const input = fs.readFileSync(0).toString();
const arr = input.split(" ");
const a = parseInt(arr[0]);
const b = parseInt(arr[1]);

a>b ? console.log(a) : console.log(b);