const fs = require('fs');
const input = parseInt(fs.readFileSync(0).toString());
if(input>=113) {
    console.log(1);
} else {
    console.log(0);
}