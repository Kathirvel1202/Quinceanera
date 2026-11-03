const fs = require('fs');

const src = 'images/event-scenic-lake-arch.jpg';
const dest = 'images/hero-home-scenic-arch.jpg';
fs.copyFileSync(src, dest);
console.log('Copied scenic arch to', dest);

let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldHero = /<section class="hero has-photo">[\s\S]*?<\/section>/i;
const newHero = `<section class="hero has-photo">
            <img class="hero-photo" src="images/hero-home-scenic-arch.jpg" alt="Scenic milestone celebration dance under an elegant circular floral arch with lake and mountain views">
            <div class="hero-content">
                <p class="hero-subtitle">QUINCEAÑERA &amp; SWEET SIXTEEN</p>
                <h1>Your Dream Event, Beautifully Planned.</h1>
                <p>Creating unforgettable celebrations filled with elegance, joy, and memories that last forever.</p>
                <div class="button-row">
                    <a href="contact.html" class="button">Plan Your Event</a>
                </div>
            </div>
        </section>`;

indexHtml = indexHtml.replace(oldHero, newHero);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html hero section!');

