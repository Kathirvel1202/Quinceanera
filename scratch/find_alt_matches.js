const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const keywords = ['checklist', 'planning tools', 'notebook', 'calendar', 'laptop', 'timeline', 'table'];

lines.forEach((l, i) => {
  for (const kw of keywords) {
    if (l.toLowerCase().includes(kw) && l.includes('pexels-')) {
      const imgs = l.match(/images\/pexels-[0-9]+\.jpg/g);
      const altMatch = l.match(/alt=\\?["']([^"']*(?:checklist|planning|timeline|notepad|calendar)[^"']*)\\?["']/i);
      if (imgs && altMatch) {
        console.log(`Step ${i}: ${imgs[0]} -> ${altMatch[1]}`);
      }
    }
  }
});

