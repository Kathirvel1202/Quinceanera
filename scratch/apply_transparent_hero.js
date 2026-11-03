const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');
const isCRLF = css.includes('\r\n');
if (isCRLF) {
  css = css.replace(/\r\n/g, '\n');
}

// 1. Update :root hero-overlay variables to provide smooth directional gradient across the photo
css = css.replace(
  /--hero-overlay:.*?\n\s*--hero-overlay-mobile:.*?\n\s*--hero-overlay-rtl:.*?\n\s*--hero-h1-shadow:.*?\n\s*--hero-p-shadow:.*?;/s,
  `--hero-overlay: linear-gradient(90deg, rgba(255,255,255,.78) 0%, rgba(255,255,255,.52) 36%, rgba(255,255,255,.14) 68%, transparent 100%);
    --hero-overlay-mobile: linear-gradient(180deg, rgba(255,255,255,.80) 0%, rgba(255,255,255,.55) 46%, rgba(255,255,255,.15) 100%);
    --hero-overlay-rtl: linear-gradient(270deg, rgba(255,255,255,.78) 0%, rgba(255,255,255,.52) 36%, rgba(255,255,255,.14) 68%, transparent 100%);
    --hero-h1-shadow: 0 1px 3px rgba(255,255,255,.95), 0 0 14px rgba(255,255,255,.6);
    --hero-p-shadow: 0 1px 2px rgba(255,255,255,.95);`
);
console.log('1. :root overlay variables updated');

// 2. Update .navbar background to be sleek translucent frosted glass
css = css.replace(
  /\.navbar\s*\{ display: grid; grid-template-columns: auto minmax\(0, 1fr\) auto; align-items: center; gap: 18px; min-height: 72px; padding: 6px 18px; border: 1px solid rgba\(240, 228, 213, 0\.85\); border-radius: 26px; background: rgba\(255, 255, 255, 0\.88\); backdrop-filter: blur\(16px\); -webkit-backdrop-filter: blur\(16px\); box-shadow: 0 12px 32px rgba\(73, 53, 34, \.12\); \}/,
  `.navbar { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; min-height: 72px; padding: 6px 18px; border: 1px solid rgba(240, 228, 213, 0.85); border-radius: 26px; background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 12px 32px rgba(73, 53, 34, .12); }`
);
console.log('2. Navbar frosted glass updated');

// 3. Update Hero Section & Make Hero Content COMPLETELY TRANSPARENT (No card box)
const heroBlockRegex = /\.hero,\s*\.page-hero\s*\{[\s\S]*?\.hero\.has-photo\s*\.hero-content,\s*\.page-hero\.has-photo\s*\.page-hero-content\s*\{[^}]*\}/;

const heroBlockReplacement = `.hero, .page-hero { display: flex; min-height: 480px; align-items: center; justify-content: center; padding: calc(var(--site-header-height, 72px) + 36px) 20px 76px; text-align: center; }
.hero.has-photo, .page-hero.has-photo { position: relative; justify-content: flex-start; overflow: hidden; min-height: 100vh; background: #e8ddd0; text-align: left; padding: calc(var(--site-header-height, 72px) + 36px) clamp(20px, 4.5vw, 40px) 60px; }
@supports (height: 100svh) { .hero.has-photo, .page-hero.has-photo { min-height: 100svh; } }
.hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 45%; }
.hero.has-photo::after, .page-hero.has-photo::after { position: absolute; inset: 0; background: var(--hero-overlay); content: ""; pointer-events: none; }
.hero.has-photo h1, .page-hero.has-photo h1 { color: #141210; text-shadow: var(--hero-h1-shadow); font-size: clamp(36px, 5.5vw, 64px); font-weight: 800; line-height: 1.12; margin-bottom: 20px; }
.hero.has-photo .hero-content > p:not(.hero-subtitle):not(.eyebrow), .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { color: #241e18; text-shadow: var(--hero-p-shadow); font-size: clamp(17px, 2vw, 20px); font-weight: 600; line-height: 1.65; margin-bottom: 28px; max-width: 640px; }
.hero.has-photo .eyebrow, .page-hero.has-photo .eyebrow, .hero-subtitle { color: #8c3e00; text-shadow: var(--hero-p-shadow); font-size: 13px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; display: inline-block; margin-bottom: 14px; }
.hero-content, .page-hero-content { width: min(900px, 100%); }
.hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { position: relative; z-index: 2; width: min(720px, 100%); max-width: 720px; margin-left: max(0px, calc((100vw - 1180px) / 2)); padding: 0 !important; background: transparent !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; border: none !important; box-shadow: none !important; }`;

css = css.replace(heroBlockRegex, heroBlockReplacement);
console.log('3. Hero block and transparent hero-content updated');

// 4. Update Home 2 Hero to be transparent and centered
const home2HeroRegex = /\/\* Home 2 Hero: Centered Frosted Glass Content & CTA \*\/[\s\S]*?html\[dir="rtl"\] body\.dark-mode \.home2-hero::after \{ background: var\(--hero-overlay-rtl\) !important; \}/;

const home2HeroReplacement = `/* Home 2 Hero: Centered Transparent Content & CTA */
body[data-page="home2"] .page-hero.has-photo,
.home2-hero { justify-content: center !important; text-align: center !important; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content,
.home2-hero .page-hero-content { margin: 0 auto !important; max-width: 820px; text-align: center !important; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; border: none !important; box-shadow: none !important; padding: 0 !important; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content .eyebrow,
.home2-hero .eyebrow { margin-inline: auto !important; text-align: center !important; }
body[data-page="home2"] .page-hero.has-photo h1,
.home2-hero h1 { margin-inline: auto !important; text-align: center !important; max-width: 800px; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content > p:not(.eyebrow),
.home2-hero .page-hero-content > p:not(.eyebrow) { margin: 0 auto 28px !important; text-align: center !important; max-width: 660px; }
body[data-page="home2"] .page-hero.has-photo .button-row,
.home2-hero .button-row { margin: 0 auto !important; justify-content: center !important; align-items: center; display: flex; flex-wrap: wrap; gap: 14px; }
body[data-page="home2"] .page-hero.has-photo::after,
.home2-hero::after { background: radial-gradient(ellipse at center, rgba(255,255,255,.82) 0%, rgba(255,255,255,.54) 46%, rgba(255,255,255,.12) 78%, transparent 100%) !important; }
body.dark-mode body[data-page="home2"] .page-hero.has-photo::after,
body.dark-mode .home2-hero::after { background: radial-gradient(ellipse at center, rgba(16,14,12,.82) 0%, rgba(16,14,12,.54) 46%, rgba(16,14,12,.14) 78%, transparent 100%) !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo,
html[dir="rtl"] .home2-hero { text-align: center !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo .page-hero-content,
html[dir="rtl"] .home2-hero .page-hero-content { margin: 0 auto !important; text-align: center !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo::after,
html[dir="rtl"] .home2-hero::after { background: radial-gradient(ellipse at center, rgba(255,255,255,.82) 0%, rgba(255,255,255,.54) 46%, rgba(255,255,255,.12) 78%, transparent 100%) !important; }
html[dir="rtl"] body.dark-mode body[data-page="home2"] .page-hero.has-photo::after,
html[dir="rtl"] body.dark-mode .home2-hero::after { background: radial-gradient(ellipse at center, rgba(16,14,12,.82) 0%, rgba(16,14,12,.54) 46%, rgba(16,14,12,.14) 78%, transparent 100%) !important; }`;

css = css.replace(home2HeroRegex, home2HeroReplacement);
console.log('4. Home 2 hero updated');

// 5. Update dark mode variables
css = css.replace(
  /body\.dark-mode\s*\{[\s\S]*?--auth-backdrop-opacity:\s*\.72;/s,
  `body.dark-mode {
    --cream: #1e1b18;
    --white: #272421;
    --ink: #f4eee8;
    --muted: #cfc5b9;
    --hero-overlay: linear-gradient(90deg, rgba(16,14,12,.82) 0%, rgba(16,14,12,.56) 38%, rgba(16,14,12,.18) 70%, transparent 100%);
    --hero-overlay-mobile: linear-gradient(180deg, rgba(16,14,12,.82) 0%, rgba(16,14,12,.56) 48%, rgba(16,14,12,.18) 100%);
    --hero-overlay-rtl: linear-gradient(270deg, rgba(16,14,12,.82) 0%, rgba(16,14,12,.56) 38%, rgba(16,14,12,.18) 70%, transparent 100%);
    --hero-h1-shadow: 0 2px 8px rgba(0,0,0,.85), 0 4px 20px rgba(0,0,0,.65);
    --hero-p-shadow: 0 1px 4px rgba(0,0,0,.9);
    --auth-backdrop-opacity: .72;`
);
console.log('5. Dark mode variables updated');

// 6. Update dark mode navbar
css = css.replace(
  /body\.dark-mode \.navbar\s*\{ border-color: rgba\(90, 75, 60, \.55\); background: rgba\(36, 32, 28, \.88\); backdrop-filter: blur\(16px\); -webkit-backdrop-filter: blur\(16px\); box-shadow: 0 14px 36px rgba\(0, 0, 0, \.4\); \}/,
  `body.dark-mode .navbar { border-color: rgba(90, 75, 60, .55); background: rgba(30, 26, 22, .82); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 14px 36px rgba(0, 0, 0, .4); }`
);
console.log('6. Dark mode navbar updated');

// 7. Update dark mode hero elements (ensure transparent background, high contrast text)
const darkHeroRegex = /body\.dark-mode \.hero\.has-photo::after,\s*body\.dark-mode \.page-hero\.has-photo::after\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo \.hero-content,\s*body\.dark-mode \.page-hero\.has-photo \.page-hero-content\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo h1,\s*body\.dark-mode \.page-hero\.has-photo h1\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo \.hero-content > p:not\(\.hero-subtitle\):not\(\.eyebrow\),\s*body\.dark-mode \.page-hero\.has-photo \.page-hero-content > p:not\(\.eyebrow\)\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo \.eyebrow,\s*body\.dark-mode \.page-hero\.has-photo \.eyebrow,\s*body\.dark-mode \.hero-subtitle\s*\{[^}]*\}/;

const darkHeroReplacement = `body.dark-mode .hero.has-photo::after, body.dark-mode .page-hero.has-photo::after { background: var(--hero-overlay); }
body.dark-mode .hero.has-photo .hero-content, body.dark-mode .page-hero.has-photo .page-hero-content { background: transparent !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; border: none !important; box-shadow: none !important; padding: 0 !important; }
body.dark-mode .hero.has-photo h1, body.dark-mode .page-hero.has-photo h1 { color: #ffffff !important; text-shadow: var(--hero-h1-shadow) !important; }
body.dark-mode .hero.has-photo .hero-content > p:not(.hero-subtitle):not(.eyebrow), body.dark-mode .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { color: #f6efe6 !important; text-shadow: var(--hero-p-shadow) !important; }
body.dark-mode .hero.has-photo .eyebrow, body.dark-mode .page-hero.has-photo .eyebrow, body.dark-mode .hero-subtitle { color: #ffd28b !important; text-shadow: var(--hero-p-shadow) !important; }`;

css = css.replace(darkHeroRegex, darkHeroReplacement);
console.log('7. Dark mode hero elements updated');

// 8. Update mobile hero rules in @media (max-width: 650px)
const mobileHeroRegex = /\.hero\.has-photo \.hero-content,\s*\.page-hero\.has-photo \.page-hero-content\s*\{\s*width:\s*100%;\s*max-width:\s*100%;\s*margin-left:\s*0;\s*margin-right:\s*0;\s*padding:\s*24px\s*18px;\s*border-radius:\s*20px;\s*\}/;

const mobileHeroReplacement = `.hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { width: 100%; max-width: 100%; margin-left: 0; margin-right: 0; padding: 0 !important; background: transparent !important; border: none !important; box-shadow: none !important; }`;

css = css.replace(mobileHeroRegex, mobileHeroReplacement);
console.log('8. Mobile hero rules updated');

if (isCRLF) {
  css = css.replace(/\n/g, '\r\n');
}

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('Transparent hero background successfully applied to css/style.css!');

