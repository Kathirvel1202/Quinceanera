const fs = require('fs');

const heroPages = [
  'index.html',
  'home-page-2.html',
  'about.html',
  'services.html',
  'pricing.html',
  'blog.html',
  'faq.html',
  'contact.html'
];

heroPages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const heroMatch = content.match(/<section[^>]*class=["'][^"']*(hero|page-hero)[^"']*["'][^>]*>([\s\S]*?)<\/section>/i);
  if (heroMatch) {
    const heroSec = heroMatch[0];
    const imgMatch = heroSec.match(/<img[^>]*class=["']hero-photo["'][^>]*src=["']([^"']+)["'][^>]*>/i);
    const h1Match = heroSec.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const buttonRowMatch = heroSec.match(/<div class=["']button-row["'][^>]*>/i);
    console.log(`--- ${p} ---`);
    console.log('Image:', imgMatch ? imgMatch[1] : 'NONE');
    console.log('H1:', h1Match ? h1Match[1].trim() : 'NONE');
    console.log('Button row tag:', buttonRowMatch ? buttonRowMatch[0] : 'NONE');
  } else {
    console.log(`--- ${p}: NO HERO FOUND ---`);
  }
});

