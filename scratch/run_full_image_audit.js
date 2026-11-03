const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const imageUsage = {};
let missingFiles = 0;

allHtml.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match all src="..." in <img> tags
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  for (const match of imgMatches) {
    const src = match[1];
    // Ignore data URIs or external links if any
    if (src.startsWith('data:')) continue;
    
    // Logo "images/QS.png" is the brand logo and appears in header/footer across pages, but content images must be unique!
    if (!imageUsage[src]) {
      imageUsage[src] = [];
    }
    imageUsage[src].push(file);

    if (!fs.existsSync(src)) {
      console.error(`ERROR: File does not exist: ${src} referenced in ${file}`);
      missingFiles++;
    }
  }
});

console.log('--- CONTENT IMAGE DUPLICATION AUDIT ---');
let duplicateContentImages = 0;
let totalContentImages = 0;

for (const [src, files] of Object.entries(imageUsage)) {
  if (src === 'images/QS.png' || src === 'images/favicon.ico' || src.includes('favicon')) {
    // Brand identity icon/logo, allowed on all pages
    continue;
  }
  totalContentImages++;
  if (files.length > 1) {
    console.error(`DUPLICATE CONTENT IMAGE FOUND: ${src} used in: ${files.join(', ')}`);
    duplicateContentImages++;
  }
}

console.log(`Total unique content images: ${totalContentImages}`);
console.log(`Duplicate content images: ${duplicateContentImages}`);
console.log(`Missing image files: ${missingFiles}`);

if (duplicateContentImages === 0 && missingFiles === 0) {
  console.log('SUCCESS: All content images are 100% unique and exist on disk!');
} else {
  console.error('AUDIT FAILED!');
}

