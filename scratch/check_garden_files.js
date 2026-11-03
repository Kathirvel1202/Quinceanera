const fs = require('fs');

const files = fs.readdirSync('images');
const gardenFiles = files.filter(f => f.toLowerCase().includes('garden') || f.toLowerCase().includes('floral') || f.toLowerCase().includes('arch'));

console.log('Garden / Floral / Arch images:', gardenFiles);

