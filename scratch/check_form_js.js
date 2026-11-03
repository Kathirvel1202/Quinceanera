const fs = require('fs');
const js = fs.readFileSync('js/main.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('demo-form') || l.includes('form-confirmation')) {
    console.log(`${i+1}: ${l}`);
  }
});

