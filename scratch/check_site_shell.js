const fs = require('fs');
const content = fs.readFileSync('js/site-shell.js', 'utf8');
console.log(content.slice(0, 1000));

