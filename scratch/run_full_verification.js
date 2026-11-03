const fs = require('fs');

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 255, num & 255];
}

function contrast(rgb1, rgb2) {
  const l1 = luminance(...rgb1);
  const l2 = luminance(...rgb2);
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
}

// 1. Audit key color combinations
console.log('=== WCAG CONTRAST AUDIT ===');
const pairs = [
  // Light Mode Frosted Hero Card (bg ~ #F7F5F2 or #FFFFFF)
  { name: 'Light Mode Hero H1 (#141210 on #FFFFFF)', fg: '#141210', bg: '#ffffff', min: 4.5 },
  { name: 'Light Mode Hero Paragraph (#383028 on #FFFFFF)', fg: '#383028', bg: '#ffffff', min: 4.5 },
  { name: 'Light Mode Hero Eyebrow (#943e00 on #FFFFFF)', fg: '#943e00', bg: '#ffffff', min: 4.5 },
  { name: 'Light Mode Button Primary (White on #B35500)', fg: '#ffffff', bg: '#b35500', min: 4.5 },
  { name: 'Light Mode Button Outline (#A85000 on #FFFFFF)', fg: '#a85000', bg: '#ffffff', min: 4.5 },
  
  // Dark Mode Frosted Hero Card (bg ~ #16120F or #1E1B18)
  { name: 'Dark Mode Hero H1 (White on #16120F)', fg: '#ffffff', bg: '#16120f', min: 4.5 },
  { name: 'Dark Mode Hero Paragraph (#E8DED4 on #16120F)', fg: '#e8ded4', bg: '#16120f', min: 4.5 },
  { name: 'Dark Mode Hero Eyebrow (#FFD28B on #16120F)', fg: '#ffd28b', bg: '#16120f', min: 4.5 },
  { name: 'Dark Mode Button Primary (White on #B35500)', fg: '#ffffff', bg: '#b35500', min: 4.5 },
  { name: 'Dark Mode Button Outline (#FFD28B on #26201B)', fg: '#ffd28b', bg: '#26201b', min: 4.5 },

  // Site Wide Light Mode
  { name: 'Light Mode Body Text (#252525 on #FFFAF0)', fg: '#252525', bg: '#fffaf0', min: 4.5 },
  { name: 'Light Mode Card H3 (#493522 on #FFFFFF)', fg: '#493522', bg: '#ffffff', min: 4.5 },
  { name: 'Light Mode Card Copy (#555555 on #FFFFFF)', fg: '#555555', bg: '#ffffff', min: 4.5 },

  // Site Wide Dark Mode
  { name: 'Dark Mode Body Text (#F4EEE8 on #1E1B18)', fg: '#f4eee8', bg: '#1e1b18', min: 4.5 },
  { name: 'Dark Mode Card Copy (#D1C8BD on #292624)', fg: '#d1c8bd', bg: '#292624', min: 4.5 },
  { name: 'Dark Mode Accent / Eyebrow (#FFD28B on #1E1B18)', fg: '#ffd28b', bg: '#1e1b18', min: 4.5 },
  { name: 'Dark Mode Accent / Eyebrow (#FFD28B on #292624)', fg: '#ffd28b', bg: '#292624', min: 4.5 }
];

let allPassed = true;
pairs.forEach(p => {
  const ratio = contrast(hexToRgb(p.fg), hexToRgb(p.bg));
  const pass = ratio >= p.min;
  if (!pass) allPassed = false;
  console.log(`${pass ? 'PASS' : 'FAIL'} [${ratio.toFixed(2)}:1] ${p.name}`);
});

console.log('\n=== IMAGE DUPLICATE AUDIT ===');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const imageMap = {};
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.matchAll(/src=["'](images\/[^"']+)["']/gi);
  for (const m of imgMatches) {
    const src = m[1];
    if (src.includes('QS.png')) continue; // Skip logo/favicon
    if (!imageMap[src]) imageMap[src] = [];
    imageMap[src].push(file);
  }
});

let duplicatesFound = false;
for (const [src, files] of Object.entries(imageMap)) {
  if (files.length > 1) {
    console.log(`DUPLICATE DETECTED: ${src} in files: ${files.join(', ')}`);
    duplicatesFound = true;
  }
}

if (!duplicatesFound) {
  console.log(`SUCCESS: Zero duplicate images across all ${htmlFiles.length} HTML files! (${Object.keys(imageMap).length} unique images)`);
}

console.log('\nAudit complete.');

