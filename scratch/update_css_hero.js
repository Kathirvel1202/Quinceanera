const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');
const isCRLF = css.includes('\r\n');
if (isCRLF) {
  css = css.replace(/\r\n/g, '\n');
}

// 1. Update :root variables (already partly updated or let's ensure full update)
css = css.replace(
  /--hero-overlay:.*?\n\s*--hero-overlay-mobile:.*?\n\s*--hero-overlay-rtl:.*?\n\s*--hero-h1-shadow:.*?\n\s*--hero-p-shadow:.*?;/s,
  `--hero-overlay: linear-gradient(135deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.05) 50%, rgba(0,0,0,.08) 100%);
    --hero-overlay-mobile: linear-gradient(180deg, rgba(255,255,255,.25) 0%, rgba(255,255,255,.06) 100%);
    --hero-overlay-rtl: linear-gradient(225deg, rgba(255,255,255,.22) 0%, rgba(255,255,255,.05) 50%, rgba(0,0,0,.08) 100%);
    --hero-h1-shadow: none;
    --hero-p-shadow: none;`
);
console.log('1. :root variables checked');

// 2. Scroll offsets
css = css.replace(
  /html\s*\{\s*scroll-behavior:\s*smooth;\s*scroll-padding-top:\s*100px;\s*\}\s*\.section,\s*section,\s*\[id\]\s*\{\s*scroll-margin-top:\s*100px;\s*\}/,
  `html { scroll-behavior: smooth; scroll-padding-top: 112px; }
.section, section, [id] { scroll-margin-top: 112px; }`
);
console.log('2. Scroll offsets updated');

// 3. #siteHeader, .site-header, .navbar
css = css.replace(
  /#siteHeader\s*\{[^}]*\}\s*\.site-header\s*\{[^}]*\}\s*\.navbar\s*\{[^}]*\}/,
  `#siteHeader { position: fixed; top: 14px; left: 0; right: 0; width: 100%; z-index: 1000; pointer-events: none; transition: top .25s ease; }
.site-header { width: 95%; max-width: 1720px; margin: 0 auto; pointer-events: auto; }
.navbar { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; min-height: 72px; padding: 6px 18px; border: 1px solid rgba(240, 228, 213, 0.85); border-radius: 26px; background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 12px 32px rgba(73, 53, 34, .12); }`
);
console.log('3. Header & navbar updated');

// 4. Hero section, frosted card, typography, buttons
const heroRegex = /\.hero,\s*\.page-hero\s*\{[\s\S]*?\.button-outline:hover\s*\{[^}]*\}/;
const heroReplacement = `.hero, .page-hero { display: flex; min-height: 480px; align-items: center; justify-content: center; padding: calc(var(--site-header-height, 72px) + 36px) 20px 76px; text-align: center; }
.hero.has-photo, .page-hero.has-photo { position: relative; justify-content: flex-start; overflow: hidden; min-height: 100vh; background: #e8ddd0; text-align: left; padding: calc(var(--site-header-height, 72px) + 36px) clamp(16px, 4vw, 32px) 60px; }
@supports (height: 100svh) { .hero.has-photo, .page-hero.has-photo { min-height: 100svh; } }
.hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 45%; }
.hero.has-photo::after, .page-hero.has-photo::after { position: absolute; inset: 0; background: var(--hero-overlay); content: ""; pointer-events: none; }
.hero.has-photo h1, .page-hero.has-photo h1 { color: #141210; text-shadow: none !important; font-size: clamp(34px, 5.2vw, 56px); font-weight: 700; line-height: 1.14; margin-bottom: 18px; }
.hero.has-photo .hero-content > p:not(.hero-subtitle):not(.eyebrow), .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { color: #383028; text-shadow: none !important; font-size: clamp(16px, 1.8vw, 18px); line-height: 1.65; margin-bottom: 26px; max-width: 600px; }
.hero.has-photo .eyebrow, .page-hero.has-photo .eyebrow, .hero-subtitle { color: #943e00; text-shadow: none !important; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; display: inline-block; margin-bottom: 14px; }
.hero-content, .page-hero-content { width: min(900px, 100%); }
.hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { position: relative; z-index: 2; width: min(680px, 100%); max-width: 680px; margin-left: max(0px, calc((100vw - 1180px) / 2)); padding: clamp(28px, 3.6vw, 44px); border-radius: 26px; background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255, 255, 255, 0.9); box-shadow: 0 20px 48px rgba(73, 53, 34, 0.14), 0 2px 10px rgba(0, 0, 0, 0.04); }

/* Home 2 Hero: Centered Frosted Glass Content & CTA */
body[data-page="home2"] .page-hero.has-photo,
.home2-hero { justify-content: center !important; text-align: center !important; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content,
.home2-hero .page-hero-content { margin: 0 auto !important; max-width: 780px; text-align: center !important; display: flex; flex-direction: column; align-items: center; justify-content: center; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content .eyebrow,
.home2-hero .eyebrow { margin-inline: auto !important; text-align: center !important; }
body[data-page="home2"] .page-hero.has-photo h1,
.home2-hero h1 { margin-inline: auto !important; text-align: center !important; max-width: 720px; }
body[data-page="home2"] .page-hero.has-photo .page-hero-content > p:not(.eyebrow),
.home2-hero .page-hero-content > p:not(.eyebrow) { margin: 0 auto 28px !important; text-align: center !important; max-width: 620px; }
body[data-page="home2"] .page-hero.has-photo .button-row,
.home2-hero .button-row { margin: 0 auto !important; justify-content: center !important; align-items: center; display: flex; flex-wrap: wrap; gap: 14px; }
body[data-page="home2"] .page-hero.has-photo::after,
.home2-hero::after { background: var(--hero-overlay) !important; }
body.dark-mode body[data-page="home2"] .page-hero.has-photo::after,
body.dark-mode .home2-hero::after { background: var(--hero-overlay) !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo,
html[dir="rtl"] .home2-hero { text-align: center !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo .page-hero-content,
html[dir="rtl"] .home2-hero .page-hero-content { margin: 0 auto !important; text-align: center !important; }
html[dir="rtl"] body[data-page="home2"] .page-hero.has-photo::after,
html[dir="rtl"] .home2-hero::after { background: var(--hero-overlay-rtl) !important; }
html[dir="rtl"] body.dark-mode body[data-page="home2"] .page-hero.has-photo::after,
html[dir="rtl"] body.dark-mode .home2-hero::after { background: var(--hero-overlay-rtl) !important; }
.hero-subtitle, .eyebrow { display: inline-block; margin-bottom: 14px; color: var(--orange-dark); font-size: 13px; font-weight: 700; letter-spacing: 2.2px; line-height: 1.3; text-transform: uppercase; }
.hero h1, .page-hero h1 { margin-bottom: 20px; color: var(--ink); font-size: clamp(38px, 5.8vw, 68px); line-height: 1.1; }
.hero-content > p:not(.hero-subtitle), .page-hero-content > p:not(.eyebrow) { max-width: 760px; margin: 0 auto 28px; color: var(--muted); font-size: clamp(17px, 2vw, 20px); line-height: 1.65; }
.hero-button, .button { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 26px; border: 0; border-radius: 28px; background: var(--orange); color: var(--white); font-weight: 700; text-decoration: none; cursor: pointer; box-shadow: 0 4px 14px rgba(179, 85, 0, .28); transition: background-color .2s ease, transform .2s ease, box-shadow .2s ease; }
.hero-button:hover, .button:hover { background: #964500; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(179, 85, 0, .36); }
.button-outline { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 12px 26px; border: 2px solid var(--orange); border-radius: 28px; background: rgba(255, 255, 255, 0.95); color: var(--orange-dark); font-weight: 700; text-decoration: none; cursor: pointer; box-shadow: 0 2px 10px rgba(73, 53, 34, 0.08); transition: background-color .2s ease, border-color .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease; }
.button-outline:hover { background: var(--soft-orange); border-color: var(--orange-dark); color: var(--orange-dark); transform: translateY(-1px); box-shadow: 0 4px 14px rgba(73, 53, 34, 0.14); }`;

css = css.replace(heroRegex, heroReplacement);
console.log('4. Hero block updated');

// 5. Dark mode variables
css = css.replace(
  /body\.dark-mode\s*\{[\s\S]*?--auth-backdrop-opacity:\s*\.72;/s,
  `body.dark-mode {
    --cream: #1e1b18;
    --white: #272421;
    --ink: #f4eee8;
    --muted: #cfc5b9;
    --hero-overlay: linear-gradient(135deg, rgba(16,14,12,.42) 0%, rgba(16,14,12,.18) 50%, rgba(0,0,0,.35) 100%);
    --hero-overlay-mobile: linear-gradient(180deg, rgba(16,14,12,.42) 0%, rgba(16,14,12,.20) 100%);
    --hero-overlay-rtl: linear-gradient(225deg, rgba(16,14,12,.42) 0%, rgba(16,14,12,.18) 50%, rgba(0,0,0,.35) 100%);
    --hero-h1-shadow: none;
    --hero-p-shadow: none;
    --auth-backdrop-opacity: .72;`
);
console.log('5. Dark mode variables updated');

// 6. Dark mode navbar styling
css = css.replace(
  /body\.dark-mode \.navbar,\s*body\.dark-mode \.card/g,
  `body.dark-mode .card`
);
css = css.replace(
  /body\.dark-mode \.dropdown-menu\s*\{/,
  `body.dark-mode .navbar { border-color: rgba(90, 75, 60, .55); background: rgba(36, 32, 28, .88); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 14px 36px rgba(0, 0, 0, .4); }\nbody.dark-mode .dropdown-menu {`
);
console.log('6. Dark mode navbar frosted glass updated');

// 7. Dark mode hero elements
const darkHeroRegex = /body\.dark-mode \.hero\.has-photo::after,\s*body\.dark-mode \.page-hero\.has-photo::after\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo h1,\s*body\.dark-mode \.page-hero\.has-photo h1\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo \.hero-content > p:not\(\.hero-subtitle\),\s*body\.dark-mode \.page-hero\.has-photo \.page-hero-content > p:not\(\.eyebrow\)\s*\{[^}]*\}\s*body\.dark-mode \.hero\.has-photo \.eyebrow,\s*body\.dark-mode \.page-hero\.has-photo \.eyebrow\s*\{[^}]*\}/;

const darkHeroReplacement = `body.dark-mode .hero.has-photo::after, body.dark-mode .page-hero.has-photo::after { background: var(--hero-overlay); }
body.dark-mode .hero.has-photo .hero-content, body.dark-mode .page-hero.has-photo .page-hero-content { background: rgba(22, 18, 15, 0.86); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 24px 56px rgba(0, 0, 0, 0.6), 0 2px 12px rgba(0, 0, 0, 0.35); }
body.dark-mode .hero.has-photo h1, body.dark-mode .page-hero.has-photo h1 { color: #ffffff !important; text-shadow: none !important; }
body.dark-mode .hero.has-photo .hero-content > p:not(.hero-subtitle):not(.eyebrow), body.dark-mode .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { color: #e8ded4 !important; text-shadow: none !important; }
body.dark-mode .hero.has-photo .eyebrow, body.dark-mode .page-hero.has-photo .eyebrow, body.dark-mode .hero-subtitle { color: #ffd28b !important; text-shadow: none !important; }`;

css = css.replace(darkHeroRegex, darkHeroReplacement);
console.log('7. Dark mode hero elements updated');

// 8. Dark mode .button-outline
css = css.replace(
  /body\.dark-mode \.button-outline\s*\{[^}]*\}\s*body\.dark-mode \.button-outline:hover\s*\{[^}]*\}/,
  `body.dark-mode .button-outline { border: 2px solid #ffd28b; background: rgba(38, 32, 27, 0.95); color: #ffd28b; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35); }
body.dark-mode .button-outline:hover { background: rgba(58, 48, 40, 0.98); border-color: #ffe6bd; color: #ffe6bd; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45); }`
);
console.log('8. Dark mode button outline updated');

// 9. Mobile nav is-open
css = css.replace(
  /\.navbar\.is-open \.nav-links\s*\{ display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 4px; \}/,
  `.navbar.is-open { max-height: calc(100vh - 28px); overflow-y: auto; }\n    .navbar.is-open .nav-links { display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; gap: 4px; }`
);
console.log('9. Mobile nav is-open updated');

// 10. Mobile @media (max-width: 650px) hero
const mobileHeroRegex = /\.hero,\s*\.page-hero\s*\{\s*min-height:\s*390px;\s*padding:\s*60px\s*18px;\s*\}[\s\S]*?\.hero\.has-photo \.hero-content,\s*\.page-hero\.has-photo \.page-hero-content\s*\{\s*margin-left:\s*0;\s*\}/;

const mobileHeroReplacement = `#siteHeader { top: 10px; }
    .hero, .page-hero { min-height: 420px; padding-top: calc(var(--site-header-height, 72px) + 22px); padding-bottom: 40px; padding-inline: 14px; }
    .hero.has-photo::after, .page-hero.has-photo::after { background: var(--hero-overlay-mobile); }
    body.dark-mode .hero.has-photo::after, body.dark-mode .page-hero.has-photo::after { background: var(--hero-overlay-mobile); }
    .hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { width: 100%; max-width: 100%; margin-left: 0; margin-right: 0; padding: 24px 18px; border-radius: 20px; }
    .hero.has-photo h1, .page-hero.has-photo h1 { font-size: clamp(26px, 6.5vw, 36px); }`;

css = css.replace(mobileHeroRegex, mobileHeroReplacement);
console.log('10. Mobile hero rules updated');

if (isCRLF) {
  css = css.replace(/\n/g, '\r\n');
}

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('css/style.css update completed successfully!');
