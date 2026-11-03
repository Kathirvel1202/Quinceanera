const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update line 33 .site-header
const oldSiteHeader = `.site-header { width: 95%; max-width: 1720px; margin: 0 auto; pointer-events: auto; }`;
const newSiteHeader = `.site-header { width: 90%; max-width: 1380px; margin: 0 auto; pointer-events: auto; }`;

// 2. Update .navbar gap and padding
const oldNavbar = `.navbar { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 18px; min-height: 72px; padding: 6px 18px; border: 1px solid rgba(240, 228, 213, 0.85); border-radius: 26px; background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 12px 32px rgba(73, 53, 34, .12); }`;
const newNavbar = `.navbar { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; gap: 14px; min-height: 72px; padding: 6px 16px; border: 1px solid rgba(240, 228, 213, 0.85); border-radius: 26px; background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 12px 32px rgba(73, 53, 34, .12); }`;

// 3. Update .nav-links gap and padding
const oldNavLinks = `.nav-links { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-width: 0; padding-inline: 8px; }`;
const newNavLinks = `.nav-links { display: flex; align-items: center; justify-content: space-between; gap: 6px; min-width: 0; padding-inline: 4px; }`;

// 4. Update .nav-link padding
const oldNavLink = `.nav-link { position: relative; display: inline-flex; align-items: center; justify-content: center; padding: 12px 13px; border: 1px solid transparent; border-radius: 14px; background: transparent; color: #222; font-size: 15px; font-weight: 600; line-height: 1.2; text-decoration: none; white-space: nowrap; transition: background-color .2s ease, color .2s ease, transform .2s ease, border-color .2s ease; }`;
const newNavLink = `.nav-link { position: relative; display: inline-flex; align-items: center; justify-content: center; padding: 10px 12px; border: 1px solid transparent; border-radius: 14px; background: transparent; color: #222; font-size: 15px; font-weight: 600; line-height: 1.2; text-decoration: none; white-space: nowrap; transition: background-color .2s ease, color .2s ease, transform .2s ease, border-color .2s ease; }`;

// 5. Update media query .site-header
const oldMediaSiteHeader = `    .site-header { width: 96%; margin: 0 auto; }`;
const newMediaSiteHeader = `    .site-header { width: 92%; max-width: 1380px; margin: 0 auto; }`;

let count = 0;
if (css.includes(oldSiteHeader)) { css = css.replace(oldSiteHeader, newSiteHeader); count++; }
if (css.includes(oldNavbar)) { css = css.replace(oldNavbar, newNavbar); count++; }
if (css.includes(oldNavLinks)) { css = css.replace(oldNavLinks, newNavLinks); count++; }
if (css.includes(oldNavLink)) { css = css.replace(oldNavLink, newNavLink); count++; }
if (css.includes(oldMediaSiteHeader)) { css = css.replace(oldMediaSiteHeader, newMediaSiteHeader); count++; }

console.log(`Replaced ${count} snippets in css/style.css`);
fs.writeFileSync(cssPath, css, 'utf8');

