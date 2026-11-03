const fs = require('fs');
const mainJs = fs.readFileSync('js/main.js', 'utf8');
const lines = mainJs.split('\n');
console.log(lines.slice(15, 65).join('\n'));

