const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('pexels-36668766.jpg')) {
    console.log('pexels-36668766.jpg found in', f);
  }
});
console.log('Done checking pexels-36668766.jpg');

