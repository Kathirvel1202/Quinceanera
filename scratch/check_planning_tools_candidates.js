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

const planningCandidates = [
  'images/pexels-20413840.jpg',
  'images/pexels-7180730.jpg',
  'images/pexels-7600385.jpg',
  'images/pexels-8467358.jpg',
  'images/pexels-8466243.jpg',
  'images/pexels-37120133.jpg',
  'images/pexels-37296132.jpg'
];

planningCandidates.forEach(p => {
  if (fs.existsSync(p)) {
    console.log(p, 'used:', used.has(p), 'size:', fs.statSync(p).size);
  }
});

