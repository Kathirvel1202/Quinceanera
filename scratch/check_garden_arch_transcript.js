const fs = require('fs');

// Check alt in transcript for garden-arch.jpg
const transcript = fs.readFileSync('C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl', 'utf8');

const m = transcript.match(/garden-arch\.jpg[^}\n]+/g);
console.log('Transcript matches for garden-arch.jpg:', m ? m.slice(0, 5) : 'none');

