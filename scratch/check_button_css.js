const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('button-outline') || l.includes('.button') || l.includes('hero-button')) {
    console.log(`${i+1}: ${l}`);
  }
});

