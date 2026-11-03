const fs = require('fs');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const named = [
  'banquet-hall.jpg',
  'banquet-table.jpg',
  'celebration-cake.jpg',
  'classic-reception.jpg',
  'cta-father-daughter-dance.jpg',
  'floral-arch.jpg',
  'floral-glassware.jpg',
  'floral-setup.jpg',
  'friends-celebrating.jpg',
  'garden-arch.jpg',
  'outdoor-table.jpg',
  'quinceanera-dance.jpg',
  'quinceanera-venue.jpg',
  'rose-table.jpg'
];

named.forEach(img => {
  const matches = [];
  htmlFiles.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(img)) matches.push(f);
  });
  console.log(`${img}: ${matches.length ? matches.join(', ') : 'UNUSED'}`);
});

