const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.user_uploaded';

const mappings = [
  { src: 'media_1793704495525_689ce0d0.jpg', dest: 'hero-home-ballroom-sparklers.jpg', page: 'index.html' },
  { src: 'media_1793704614939_af5cbb42.jpg', dest: 'hero-home2-celebrant-gown.jpg', page: 'home-page-2.html' },
  { src: 'media_1793704661598_1b71b422.jpg', dest: 'hero-about-scenic-gathering.jpg', page: 'about.html' },
  { src: 'media_1793704614979_9c269176.jpg', dest: 'hero-services-mirror-aisle.jpg', page: 'services.html' },
  { src: 'media_1793704614983_c5a8bd18.jpg', dest: 'hero-pricing-palace-banquet.jpg', page: 'pricing.html' },
  { src: 'media_1793704495562_79035c00.jpg', dest: 'hero-blog-editorial-veil.jpg', page: 'blog.html' },
  { src: 'media_1793704614988_fade4970.jpg', dest: 'hero-faq-confetti-family.jpg', page: 'faq.html' },
  { src: 'media_1793704661620_8a89a148.jpg', dest: 'hero-contact-garden-venue.jpg', page: 'contact.html' },
  
  // Also copy the other 4 uploaded images as extras:
  { src: 'media_1793704495532_5dc4575a.jpg', dest: 'event-cliffside-ceremony.jpg', page: null },
  { src: 'media_1793704495543_04b0fc36.jpg', dest: 'event-lighthouse-portrait.jpg', page: null },
  { src: 'media_1793704495546_06f3e2ce.jpg', dest: 'event-scenic-lake-arch.jpg', page: null },
  { src: 'media_1793704614996_6f0e234e.jpg', dest: 'event-pavilion-red-carpet.jpg', page: null }
];

mappings.forEach(m => {
  const srcPath = path.join(uploadDir, m.src);
  const destPath = path.join('images', m.dest);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${m.src} -> images/${m.dest}`);
});

console.log('All 12 user-uploaded images successfully copied to images/ directory!');

