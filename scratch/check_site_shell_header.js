const fs = require('fs');
const shell = fs.readFileSync('js/site-shell.js', 'utf8');
const lines = shell.split('\n');
lines.forEach((l, i) => {
  if (l.includes('ResizeObserver') || l.includes('--site-header-height') || l.includes('headerHeight') || l.includes('menuToggle')) {
    console.log(`${i+1}: ${l}`);
  }
});

