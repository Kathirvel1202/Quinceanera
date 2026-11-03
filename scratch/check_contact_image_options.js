const fs = require('fs');

const candidates = [
  'images/event-cliffside-ceremony.jpg',
  'images/hero-home-ballroom-sparklers.jpg',
  'images/event-lighthouse-portrait.jpg',
  'images/floral-arch.jpg',
  'images/garden-arch.jpg',
  'images/quinceanera-venue.jpg',
  'images/quinceanera-dance.jpg',
  'images/pexels-16985112.jpg',
  'images/pexels-17315445.jpg',
  'images/pexels-14703685.jpg',
  'images/pexels-35985252.jpg',
  'images/pexels-32994460.jpg'
];

candidates.forEach(c => {
  if (fs.existsSync(c)) {
    console.log(c, fs.statSync(c).size, 'bytes');
  }
});

