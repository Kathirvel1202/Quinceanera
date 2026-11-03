const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const targets = [
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

targets.forEach(t => {
  const hits = [];
  lines.forEach(l => {
    if (l.includes(t)) {
      // Find alt or prompt or nearby text
      const altMatch = l.match(new RegExp(`alt=[\\\\\"']+([^\\\\\"']+)[\\\\\"']`, 'i'));
      if (altMatch && !hits.includes(altMatch[1])) {
        hits.push(altMatch[1]);
      }
    }
  });
  console.log(`${t} ->`, hits.slice(0, 3));
});

