const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('pexels-37930427.jpg')) {
    console.log('Found pexels-37930427.jpg in', f);
  }
});
console.log('Done checking pexels-37930427.jpg');

