const fs = require('fs');

const transcriptPath = 'C:\\Users\\Smart\\.gemini\\antigravity\\brain\\ffbc6ec9-8f88-48ff-85a6-281f9d084642\\.system_generated\\logs\\transcript.jsonl';
if (fs.existsSync(transcriptPath)) {
  const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('pexels-') && (l.includes('alt=') || l.includes('consultation') || l.includes('table') || l.includes('planner'))) {
      const match = l.match(/images\/pexels-[0-9]+\.jpg/g);
      if (match) {
        console.log(`Line ${idx}: ${[...new Set(match)].join(', ')}`);
      }
    }
  });
}

