const fs = require('fs');
const files = ['index.html', 'home-page-2.html', 'about.html', 'services.html', 'pricing.html', 'blog.html', 'faq.html', 'contact.html'];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const srcMatch = c.match(/class="hero-photo"[^>]*src="([^"]+)"/i) || c.match(/src="([^"]+)"[^>]*class="hero-photo"/i);
  const altMatch = c.match(/class="hero-photo"[^>]*alt="([^"]+)"/i) || c.match(/alt="([^"]+)"[^>]*class="hero-photo"/i);
  const h1Match = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`${f}:`);
  console.log(`  img: ${srcMatch ? srcMatch[1] : 'none'}`);
  console.log(`  alt: ${altMatch ? altMatch[1] : 'none'}`);
  console.log(`  h1:  ${h1Match ? h1Match[1].trim() : 'none'}\n`);
});

