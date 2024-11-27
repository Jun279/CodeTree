const fs = require("fs");
const input = parseInt(fs.readFileSync(0).toString());
if(input<0) {
    console.log("ice");
} else if(input<100) {
    console.log("water")
} else {
    console.log("vapor");
}