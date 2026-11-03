const fs = require('fs');

const finalHeroes = {
  'index.html': {
    src: 'images/pexels-37849463.jpg',
    alt: 'Quinceañera celebrant dancing in a sparkling ballgown with tiara surrounded by celebration lights',
    desc: 'Celebrant in ballgown dancing with tiara and magical party lights'
  },
  'home-page-2.html': {
    src: 'images/pexels-32270845.jpg',
    alt: 'Quinceañera celebrant in an elegant light blue ballgown performing her milestone waltz',
    desc: 'Quinceañera in blue ballgown dancing with partner in grand hall'
  },
  'about.html': {
    src: 'images/garden-arch.jpg',
    alt: 'Scenic circular floral celebration arch overlooking the serene ocean horizon',
    desc: 'Circular floral arch with serene ocean horizon'
  },
  'services.html': {
    src: 'images/pexels-14703685.jpg',
    alt: 'Lush white floral archway and banquet ceremony seating prepared for a milestone celebration',
    desc: 'White floral archway with golden chairs and garden setting'
  },
  'pricing.html': {
    src: 'images/pexels-35985252.jpg',
    alt: 'Scenic outdoor event pavilion with floral ceremony arch and panoramic celebration grounds',
    desc: 'Scenic outdoor event venue with floral arch and countryside views'
  },
  'blog.html': {
    src: 'images/pexels-32994460.jpg',
    alt: 'Grand symmetrical celebration aisle framed with draped lilac fabrics and floral columns',
    desc: 'Symmetrical draped lilac canopy entrance aisle'
  },
  'faq.html': {
    src: 'images/quinceanera-venue.jpg',
    alt: 'Luxury celebration ballroom stage decorated with crystal chandeliers, florals, and milestone cake',
    desc: 'Palace ballroom stage with chandeliers, flowers, and cake'
  },
  'contact.html': {
    src: 'images/pexels-16985112.jpg',
    alt: 'Sophisticated event planning venue with warm ambient lighting and elegant table arrangements',
    desc: 'Sophisticated event hall with warm ambient brick lighting'
  }
};

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('=== VERIFYING FINAL HERO IMAGES ===');
let collisionFound = false;

for (const [page, data] of Object.entries(finalHeroes)) {
  const matches = [];
  htmlFiles.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(data.src)) matches.push(f);
  });
  if (matches.length > 0) {
    console.log(`COLLISION: ${data.src} is already used in: ${matches.join(', ')}`);
    collisionFound = true;
  } else {
    console.log(`CLEAN: ${page} -> ${data.src} (${data.desc})`);
  }
}

if (!collisionFound) {
  console.log('\nSUCCESS: All 8 proposed hero images are 100% UNUSED and FRESH across the entire site!');
}

