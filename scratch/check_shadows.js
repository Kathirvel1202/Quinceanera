const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('--hero-h1-shadow') || l.includes('--hero-p-shadow')) {
    console.log(`${i+1}: ${l}`);
  }
});

