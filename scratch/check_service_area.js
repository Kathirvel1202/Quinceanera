const fs = require('fs');
const contact = fs.readFileSync('contact.html', 'utf8');
const lines = contact.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Service area') || l.includes('Choose the easiest way to begin')) {
    console.log(`${i+1}: ${l}`);
  }
});

