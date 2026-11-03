const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

// Find sections related to hero, page-hero, hero-content, button-row
const lines = css.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('.hero') || line.includes('.page-hero') || line.includes('hero-content') || line.includes('page-hero-content') || line.includes('--hero-overlay')) {
    console.log(`${idx + 1}: ${line}`);
  }
});

