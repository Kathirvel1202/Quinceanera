const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('event-cliffside-ceremony.jpg')) {
    console.log('Found in', f);
  }
});
console.log('Done checking usage.');

