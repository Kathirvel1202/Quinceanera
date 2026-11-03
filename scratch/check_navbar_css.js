const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('.navbar') || l.includes('.site-header') || l.includes('nav-links') || l.includes('is-open')) {
    console.log(`${i+1}: ${l}`);
  }
});

