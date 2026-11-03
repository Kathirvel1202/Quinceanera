const fs = require('fs');
const services = fs.readFileSync('services.html', 'utf8');
const lines = services.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Architectural Planning Standards') || l.includes('Client & Family Concierge')) {
    console.log(`${i+1}: ${l}`);
    console.log(lines.slice(Math.max(0, i-2), i+25).join('\n'));
  }
});

