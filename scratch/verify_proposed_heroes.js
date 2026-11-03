const fs = require('fs');

const proposedHeroes = {
  'index.html': 'images/pexels-17931366.jpg', // Quinceañera in purple gown dancing with father on starlight floor
  'home-page-2.html': 'images/pexels-32270845.jpg', // Quinceañera in blue ballgown dancing with partner in grand hall
  'about.html': 'images/garden-arch.jpg', // Circular floral arch framing the ocean, perfect open center
  'services.html': 'images/pexels-12688993.jpg', // Grand golden brick ballroom with chandeliers and table setting
  'pricing.html': 'images/pexels-17294764.jpg', // Opulent evening ballroom with hanging flowers and open center
  'blog.html': 'images/pexels-32994460.jpg', // Symmetrical draped lilac canopy entrance aisle
  'faq.html': 'images/quinceanera-venue.jpg', // Palace ballroom stage with flowers and cake
  'contact.html': 'images/pexels-17001733.jpg' // Warm amber brick dining room with soft ambient lighting
};

// Check if any of these are currently used in non-hero sections of any HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== CHECKING PROPOSED HERO IMAGES ===');
for (const [page, heroImg] of Object.entries(proposedHeroes)) {
  const matches = [];
  htmlFiles.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    // Check if heroImg is used in f outside of its own hero tag
    const re = new RegExp(heroImg, 'g');
    const count = (c.match(re) || []).length;
    if (count > 0) matches.push(`${f} (${count})`);
  });
  console.log(`${page} -> ${heroImg}: used in ${matches.length ? matches.join(', ') : 'NONE (completely fresh!)'}`);
}

