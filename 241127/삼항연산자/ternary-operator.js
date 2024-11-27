const fs = require('fs');
const input = parseInt(fs.readFileSync(0).toString());
input === 100 ? console.log("pass") : console.log("failure");