const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.user_uploaded';

const newImages = [
  'media_1793704495525_689ce0d0.jpg', // 1
  'media_1793704495532_5dc4575a.jpg', // 2
  'media_1793704495543_04b0fc36.jpg', // 3
  'media_1793704495546_06f3e2ce.jpg', // 4
  'media_1793704495562_79035c00.jpg', // 5
  'media_1793704614939_af5cbb42.jpg', // 6
  'media_1793704614979_9c269176.jpg', // 7
  'media_1793704614983_c5a8bd18.jpg', // 8
  'media_1793704614988_fade4970.jpg', // 9
  'media_1793704614996_6f0e234e.jpg', // 10
  'media_1793704661598_1b71b422.jpg', // 11
  'media_1793704661620_8a89a148.jpg'  // 12
];

function getJpgDimensions(buf) {
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) break;
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

newImages.forEach((img, idx) => {
  const fullPath = path.join(uploadDir, img);
  if (fs.existsSync(fullPath)) {
    const buf = fs.readFileSync(fullPath);
    const dims = getJpgDimensions(buf);
    console.log(`[${idx+1}] ${img} -> Size: ${buf.length} bytes, Dims: ${dims ? dims.width + 'x' + dims.height : 'unknown'}`);
  } else {
    console.log(`[${idx+1}] ${img} NOT FOUND!`);
  }
});

