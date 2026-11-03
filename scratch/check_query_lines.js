const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const imgQueries = ['4307869', '7600385', '9294072', '8467358', '6815418', '6666644', '28779027', '35985252', '37849463', '8466243', '35188691', 'quinceanera-dance', 'garden-arch'];

lines.forEach((l, idx) => {
  for (const q of imgQueries) {
    if (l.includes(q)) {
      // Find surrounding text
      const pos = l.indexOf(q);
      const start = Math.max(0, pos - 150);
      const end = Math.min(l.length, pos + 250);
      console.log(`[Line ${idx}] ${q}: ...${l.substring(start, end).replace(/\n/g, ' ')}...`);
      break;
    }
  }
});

