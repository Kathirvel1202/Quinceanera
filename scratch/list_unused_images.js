const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'images');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

// Collect all used images in HTML
const usedImages = new Set();
for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(rootDir, file), 'utf8');
    const matches = html.matchAll(/src=["'](?:images\/)?([^"']+\.(?:jpg|jpeg|png|webp|svg))["']/gi);
    for (const m of matches) {
        usedImages.add(m[1].replace('images/', ''));
    }
}

// List all files in images/
const allImages = fs.readdirSync(imagesDir);
const unused = allImages.filter(img => !usedImages.has(img) && !img.includes('favicon') && img !== 'QS.png');

console.log(`Total images in images/: ${allImages.length}`);
console.log(`Total used images: ${usedImages.size}`);
console.log(`Unused images (${unused.length}):`);
unused.forEach(img => console.log(' - ' + img));

