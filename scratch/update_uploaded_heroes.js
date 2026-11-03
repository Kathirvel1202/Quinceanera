const fs = require('fs');

const heroUpdates = {
  'index.html': {
    target: /<section class="hero has-photo">[\s\S]*?<\/section>/i,
    replacement: `<section class="hero has-photo">
            <img class="hero-photo" src="images/hero-home-ballroom-sparklers.jpg" alt="Luxury Quinceañera and Sweet Sixteen ballroom entrance with cold sparkler fountains, dancing celebrants, and celebration fog">
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
            <img class="hero-photo" src="images/hero-home2-celebrant-gown.jpg" alt="Quinceañera celebrant crowned with sparkling tiara in a royal ballgown in a scenic park avenue">
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
            <img class="hero-photo" src="images/hero-about-scenic-gathering.jpg" alt="Scenic mountain terrace ceremony with seated guests, floral circular arch, and panoramic mountain backdrop">
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
            <img class="hero-photo" src="images/hero-services-mirror-aisle.jpg" alt="Luxury mirror-floor celebration aisle framed by lush white florals leading to an ornate floral arch under a blue sky">
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
            <img class="hero-photo" src="images/hero-pricing-palace-banquet.jpg" alt="Palatial outdoor banquet terrace set with elegant tables, peach and gold linens, chiavari chairs, and floral centerpieces">
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
            <img class="hero-photo" src="images/hero-blog-editorial-veil.jpg" alt="Celebrants on a misty mountain hilltop surrounded by pine trees with flowing veil caught in the morning breeze">
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
            <img class="hero-photo" src="images/hero-faq-confetti-family.jpg" alt="Joyous milestone celebration with confetti falling over smiling family and friends dressed in vibrant traditional attire">
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
            <img class="hero-photo" src="images/hero-contact-garden-venue.jpg" alt="Sunlit outdoor garden reception venue with round banquet tables dressed in coral and gold with tropical palm trees">
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
    console.log(`Updated ${file} with user-uploaded hero image`);
  } else {
    console.error(`FAILED to match hero section in ${file}`);
  }
}

