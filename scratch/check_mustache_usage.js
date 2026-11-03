const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('pexels-4307869.jpg')) {
    console.log('Found pexels-4307869.jpg in', f);
  }
});

