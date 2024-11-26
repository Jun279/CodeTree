const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString());
console.log(input*input);

if(input<5) {
    console.log("tiny");
}