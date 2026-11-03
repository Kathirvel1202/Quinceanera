const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const testImgs = [
  'pexels-8466243.jpg',
  'pexels-8467358.jpg',
  'images/pexels-7180730.jpg',
  'images/pexels-7600385.jpg',
  'images/pexels-18777541.jpg',
  'images/pexels-17931427.jpg'
];

lines.forEach((l, i) => {
  for (const img of testImgs) {
    if (l.includes(img)) {
      const altMatch = l.match(new RegExp(`src=[\\\\\"']+images\/${img.replace('images/', '')}[\\\\\"']+[^>]*alt=[\\\\\"']+([^\\\\\"']+)[\\\\\"']`, 'i'))
        || l.match(new RegExp(`alt=[\\\\\"']+([^\\\\\"']+)[\\\\\"'][^>]*src=[\\\\\"']+images\/${img.replace('images/', '')}[\\\\\"']`, 'i'));
      if (altMatch) {
        console.log(`Step ${i}: ${img} -> ${altMatch[1]}`);
      }
    }
  }
});

