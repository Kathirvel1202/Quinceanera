const fs = require('fs');
const png = fs.readFileSync('favicon.png');
console.log('PNG size:', png.length, 'bytes');
const b64 = png.toString('base64');
console.log('Base64 length:', b64.length, 'chars');

