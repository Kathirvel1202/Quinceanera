const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('contact-grid') || l.includes('form-grid') || l.includes('contact-inquiry') || l.includes('.check-list')) {
    console.log(`${i+1}: ${l}`);
  }
});
