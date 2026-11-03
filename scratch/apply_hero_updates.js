const fs = require('fs');

const faviconSnippet = `    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/QS.png">`;

// 1. Update Favicon and Cache-Buster across all 12 HTML files
const allHtml = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtml.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace old icon links
  content = content.replace(
    /\s*<link rel="icon" type="image\/png" href="images\/QS\.png">\s*<link rel="apple-touch-icon" href="images\/QS\.png">/gi,
    '\n' + faviconSnippet
  );
  
  // If it didn't match that exact pattern, check for any existing icon tags in <head>
  if (!content.includes('href="favicon.ico"')) {
    content = content.replace(/<\/title>/i, '</title>\n' + faviconSnippet);
  }

  // Bump cache buster v=3.5 -> v=3.6
  content = content.replace(/style\.css\?v=[0-9.]+/g, 'style.css?v=3.6');

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated favicon & cache-buster in ${f}`);
});

// 2. Update Hero Sections in the 8 pages
const heroUpdates = {
  'index.html': {
    target: /<section class="hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="hero has-photo">
            <img class="hero-photo" src="images/pexels-37849463.jpg" alt="Quinceañera celebrant dancing in a sparkling ballgown with tiara surrounded by celebration lights">
            <div class="hero-content">
                <p class="hero-subtitle">QUINCEAÑERA &amp; SWEET SIXTEEN</p>
                <h1>Your Dream Event, Beautifully Planned.</h1>
                <p>Creating unforgettable celebrations filled with elegance, joy, and memories that last forever.</p>
                <div class="button-row">
                    <a href="contact.html" class="button">Plan Your Event</a>
                </div>
            </div>
        </section>`
  },
  'home-page-2.html': {
    target: /<section class="page-hero has-photo home2-hero">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo home2-hero">
            <img class="hero-photo" src="images/pexels-32270845.jpg" alt="Quinceañera celebrant in an elegant light blue ballgown performing her milestone waltz">
            <div class="page-hero-content">
                <p class="eyebrow">A DAY THAT FEELS LIKE HER</p>
                <h1>Celebrate her story in every detail.</h1>
                <p>Shape a gathering around her personality, your family traditions, and the moments everyone will remember.</p>
                <div class="button-row">
                    <a href="contact.html" class="button">Start with your vision</a>
                    <a href="services.html" class="button button-outline">Explore our support</a>
                </div>
            </div>
        </section>`
  },
  'about.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/garden-arch.jpg" alt="Scenic circular floral celebration arch overlooking the serene ocean horizon">
            <div class="page-hero-content">
                <p class="eyebrow">ABOUT OUR STUDIO</p>
                <h1>Careful planning. Room for joy.</h1>
                <p>We help families turn a once-in-a-lifetime coming-of-age milestone into a celebration that feels deeply personal, culturally meaningful, and seamlessly organized.</p>
                <div class="button-row">
                    <a class="button" href="contact.html">Meet with our team</a>
                </div>
            </div>
        </section>`
  },
  'services.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/pexels-14703685.jpg" alt="Lush white floral archway and banquet ceremony seating prepared for a milestone celebration">
            <div class="page-hero-content">
                <p class="eyebrow">PLANNING SERVICES &amp; CAPABILITIES</p>
                <h1>Complete event planning, tailored to your family.</h1>
                <p>From full-scale event production and bespoke theme design to traditional ceremony direction and day-of coordination, explore our comprehensive services for Quinceañeras and Sweet Sixteens.</p>
                <div class="button-row">
                    <a class="button" href="contact.html">Schedule a consultation</a>
                </div>
            </div>
        </section>`
  },
  'pricing.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/pexels-35985252.jpg" alt="Scenic outdoor event pavilion with floral ceremony arch and panoramic celebration grounds">
            <div class="page-hero-content">
                <p class="eyebrow">TRANSPARENT PRICING &amp; PACKAGES</p>
                <h1>Clear pricing options. Clear value for every family.</h1>
                <p>From full-scale luxury event production and bespoke theme design to collaborative partial planning and day-of coordination, discover clear starting investments, seasonal booking offers, and complete itemized inclusions.</p>
                <div class="button-row">
                    <a class="button" href="contact.html">Request a custom proposal</a>
                    <a class="button button-outline" href="#compare-matrix">Compare package matrix</a>
                </div>
            </div>
        </section>`
  },
  'blog.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/pexels-32994460.jpg" alt="Grand symmetrical celebration aisle framed with draped lilac fabrics and floral columns">
            <div class="page-hero-content">
                <p class="eyebrow">THE PLANNING JOURNAL</p>
                <h1>Ideas for a celebration with a personal point of view.</h1>
                <p>Explore practical guides, creative prompts, and family-centered ways to make the planning feel more manageable.</p>
                <div class="button-row">
                    <a class="button" href="#featured-articles">Explore Articles</a>
                </div>
            </div>
        </section>`
  },
  'faq.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/quinceanera-venue.jpg" alt="Luxury celebration ballroom stage decorated with crystal chandeliers, florals, and milestone cake">
            <div class="page-hero-content">
                <p class="eyebrow">HELP CENTER &amp; FAQS</p>
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about planning timelines, packages, budget transparency, Court of Honor choreography, and cultural traditions.</p>
                <div class="button-row">
                    <a class="button" href="contact.html">Speak with a planner</a>
                    <a class="button button-outline" href="#faq-search">Browse questions</a>
                </div>
            </div>
        </section>`
  },
  'contact.html': {
    target: /<section class="page-hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="page-hero has-photo">
            <img class="hero-photo" src="images/pexels-16985112.jpg" alt="Sophisticated event planning venue with warm ambient lighting and elegant table arrangements">
            <div class="page-hero-content">
                <p class="eyebrow">CONTACT OUR TEAM</p>
                <h1>Let’s talk about what you have in mind.</h1>
                <p>Share a few details about the celebration and the kind of planning support you are looking for.</p>
                <div class="button-row">
                    <a class="button" href="#contact-form">Send Us a Message</a>
                </div>
            </div>
        </section>`
  }
};

for (const [file, update] of Object.entries(heroUpdates)) {
  let content = fs.readFileSync(file, 'utf8');
  if (update.target.test(content)) {
    content = content.replace(update.target, update.replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated hero section in ${file}`);
  } else {
    console.error(`ERROR: target regex did not match in ${file}`);
  }
}

