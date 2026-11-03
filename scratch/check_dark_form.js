const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('body.dark-mode .field') || l.includes('body.dark-mode input') || l.includes('body.dark-mode select') || l.includes('body.dark-mode textarea') || l.includes('body.dark-mode .card')) {
    console.log(`${i+1}: ${l}`);
  }
});

