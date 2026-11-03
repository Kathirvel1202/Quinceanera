const fs = require('fs');
const path = require('path');

// 1. Remove <br> from <h1> in the 7 HTML files
const htmlFiles = [
  'about.html',
  'blog.html',
  'contact.html',
  'home-page-2.html',
  'index.html',
  'pricing.html',
  'services.html'
];

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/(<h1[^>]*>)([\s\S]*?)(<\/h1>)/gi, (match, open, inner, close) => {
    // Replace <br> or <br/> with a space, then trim any double spaces
    const cleanInner = inner.replace(/<br\s*\/?>/gi, ' ').replace(/\s{2,}/g, ' ');
    return open + cleanInner + close;
  });
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated H1 in ${file}`);
  }
});

console.log('HTML files H1 cleaned.');

