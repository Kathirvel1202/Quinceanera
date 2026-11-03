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

const check = [
  'pexels-6476254.jpg',
  'pexels-7054238.jpg',
  'pexels-7180617.jpg',
  'pexels-20413840.jpg',
  'pexels-8454346.jpg',
  'pexels-8454349.jpg'
];

check.forEach(img => {
  const exists = fs.existsSync('images/' + img);
  const isUsed = used.has(img);
  console.log(`${img} -> exists: ${exists}, used: ${isUsed}`);
});

