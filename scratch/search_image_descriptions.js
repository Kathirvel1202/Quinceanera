const fs = require('fs');

const scratchFiles = fs.readdirSync('scratch');
scratchFiles.forEach(f => {
  if (f.endsWith('.js') || f.endsWith('.py') || f.endsWith('.json')) {
    const content = fs.readFileSync('scratch/' + f, 'utf8');
    if (content.includes('pexels-') && (content.includes('alt') || content.includes('description') || content.includes('consultation') || content.includes('planning'))) {
      console.log('Found in', f);
    }
  }
});

