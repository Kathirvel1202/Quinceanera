const fs = require('fs');

// Check garden-arch.jpg and pexels-28779027.jpg
const path = require('path');

console.log('garden-arch.jpg exists:', fs.existsSync('images/garden-arch.jpg'));
console.log('pexels-28779027.jpg exists:', fs.existsSync('images/pexels-28779027.jpg'));

// Let's check if there are other garden images
const allImages = fs.readdirSync('images');
allImages.filter(f => f.includes('garden') || f.includes('floral')).forEach(f => {
  console.log(' -', f, fs.statSync('images/' + f).size);
});

