const fs = require('fs');

const allImages = fs.readdirSync('images');
console.log('All image filenames in images/:');
console.log(allImages.filter(f => f.endsWith('.jpg') || f.endsWith('.png')));

