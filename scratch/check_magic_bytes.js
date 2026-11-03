const fs = require('fs');
const ico = fs.readFileSync('favicon.ico');
const png = fs.readFileSync('favicon.png');
console.log('favicon.ico header:', ico.slice(0, 8));
console.log('favicon.png header:', png.slice(0, 8));

