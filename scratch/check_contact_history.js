const fs = require('fs');
const { execSync } = require('child_process');

// Let's inspect all html files in all git commits to see how images were used and what alt texts they had!
const commits = execSync('git log --format="%H"', { encoding: 'utf8' }).trim().split('\n');

const allImgAlts = {};

commits.forEach(c => {
  try {
    const show = execSync(`git show ${c}:contact.html`, { encoding: 'utf8' });
    const matches = show.matchAll(/src=["'](images\/[^"']+)["'][^>]*alt=["']([^"']+)["']/gi);
    for (const m of matches) {
      if (!allImgAlts[m[1]]) allImgAlts[m[1]] = m[2];
    }
  } catch (e) {}
});

console.log('Images in contact.html history:', allImgAlts);

