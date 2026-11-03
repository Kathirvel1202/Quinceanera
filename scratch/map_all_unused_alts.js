const fs = require('fs');

const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const used = new Set();
allHtml.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.matchAll(/src=["'](images\/[^"']+)["']/gi);
  for (const m of matches) {
    used.add(m[1].replace('images/', ''));
  }
});

const unused = fs.readdirSync('images').filter(f => !used.has(f) && f.endsWith('.jpg'));

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const foundAlts = {};

lines.forEach(l => {
  for (const img of unused) {
    if (l.includes(img) && !foundAlts[img]) {
      const match = l.match(new RegExp(`src=[\\\\\"']+images\/${img}[\\\\\"']+[^>]*alt=[\\\\\"']+([^\\\\\"']+)[\\\\\"']`, 'i'))
        || l.match(new RegExp(`alt=[\\\\\"']+([^\\\\\"']+)[\\\\\"'][^>]*src=[\\\\\"']+images\/${img}[\\\\\"']`, 'i'));
      if (match) {
        foundAlts[img] = match[1];
      }
    }
  }
});

for (const [img, alt] of Object.entries(foundAlts)) {
  console.log(`${img} -> ${alt}`);
}

