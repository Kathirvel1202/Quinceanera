const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const content = fs.readFileSync(transcriptPath, 'utf8');

const regex = /(?:phone|call|consult|talking|mobile|headset|smartphone|desk|conversation)[^"'\n\\]{0,100}(?:jpg|png)/gi;
const matches = content.match(regex);
console.log('Matches:', new Set(matches));

const regex2 = /images\/[a-zA-Z0-9_-]+\.jpg[^>]+(?:phone|call|consult|conversation)/gi;
const matches2 = content.match(regex2);
console.log('Matches2:', new Set(matches2));

