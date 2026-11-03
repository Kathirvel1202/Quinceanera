const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('floral-arch.jpg')) {
    console.log('floral-arch.jpg found in', f);
  }
  if (content.includes('garden-arch.jpg')) {
    console.log('garden-arch.jpg found in', f);
  }
});
console.log('Done checking floral-arch.jpg and garden-arch.jpg');

