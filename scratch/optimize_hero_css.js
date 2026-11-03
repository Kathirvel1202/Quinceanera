const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// 1. Update Light Mode overlay and shadows
css = css.replace(
  /--hero-overlay: radial-gradient\([^;]+;/g,
  '--hero-overlay: radial-gradient(ellipse at center, rgba(255,255,255,.76) 0%, rgba(255,255,255,.48) 45%, rgba(255,255,255,.14) 75%, transparent 100%), rgba(255,255,255,.14);'
);

css = css.replace(
  /--hero-overlay-mobile: radial-gradient\([^;]+;/g,
  '--hero-overlay-mobile: radial-gradient(ellipse at center, rgba(255,255,255,.82) 0%, rgba(255,255,255,.55) 50%, rgba(255,255,255,.20) 85%, transparent 100%), rgba(255,255,255,.18);'
);

css = css.replace(
  /--hero-h1-shadow: 0 1px 2px rgba\(255,255,255,\.95\);/g,
  '--hero-h1-shadow: 0 1px 3px rgba(255,255,255,1), 0 0 16px rgba(255,255,255,0.85), 0 0 32px rgba(255,255,255,0.60);'
);

css = css.replace(
  /--hero-p-shadow: 0 1px 1px rgba\(255,255,255,\.90\);/g,
  '--hero-p-shadow: 0 1px 2px rgba(255,255,255,1), 0 0 12px rgba(255,255,255,0.80);'
);

// 2. Update Dark Mode overlay and shadows
css = css.replace(
  /body\.dark-mode \{([\s\S]*?)--hero-overlay: radial-gradient\([^;]+;[\s\S]*?--hero-overlay-mobile: radial-gradient\([^;]+;[\s\S]*?--hero-overlay-rtl: var\(--hero-overlay\);[\s\S]*?--hero-h1-shadow: [^;]+;[\s\S]*?--hero-p-shadow: [^;]+;/g,
  (match, p1) => {
    return `body.dark-mode {${p1}--hero-overlay: radial-gradient(ellipse at center, rgba(14,12,10,.76) 0%, rgba(14,12,10,.48) 45%, rgba(14,12,10,.16) 75%, transparent 100%), rgba(14,12,10,.22);
    --hero-overlay-mobile: radial-gradient(ellipse at center, rgba(14,12,10,.82) 0%, rgba(14,12,10,.56) 50%, rgba(14,12,10,.22) 85%, transparent 100%), rgba(14,12,10,.26);
    --hero-overlay-rtl: var(--hero-overlay);
    --hero-h1-shadow: 0 2px 6px rgba(0,0,0,0.90), 0 0 20px rgba(0,0,0,0.80), 0 0 40px rgba(0,0,0,0.60);
    --hero-p-shadow: 0 1px 4px rgba(0,0,0,0.90), 0 0 14px rgba(0,0,0,0.75);`;
  }
);

// 3. Ensure outline buttons have proper background in light & dark mode
css = css.replace(
  /\.button-outline \{ display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 26px; border: 2px solid var\(--orange\); border-radius: 28px; background: rgba\(255, 255, 255, 0\.95\); color: var\(--orange-dark\);/g,
  '.button-outline { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 26px; border: 2px solid var(--orange); border-radius: 28px; background: rgba(255, 255, 255, 0.96); color: var(--orange-dark);'
);

css = css.replace(
  /body\.dark-mode \.button-outline \{ border: 2px solid #ffd28b; background: rgba\(38, 32, 27, 0\.95\);/g,
  'body.dark-mode .button-outline { border: 2px solid #ffd28b; background: rgba(26, 21, 17, 0.95);'
);

// Bump version in CSS file comment or header
fs.writeFileSync('css/style.css', css);
console.log('Updated style.css with optimized overlays and ambient text visibility shadows!');

