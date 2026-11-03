const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const used = new Set();
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.matchAll(/src=["'](images\/[^"']+)["']/gi);
  for (const m of matches) {
    used.add(m[1]);
  }
});

const allImages = fs.readdirSync('images').map(f => 'images/' + f);
const unused = allImages.filter(img => !used.has(img) && img.endsWith('.jpg'));
console.log('Unused jpg images:', unused);

