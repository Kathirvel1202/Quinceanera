const fs = require('fs');

// 1. Update css/style.css
let css = fs.readFileSync('css/style.css', 'utf8');

const oldContactGrid = /\.contact-grid \{ display: grid; grid-template-columns: \.9fr 1\.1fr; gap: 22px; max-width: 1050px; margin: 0 auto; \}/;
const newContactGrid = `.contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; gap: clamp(20px, 2.8vw, 32px); max-width: 1140px; margin: 0 auto; }
.contact-grid > .card, .contact-grid > form.card { display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box; }
.contact-card-image { width: 100%; height: 210px; border-radius: 14px; object-fit: cover; display: block; flex-shrink: 0; }
.contact-card-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--gold-border); }
body.dark-mode .contact-card-footer { border-top-color: #4a433b; }`;

if (oldContactGrid.test(css)) {
  css = css.replace(oldContactGrid, newContactGrid);
  fs.writeFileSync('css/style.css', css, 'utf8');
  console.log('Successfully updated .contact-grid in css/style.css!');
} else {
  console.log('Warning: oldContactGrid regex did not match!');
}

// 2. Update contact.html
let contactHtml = fs.readFileSync('contact.html', 'utf8');

const oldInquirySection = /<section class="section contact-inquiry" id="event-inquiry">[\s\S]*?<\/form><\/div><\/section>/i;

const newInquirySection = `<section class="section contact-inquiry" id="event-inquiry">
      <div class="section-heading">
        <p class="eyebrow">EVENT INQUIRY</p>
        <h2>Tell us the basics</h2>
        <p>Share your vision and date preferences with our event planning team to receive personalized availability, design options, and package details.</p>
      </div>
      <div class="contact-grid">
        <div class="card">
          <div>
            <img class="contact-card-image" src="images/event-pavilion-red-carpet.jpg" alt="Luxury outdoor celebration pavilion with peach drapery, floral garlands, and red carpet aisle">
            <h3 style="margin-top:20px; font-size:21px;">Helpful details to include</h3>
            <p style="margin-bottom:14px; color:var(--muted); font-size:14px; line-height:1.6;">Providing a few early details helps our planning directors check date availability and prepare tailored options for your celebration:</p>
            <ul class="check-list" style="margin-bottom:20px;">
              <li><strong>Celebration type &amp; timeline:</strong> Quinceañera, Sweet 16, or milestone date range.</li>
              <li><strong>Preferred venue or area:</strong> Venue already booked, in review, or city location needed.</li>
              <li><strong>Guest capacity:</strong> Estimated headcount for banquet &amp; seating plans.</li>
              <li><strong>Planning scope:</strong> Full-service production, partial planning, or day-of management.</li>
              <li><strong>Key tradition priorities:</strong> Waltz, surprise dance, father-daughter dance, or crowning.</li>
            </ul>
          </div>
          <div class="contact-card-footer">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
              <span style="display:inline-flex; width:36px; height:36px; border-radius:50%; background:var(--soft-orange); color:var(--orange-dark); align-items:center; justify-content:center; flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <div>
                <strong style="display:block; font-size:14px;">Prefer to speak directly?</strong>
                <span style="color:var(--muted); font-size:13px;">Call our planning studio: <strong>+1 (555) 349-8200</strong></span>
              </div>
            </div>
            <p style="margin:0; font-size:12px; color:var(--muted); line-height:1.5;">✦ Free 30-min discovery session &nbsp;|&nbsp; ✦ Response within 24 business hours</p>
          </div>
        </div>

        <form class="card demo-form" id="contact-form">
          <div>
            <h3 style="margin-bottom:6px; font-size:21px;">Send an event inquiry</h3>
            <p style="margin-bottom:18px; color:var(--muted); font-size:14px; line-height:1.6;">Fill in your celebration parameters below to request availability and a personalized proposal.</p>
            <div class="form-grid">
              <div class="field">
                <label for="name">Your name</label>
                <input id="name" name="name" autocomplete="name" placeholder="First and last name" required>
              </div>
              <div class="field">
                <label for="email">Email address</label>
                <input id="email" name="email" type="email" autocomplete="email" placeholder="name@example.com" required>
              </div>
              <div class="field">
                <label for="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="(555) 000-0000" required>
              </div>
              <div class="field">
                <label for="contactMethod">Preferred reply method</label>
                <select id="contactMethod" name="contactMethod">
                  <option value="email">Email reply</option>
                  <option value="phone">Phone consultation</option>
                  <option value="whatsapp">Text message / WhatsApp</option>
                </select>
              </div>
              <div class="field">
                <label for="eventType">Event type</label>
                <select id="eventType" name="eventType">
                  <option value="quinceanera">Quinceañera (15th Birthday)</option>
                  <option value="sweet-sixteen">Sweet Sixteen (16th Birthday)</option>
                  <option value="cotillion">Cotillion / Debutante</option>
                  <option value="other">Other Milestone Celebration</option>
                </select>
              </div>
              <div class="field">
                <label for="date">Target date or season</label>
                <input id="date" name="date" placeholder="e.g. October 2026 or Spring 2027">
              </div>
              <div class="field">
                <label for="guestCount">Estimated guest count</label>
                <select id="guestCount" name="guestCount">
                  <option value="under-75">&lt; 75 guests</option>
                  <option value="75-150">75 – 150 guests</option>
                  <option value="150-250">150 – 250 guests</option>
                  <option value="250-plus">250+ guests</option>
                  <option value="flexible">Still deciding / Flexible</option>
                </select>
              </div>
              <div class="field">
                <label for="budget">Estimated budget range</label>
                <select id="budget" name="budget">
                  <option value="under-15k">$8,000 – $15,000</option>
                  <option value="15k-25k">$15,000 – $25,000</option>
                  <option value="25k-40k">$25,000 – $40,000</option>
                  <option value="40k-plus">$40,000+</option>
                  <option value="flexible">Flexible / Planning Phase</option>
                </select>
              </div>
              <div class="field field-full">
                <label for="message">What would you like help with?</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your theme ideas, color palettes, venue preferences, Court of Honor plans, or questions..." required></textarea>
              </div>
            </div>
          </div>
          <div style="margin-top:16px;">
            <button class="button" type="submit" style="width:100%; min-height:48px; font-size:16px;">Send inquiry</button>
            <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-top:12px; color:var(--muted); font-size:12px;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Your privacy is protected. We never share celebration details.</span>
            </div>
            <p class="form-confirmation" hidden>Thanks! Your celebration inquiry has been recorded. Our planning team will review your details and contact you within 24 business hours.</p>
          </div>
        </form>
      </div>
    </section>`;

if (oldInquirySection.test(contactHtml)) {
  contactHtml = contactHtml.replace(oldInquirySection, newInquirySection);
  fs.writeFileSync('contact.html', contactHtml, 'utf8');
  console.log('Successfully updated contact.html inquiry section!');
} else {
  console.log('Warning: oldInquirySection regex did not match!');
}

