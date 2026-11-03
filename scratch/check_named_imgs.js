const fs = require('fs');

const allImgs = fs.readdirSync('images').filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

// Check if any files have metadata or names
const named = allImgs.filter(f => !f.startsWith('pexels-'));
console.log('Named files:', named);

// Let's check git log to see when images were added or what commit messages said

