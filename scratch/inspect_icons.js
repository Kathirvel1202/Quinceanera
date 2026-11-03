const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/gi);
  console.log(f, match);
});

