const fs = require('fs');
const path = require('path');

const candidates = [
  'pexels-4307869.jpg',
  'pexels-7600385.jpg',
  'pexels-9294072.jpg',
  'pexels-8467358.jpg',
  'pexels-6815418.jpg',
  'pexels-6666644.jpg',
  'pexels-28779027.jpg',
  'garden-arch.jpg',
  'pexels-35985252.jpg',
  'hero-home-ballroom-sparklers.jpg',
  'pexels-8466243.jpg',
  'pexels-35188691.jpg',
  'pexels-37849463.jpg',
  'quinceanera-dance.jpg'
];

candidates.forEach(file => {
  const p = path.join('images', file);
  if (fs.existsSync(p)) {
    const stats = fs.statSync(p);
    console.log(`${file} exists, size: ${stats.size} bytes`);
  } else {
    console.log(`${file} NOT found`);
  }
});
