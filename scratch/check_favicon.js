const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasIcon = /rel=["'].*icon["']/i.test(content);
  console.log(f + ': ' + (hasIcon ? 'HAS ICON' : 'MISSING ICON'));
});

