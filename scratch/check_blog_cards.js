const fs = require('fs');
const blog = fs.readFileSync('blog.html', 'utf8');
const lines = blog.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Planning tools') || l.includes('Style and décor') || l.includes('Traditions and program')) {
    console.log(`${i+1}: ${l}`);
    console.log(lines.slice(Math.max(0, i-3), i+8).join('\n'));
  }
});

