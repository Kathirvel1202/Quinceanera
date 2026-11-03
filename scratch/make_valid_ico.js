const fs = require('fs');

const pngBuffer = fs.readFileSync('favicon.png');
const pngLength = pngBuffer.length;

// Create a valid ICO header with 1 image entry containing the PNG
// Header: 6 bytes
// [0, 0] = Reserved
// [1, 0] = Type 1 (icon)
// [1, 0] = Count (1 image)
// Directory Entry: 16 bytes
// [0] = Width (0 for 256 or any >255)
// [0] = Height
// [0] = Color count
// [0] = Reserved
// [1, 0] = Color planes (1)
// [32, 0] = Bits per pixel (32)
// [size 4 bytes LE] = pngLength
// [offset 4 bytes LE] = 6 + 16 = 22

const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);       // Reserved
icoHeader.writeUInt16LE(1, 2);       // Type 1 (icon)
icoHeader.writeUInt16LE(1, 4);       // Count: 1
icoHeader.writeUInt8(0, 6);          // Width: 0 (256 or custom)
icoHeader.writeUInt8(0, 7);          // Height: 0 (256 or custom)
icoHeader.writeUInt8(0, 8);          // Color count
icoHeader.writeUInt8(0, 9);          // Reserved
icoHeader.writeUInt16LE(1, 10);      // Planes
icoHeader.writeUInt16LE(32, 12);     // BPP
icoHeader.writeUInt32LE(pngLength, 14); // Image size
icoHeader.writeUInt32LE(22, 18);     // Offset of image data

const validIco = Buffer.concat([icoHeader, pngBuffer]);
fs.writeFileSync('favicon.ico', validIco);
console.log('Created valid favicon.ico, size:', validIco.length);

