const fs = require('fs');

const proposed = {
  'index.html': 'images/pexels-37849463.jpg',
  'home-page-2.html': 'images/pexels-32270845.jpg',
  'about.html': 'images/garden-arch.jpg',
  'services.html': 'images/pexels-14703685.jpg',
  'pricing.html': 'images/pexels-35985252.jpg',
  'blog.html': 'images/pexels-32994460.jpg',
  'faq.html': 'images/quinceanera-venue.jpg',
  'contact.html': 'images/pexels-16985112.jpg'
};

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let collisions = 0;
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  for (const [page, img] of Object.entries(proposed)) {
    // If the image is currently in another page (or in a section other than hero), check it:
    const regex = new RegExp(img.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      console.log(`Image ${img} (proposed for ${page}) found in ${f} (${matches.length} times)`);
      collisions++;
    }
  }
});

console.log('Total collisions in entire existing codebase:', collisions);

