const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString());
console.log(input);
if(input<0) {
    console.log("minus");
}
