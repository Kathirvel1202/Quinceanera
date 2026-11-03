const fs = require('fs');
const files = fs.readdirSync('images').filter(f => f.startsWith('pexels-32270845'));
console.log('Found:', files);

