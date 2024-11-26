const fs = require("fs");
const input = fs.readFileSync(0).toString();
let arr = input.split(" ");
let h = parseInt(arr[0]);
let w = parseInt(arr[1]);

let b = (10000*w) / (h*h);

console.log(parseInt(b));
if(b>25) {
    console.log("Obesity");
}