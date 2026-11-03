const fs = require('fs');
const buf = fs.readFileSync('images/QS.png');
// PNG width is at offset 16, height at offset 20 (4 bytes big-endian)
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log('images/QS.png dimensions:', width, 'x', height);

