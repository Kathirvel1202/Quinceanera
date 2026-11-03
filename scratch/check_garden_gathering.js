const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Garden gathering') || l.includes('garden-gathering') || l.includes('Airy florals')) {
    console.log(`${i+1}: ${l}`);
    console.log(lines.slice(Math.max(0, i-5), i+8).join('\n'));
  }
});

