const fs = require('fs');

let shell = fs.readFileSync('js/site-shell.js', 'utf8');
if (!shell.includes('ensureFavicon')) {
  shell += `\n// Ensure favicon link resilience across all environments
(function ensureFavicon() {
    if (!document.querySelector("link[rel*='icon']")) {
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/x-icon";
        link.href = "favicon.ico";
        document.head.appendChild(link);
    }
})();
`;
  fs.writeFileSync('js/site-shell.js', shell, 'utf8');
  console.log('Appended ensureFavicon to js/site-shell.js');
}

