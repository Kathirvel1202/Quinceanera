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
  console.log(`================= ${p} =================`);
  if (heroMatch) {
    console.log(heroMatch[0]);
  }
});

