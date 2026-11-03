const fs = require('fs');

// Check CSS padding and spacing for nav
const css = fs.readFileSync('css/style.css', 'utf8');

// Let's find .navbar, .nav-links, .nav-link, .nav-actions
const matches = [
    css.match(/\.navbar\s*\{[^}]+\}/),
    css.match(/\.nav-links\s*\{[^}]+\}/),
    css.match(/\.nav-link\s*\{[^}]+\}/),
    css.match(/\.nav-actions\s*\{[^}]+\}/),
    css.match(/\.brand\s*\{[^}]+\}/),
    css.match(/\.site-header\s*\{[^}]+\}/),
    css.match(/#siteHeader\s*\{[^}]+\}/)
];

matches.forEach(m => console.log(m ? m[0] : 'null'));

