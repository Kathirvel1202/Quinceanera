const fs = require('fs');

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const lines = mainJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('menuToggle') || l.includes('ResizeObserver') || l.includes('--site-header-height') || l.includes('headerSlot')) {
    console.log(`${i+1}: ${l}`);
  }
});

