const fs = require('fs');
const input = fs.readFileSync(0).toString();
const arr = input.split(" ");
let a = parseInt(arr[0]);
let b = parseInt(arr[1]);

if(a>b) {
    console.log(a*b);
} else {
    console.log(parseInt(b/a));
}