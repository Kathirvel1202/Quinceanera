const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
console.log('--- Light Variables ---');
console.log(lines.slice(10, 25).join('\n'));
console.log('--- Dark Variables ---');
lines.forEach((l, i) => {
  if (l.includes('--hero-overlay') || l.includes('--hero-h1-shadow')) {
    console.log(`${i+1}: ${l}`);
  }
});

