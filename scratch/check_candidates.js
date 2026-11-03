const fs = require('fs');

const candidates = [
  'images/event-scenic-lake-arch.jpg',
  'images/event-pavilion-red-carpet.jpg',
  'images/event-cliffside-ceremony.jpg',
  'images/event-lighthouse-portrait.jpg'
];

candidates.forEach(c => {
  const stat = fs.statSync(c);
  console.log(c, stat.size, 'bytes');
});

