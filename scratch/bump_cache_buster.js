const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;
for (const file of htmlFiles) {
    const filePath = path.join(rootDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    const original = html;

    // Update style.css cache-buster
    html = html.replace(/css\/style\.css(\?v=[0-9.]+)?/g, 'css/style.css?v=4.2');

    // Update js/main.js cache-buster
    html = html.replace(/js\/main\.js(\?v=[0-9.]+)?/g, 'js/main.js?v=4.2');

    // Update js/site-shell.js cache-buster
    html = html.replace(/js\/site-shell\.js(\?v=[0-9.]+)?/g, 'js/site-shell.js?v=4.2');

    if (html !== original) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated cache-busters in ${file}`);
        updatedCount++;
    }
}

console.log(`Total files updated: ${updatedCount} / ${htmlFiles.length}`);
