const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString());

if(input % 2 === 0) {
    input /= 2;
}
if(input % 2 !== 0) {
    (input+1)/2;
}

console.log(input);