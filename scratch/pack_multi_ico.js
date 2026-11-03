const fs = require('fs');

const p16 = fs.readFileSync('favicon-16x16.png');
const p32 = fs.readFileSync('favicon-32x32.png');
const p48 = fs.readFileSync('favicon-48x48.png');

const images = [
  { w: 16, h: 16, buf: p16 },
  { w: 32, h: 32, buf: p32 },
  { w: 48, h: 48, buf: p48 }
];

const headerSize = 6;
const dirEntrySize = 16;
let currentOffset = headerSize + (dirEntrySize * images.length);

const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // ICO type
header.writeUInt16LE(images.length, 4); // count

const entries = [];
for (const img of images) {
  const entry = Buffer.alloc(dirEntrySize);
  entry.writeUInt8(img.w, 0);
  entry.writeUInt8(img.h, 1);
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(img.buf.length, 8); // size
  entry.writeUInt32LE(currentOffset, 12); // offset
  entries.push(entry);
  currentOffset += img.buf.length;
}

const finalIco = Buffer.concat([header, ...entries, ...images.map(img => img.buf)]);
fs.writeFileSync('favicon.ico', finalIco);
fs.writeFileSync('images/favicon.ico', finalIco);
fs.copyFileSync('favicon-32x32.png', 'images/favicon-32x32.png');
fs.copyFileSync('favicon-16x16.png', 'images/favicon-16x16.png');
console.log('Saved multi-resolution favicon.ico, size:', finalIco.length, 'bytes');

