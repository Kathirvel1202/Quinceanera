const fs = require('fs');
let css = fs.readFileSync('css/style.css', 'utf8');

css = css.replace(
  /\.hero\.has-photo \.hero-content, \.page-hero\.has-photo \.page-hero-content \{ width: 100%; max-width: 100%; margin-left: 0; margin-right: 0; padding: 0 !important; background: transparent !important; border: none !important; box-shadow: none !important; \}/g,
  '.hero.has-photo .hero-content, .page-hero.has-photo .page-hero-content { width: 100%; max-width: 100%; margin: 0 auto !important; text-align: center !important; padding: 0 !important; background: transparent !important; border: none !important; box-shadow: none !important; }'
);

css = css.replace(
  /\.hero\.has-photo \.hero-content > p:not\(\.hero-subtitle\), \.page-hero\.has-photo \.page-hero-content > p:not\(\.eyebrow\) \{ margin-right: 0; margin-left: 0; \}/g,
  '.hero.has-photo .hero-content > p:not(.hero-subtitle), .page-hero.has-photo .page-hero-content > p:not(.eyebrow) { margin-inline: auto !important; text-align: center !important; }'
);

css = css.replace(
  /html\[dir="rtl"\] \.hero\.has-photo \.hero-content, html\[dir="rtl"\] \.page-hero\.has-photo \.page-hero-content \{ margin-right: 0; \}/g,
  'html[dir="rtl"] .hero.has-photo .hero-content, html[dir="rtl"] .page-hero.has-photo .page-hero-content { margin: 0 auto !important; text-align: center !important; }'
);

fs.writeFileSync('css/style.css', css);
console.log('Mobile and RTL hero rules cleaned up!');

