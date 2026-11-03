const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('@media') || (l.includes('.hero') && i > 300)) {
    console.log(`${i+1}: ${l}`);
  }
});

