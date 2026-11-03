const fs = require('fs');

const allImgs = fs.readdirSync('images').filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
console.log('Total images in images/ folder: ' + allImgs.length);

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const usedImgs = new Set();
htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.matchAll(/images\/([^"'\s]+)/g);
  for (const match of m) {
    usedImgs.add(match[1]);
  }
});

const unused = allImgs.filter(img => !usedImgs.has(img));
console.log('Unused images available: ' + unused.length);
console.log('Unused list:', unused);

