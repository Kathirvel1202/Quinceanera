const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));

allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasIco = content.includes('href="favicon.ico"');
  const has32 = content.includes('href="favicon-32x32.png"');
  const has16 = content.includes('href="favicon-16x16.png"');
  const hasTouch = content.includes('href="images/QS.png"');
  console.log(`${f}: ico=${hasIco}, 32x32=${has32}, 16x16=${has16}, touch=${hasTouch}`);
});

