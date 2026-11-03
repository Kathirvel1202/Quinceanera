const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const used = new Set();
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.matchAll(/src=["'](images\/[^"']+)["']/gi);
  for (const m of matches) {
    used.add(m[1].replace('images/', ''));
  }
});

const allNamed = fs.readdirSync('images').filter(f => !f.startsWith('pexels-') && !f.startsWith('favicon') && !f.startsWith('hero-') && !f.startsWith('event-') && f.endsWith('.jpg'));
console.log('Named images and usage:');
allNamed.forEach(f => {
  console.log(f, used.has(f) ? 'USED' : 'UNUSED');
});
