const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/style\.css\?v=[0-9.]+/g, 'style.css?v=3.9');
  fs.writeFileSync(f, content, 'utf8');
  console.log(`Bumped cache-buster to v=3.9 in ${f}`);
});
