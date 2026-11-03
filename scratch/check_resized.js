const fs = require('fs');
['favicon-16x16.png', 'favicon-32x32.png', 'favicon-48x48.png'].forEach(f => {
  const stat = fs.statSync(f);
  console.log(f, stat.size, 'bytes');
});

