const fs = require("fs");
const input = fs.readFileSync(0).toString();
const arr = input.split(" ");

const a = parseInt(arr[0]);
const b = parseInt(arr[1]);

if(a%2==0) {
    console.log("even");
} else {
    console.log("odd");
}

if(b%2==0) {
    console.log("even");
} else {
    console.log("odd");
}