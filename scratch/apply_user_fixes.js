const fs = require('fs');
const path = require('path');

// 1. Update contact.html
const contactPath = path.resolve(__dirname, '../contact.html');
let contactHtml = fs.readFileSync(contactPath, 'utf8');

if (contactHtml.includes('images/pexels-7639443.jpg')) {
    contactHtml = contactHtml.replace(
        'images/pexels-7639443.jpg',
        'images/pexels-7641887.jpg'
    );
    contactHtml = contactHtml.replace(
        'alt="Event planning coordinator answering questions during a friendly phone consultation"',
        'alt="Event planning coordinator speaking with a client during a friendly phone consultation call"'
    );
    fs.writeFileSync(contactPath, contactHtml, 'utf8');
    console.log("1. Updated contact.html with phone consultation image pexels-7641887.jpg");
} else {
    console.error("Target pexels-7639443.jpg not found in contact.html");
}

// 2. Update pricing.html (add 9th point to Tier 1)
const pricingPath = path.resolve(__dirname, '../pricing.html');
let pricingHtml = fs.readFileSync(pricingPath, 'utf8');

const oldPricingList = `                        <ul class="check-list">
                            <li>8 weeks of pre-event coordination &amp; contract reviews</li>
                            <li>Comprehensive venue walk-through with banquet director</li>
                            <li>Master minute-by-minute timeline for family, church &amp; vendors</li>
                            <li>Full Court of Honor rehearsal staging (entrances, waltz &amp; bows)</li>
                            <li>10 hours on-site lead coordination (Lead Planner + 1 Assistant)</li>
                            <li>Church Thanksgiving Mass cueing &amp; ballroom transition direction</li>
                            <li>Bridal &amp; Quince emergency kit (steamer, sewing, stain remover)</li>
                            <li>Personal décor setup inspection (guestbook, favors, photos)</li>
                        </ul>`;

const newPricingList = `                        <ul class="check-list">
                            <li>8 weeks of pre-event coordination &amp; contract reviews</li>
                            <li>Comprehensive venue walk-through with banquet director</li>
                            <li>Master minute-by-minute timeline for family, church &amp; vendors</li>
                            <li>Full Court of Honor rehearsal staging (entrances, waltz &amp; bows)</li>
                            <li>10 hours on-site lead coordination (Lead Planner + 1 Assistant)</li>
                            <li>Church Thanksgiving Mass cueing &amp; ballroom transition direction</li>
                            <li>Vendor arrival check-in, load-in oversight &amp; schedule cueing</li>
                            <li>Bridal &amp; Quince emergency kit (steamer, sewing, stain remover)</li>
                            <li>Personal décor setup inspection (guestbook, favors, photos)</li>
                        </ul>`;

const isCRLFPricing = pricingHtml.includes('\r\n');
const normOldPricing = isCRLFPricing ? oldPricingList.replace(/\r?\n/g, '\r\n') : oldPricingList.replace(/\r\n/g, '\n');
const normNewPricing = isCRLFPricing ? newPricingList.replace(/\r?\n/g, '\r\n') : newPricingList.replace(/\r\n/g, '\n');

if (pricingHtml.includes(normOldPricing)) {
    pricingHtml = pricingHtml.replace(normOldPricing, normNewPricing);
    fs.writeFileSync(pricingPath, pricingHtml, 'utf8');
    console.log("2. Updated pricing.html Tier 1 with 9th point!");
} else {
    console.error("Target old list not found in pricing.html");
}

// 3 & 4. Update home-page-2.html
const home2Path = path.resolve(__dirname, '../home-page-2.html');
let home2Html = fs.readFileSync(home2Path, 'utf8');

// 3. Replace celebration section-image
if (home2Html.includes('images/pexels-4262425.jpg')) {
    home2Html = home2Html.replace(
        'images/pexels-4262425.jpg',
        'images/hero-home-ballroom-sparklers.jpg'
    );
    home2Html = home2Html.replace(
        'alt="Family and loved ones sharing an authentic, joyful milestone celebration"',
        'alt="Celebration ballroom entrance featuring dancing celebrants, illuminated cold sparkler fountains, and atmospheric cloud fog"'
    );
    console.log("3. Replaced celebration section-image in home-page-2.html with hero-home-ballroom-sparklers.jpg");
} else {
    console.error("Target pexels-4262425.jpg not found in home-page-2.html");
}

// 4. Replace Garden romance card image
if (home2Html.includes('images/pexels-30374945.jpg')) {
    home2Html = home2Html.replace(
        'images/pexels-30374945.jpg',
        'images/garden-arch.jpg'
    );
    home2Html = home2Html.replace(
        'alt="Romantic outdoor garden reception setting illuminated by sunset fairy lights"',
        'alt="Lush outdoor garden walkway and celebration floral arch framed by greenery and botanical details"'
    );
    console.log("4. Replaced Garden romance image in home-page-2.html with garden-arch.jpg");
} else {
    console.error("Target pexels-30374945.jpg not found in home-page-2.html");
}

fs.writeFileSync(home2Path, home2Html, 'utf8');
console.log("All updates completed successfully!");

