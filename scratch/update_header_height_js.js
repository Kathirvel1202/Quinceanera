const fs = require('fs');
const path = require('path');

const mainJsPath = path.resolve(__dirname, '../js/main.js');
let content = fs.readFileSync(mainJsPath, 'utf8');

content = content.replace('let closedHeaderHeight = 72;', 'let closedHeaderHeight = 58;');
fs.writeFileSync(mainJsPath, content, 'utf8');
console.log("Updated closedHeaderHeight to 58 in main.js!");

