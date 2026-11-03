const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// 1. Update Light Mode CSS variables
css = css.replace(
  /--hero-overlay:[^;]+;/g,
  '--hero-overlay: radial-gradient(ellipse at center, rgba(255,255,255,.84) 0%, rgba(255,255,255,.58) 45%, rgba(255,255,255,.18) 75%, transparent 100%), rgba(255,255,255,.16);'
);
css = css.replace(
  /--hero-overlay-mobile:[^;]+;/g,
  '--hero-overlay-mobile: radial-gradient(ellipse at center, rgba(255,255,255,.88) 0%, rgba(255,255,255,.62) 50%, rgba(255,255,255,.24) 85%, transparent 100%), rgba(255,255,255,.20);'
);
css = css.replace(
  /--hero-overlay-rtl:[^;]+;/g,
  '--hero-overlay-rtl: var(--hero-overlay);'
);
css = css.replace(
  /--hero-h1-shadow: 0 1px 3px rgba\(255,255,255,\.95\), 0 0 14px rgba\(255,255,255,\.6\);/g,
  '--hero-h1-shadow: 0 1px 2px rgba(255,255,255,.95);'
);
css = css.replace(
  /--hero-p-shadow: 0 1px 2px rgba\(255,255,255,\.95\);/g,
  '--hero-p-shadow: 0 1px 1px rgba(255,255,255,.90);'
);

// 2. Update Dark Mode CSS variables
const darkVarsSearch = /body\.dark-mode \{([\s\S]*?)--hero-overlay:[^;]+;[\s\S]*?--hero-overlay-mobile:[^;]+;[\s\S]*?--hero-overlay-rtl:[^;]+;[\s\S]*?--hero-h1-shadow:[^;]+;[\s\S]*?--hero-p-shadow:[^;]+;/;
css = css.replace(
  darkVarsSearch,
  (match, p1) => {
    return `body.dark-mode {${p1}--hero-overlay: radial-gradient(ellipse at center, rgba(16,14,12,.84) 0%, rgba(16,14,12,.60) 45%, rgba(16,14,12,.22) 75%, transparent 100%), rgba(16,14,12,.28);
    --hero-overlay-mobile: radial-gradient(ellipse at center, rgba(16,14,12,.88) 0%, rgba(16,14,12,.66) 50%, rgba(16,14,12,.28) 85%, transparent 100%), rgba(16,14,12,.34);
    --hero-overlay-rtl: var(--hero-overlay);
    --hero-h1-shadow: 0 2px 4px rgba(0,0,0,.75);
    --hero-p-shadow: 0 1px 2px rgba(0,0,0,.70);`;
  }
);

// 3. Replace lines 69-104 with clean, site-wide centered hero architecture
const heroBlockSearch = /\.hero, \.page-hero \{ display: flex; min-height: 480px;[\s\S]*?html\[dir="rtl"\] body\.dark-mode \.home2-hero::after \{[^\}]+\}/;

const newHeroBlock = `.hero, .page-hero { display: flex; min-height: 480px; align-items: center; justify-content: center; padding: calc(var(--site-header-height, 72px) + 36px) 20px 76px; text-align: center; }
.hero.has-photo, .page-hero.has-photo { position: relative; display: flex; justify-content: center !important; align-items: center; overflow: hidden; min-height: 100vh; background: #e8ddd0; text-align: center !important; padding: calc(var(--site-header-height, 72px) + 36px) clamp(20px, 4.5vw, 40px) 60px; }
@supports (height: 100svh) { .hero.has-photo, .page-hero.has-photo { min-height: 100svh; } }
.hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 45%; }
.hero.has-photo::after, .page-hero.has-photo::after { position: absolute; inset: 0; background: var(--hero-overlay); content: ""; pointer-events: none; }
.hero.has-photo h1, .page-hero.has-photo h1 { color: #141210; text-shadow: var(--hero-h1-shadow); font-size: clamp(36px, 5.5vw, 64px); font-weight: 800; line-height: 1.12; margin-inline: auto !important; margin-bottom: 20px; max-width: 820px; text-align: center !important; }
.hero.has-photo .hero-content > p:not(.hero-subtitle):not(.eyebrow), .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { color: #241e18; text-shadow: var(--hero-p-shadow); font-size: clamp(17px, 2vw, 20px); font-weight: 600; line-height: 1.65; margin: 0 auto 28px !important; max-width: 680px; text-align: center !important; }
.hero.has-photo .eyebrow, .page-hero.has-photo .eyebrow, .hero.has-photo .hero-subtitle, .hero-subtitle { color: #8c3e00; text-shadow: var(--hero-p-shadow); font-size: 13px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; display: inline-block; margin-inline: auto !important; margin-bottom: 14px; text-align: center !important; }
.hero-content, .page-hero-content { width: min(900px, 100%); }
.hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { position: relative; z-index: 2; width: min(840px, 100%); max-width: 840px; margin: 0 auto !important; text-align: center !important; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 !important; background: transparent !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; border: none !important; box-shadow: none !important; }
.hero.has-photo .button-row, .page-hero.has-photo .button-row { margin: 0 auto !important; justify-content: center !important; align-items: center; display: flex; flex-wrap: wrap; gap: 14px; }
.hero.has-photo .hero-button, .page-hero.has-photo .hero-button, .hero.has-photo .button, .page-hero.has-photo .button { margin-inline: auto; }`;

if (heroBlockSearch.test(css)) {
  css = css.replace(heroBlockSearch, newHeroBlock);
  console.log('Successfully replaced hero block!');
} else {
  console.log('WARNING: heroBlockSearch did not match!');
}

// 4. Update RTL rules for hero
css = css.replace(
  /html\[dir="rtl"\] \.hero\.has-photo, html\[dir="rtl"\] \.page-hero\.has-photo \{ text-align: right; \}\s*html\[dir="rtl"\] \.hero\.has-photo \.hero-content, html\[dir="rtl"\] \.page-hero\.has-photo \.page-hero-content \{ margin-right: max\(0px, calc\(\(100vw - 1180px\) \/ 2\)\); margin-left: 0; \}/g,
  'html[dir="rtl"] .hero.has-photo, html[dir="rtl"] .page-hero.has-photo { text-align: center !important; justify-content: center !important; }\nhtml[dir="rtl"] .hero.has-photo .hero-content, html[dir="rtl"] .page-hero.has-photo .page-hero-content { margin: 0 auto !important; text-align: center !important; }\nhtml[dir="rtl"] .hero.has-photo .button-row, html[dir="rtl"] .page-hero.has-photo .button-row { justify-content: center !important; }'
);

fs.writeFileSync('css/style.css', css);
console.log('Finished updating css/style.css');

