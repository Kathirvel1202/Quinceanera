const fs = require('fs');
const path = require('path');

// 1. Update about.html
const aboutPath = path.resolve(__dirname, '../about.html');
let aboutHtml = fs.readFileSync(aboutPath, 'utf8');

const oldCardsBlock = `            <div class="card-grid">
                <article class="card photo-card">
                    <img src="images/pexels-34982743.jpg" alt="Sofia's Enchanted Garden Quinceañera celebration at Rosewood Conservatory">
                    <div class="photo-card-copy">
                        <span class="tag">QUINCEAÑERA · 180 GUESTS</span>
                        <h3>Sofia's Enchanted Garden Gala</h3>
                        <p class="article-meta">Rosewood Conservatory · Full-Service Production</p>
                        <p>Cascading wisteria floral arches, live harpist entrance, a customized 8-couple court waltz, and an artisan blush dessert bar.</p>
                    </div>
                </article>
                <article class="card photo-card featured-card">
                    <img src="images/pexels-30372338.jpg" alt="Valentina's Royal Heritage Quinceañera grand ballroom celebration with vibrant dance and coronation tiara">
                    <div class="photo-card-copy">
                        <span class="tag">QUINCEAÑERA · 220 GUESTS</span>
                        <h3>Valentina's Royal Heritage Ballroom</h3>
                        <p class="article-meta">Grand Starlight Ballroom · Complete Coordination</p>
                        <p>A classic royal blue and gold affair honoring traditional Catholic mass coordination, coronation tiara blessing, shoe change ceremony, and a high-energy bilingual DJ set.</p>
                    </div>
                </article>
                <article class="card photo-card">
                    <img src="images/pexels-7966060.jpg" alt="Camila's Modern Starlight Sweet Sixteen celebration with friends and birthday candles">
                    <div class="photo-card-copy">
                        <span class="tag">SWEET SIXTEEN · 160 GUESTS</span>
                        <h3>Camila's Modern Starlight Lounge</h3>
                        <p class="article-meta">Skyline Glasshouse · Design &amp; Timeline Direction</p>
                        <p>Metropolitan chic aesthetic featuring ambient candlelit lounge seating, an interactive mirror photo booth, custom mocktail bar, and a sparkler send-off.</p>
                    </div>
                </article>
            </div>`;

const newCardsBlock = `            <div class="card-grid">
                <article class="card photo-card">
                    <img src="images/pexels-34982743.jpg" alt="Sofia's Enchanted Garden Quinceañera celebration at Rosewood Conservatory">
                    <div class="photo-card-copy">
                        <span class="tag">QUINCEAÑERA · 180 GUESTS</span>
                        <h3>Sofia's Enchanted<br>Garden Gala</h3>
                        <p class="article-meta">Rosewood Conservatory · Full-Service Production</p>
                        <p>Cascading wisteria floral arches, live harpist entrance, a customized eight-couple court waltz, candlelit terrace seating, and an artisan blush dessert bar.</p>
                    </div>
                </article>
                <article class="card photo-card">
                    <img src="images/pexels-30372338.jpg" alt="Valentina's Royal Heritage Quinceañera grand ballroom celebration with vibrant dance and coronation tiara">
                    <div class="photo-card-copy">
                        <span class="tag">QUINCEAÑERA · 220 GUESTS</span>
                        <h3>Valentina's Royal<br>Heritage Ballroom</h3>
                        <p class="article-meta">Grand Starlight Ballroom · Complete Coordination</p>
                        <p>A classic royal blue and gold affair honoring traditional Catholic mass coordination, coronation tiara blessing, shoe change ceremony, and a high-energy bilingual DJ set.</p>
                    </div>
                </article>
                <article class="card photo-card">
                    <img src="images/pexels-7966060.jpg" alt="Camila's Modern Starlight Sweet Sixteen celebration with friends and birthday candles">
                    <div class="photo-card-copy">
                        <span class="tag">SWEET SIXTEEN · 160 GUESTS</span>
                        <h3>Camila's Modern<br>Starlight Lounge</h3>
                        <p class="article-meta">Skyline Glasshouse · Design &amp; Timeline Direction</p>
                        <p>Metropolitan chic aesthetic featuring ambient candlelit lounge seating, an interactive mirror photo booth, curated mocktail bar, and a sparkler send-off finale.</p>
                    </div>
                </article>
            </div>`;

const isCRLFAbout = aboutHtml.includes('\r\n');
const normOldAbout = isCRLFAbout ? oldCardsBlock.replace(/\r?\n/g, '\r\n') : oldCardsBlock.replace(/\r\n/g, '\n');
const normNewAbout = isCRLFAbout ? newCardsBlock.replace(/\r?\n/g, '\r\n') : newCardsBlock.replace(/\r\n/g, '\n');

if (aboutHtml.includes(normOldAbout)) {
    aboutHtml = aboutHtml.replace(normOldAbout, normNewAbout);
    fs.writeFileSync(aboutPath, aboutHtml, 'utf8');
    console.log("Updated about.html cards successfully!");
} else {
    console.error("Could not find old cards block in about.html");
    process.exit(1);
}

// 2. Update css/style.css
const cssPath = path.resolve(__dirname, '../css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldCssSnippet = `.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(20px, 2.5vw, 28px); max-width: 1180px; margin: 0 auto; }
.card-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(16px, 2.2vw, 24px); max-width: 1180px; margin: 0 auto; }
.card-grid-4 .card { display: flex; flex-direction: column; padding: clamp(20px, 2.2vw, 25px) clamp(16px, 1.8vw, 20px); }
.card-grid-4 .card .tag { align-self: flex-start; margin-bottom: 14px; }
.card-grid-4 .card h3 { margin-bottom: 10px; font-size: clamp(16px, 1.25vw, 18px); line-height: 1.25; white-space: nowrap; }
.card-grid-4 .card p { flex: 1; }
.card { padding: 25px; border: 1px solid var(--gold-border); border-radius: 20px; background: var(--white); box-shadow: var(--card-shadow); }
.photo-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; }
.photo-card > img { display: block; width: 100%; height: 190px; flex: 0 0 190px; object-fit: cover; }
.photo-card-copy { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 22px 24px 26px; }
.photo-card-copy > h3 { width: 100%; min-height: 2.4em; margin-bottom: 10px; font-size: 20px; line-height: 1.25; }
.photo-card-copy .card-link { margin-top: auto; padding-top: 14px; }`;

const newCssSnippet = `.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; gap: clamp(20px, 2.5vw, 28px); max-width: 1180px; margin: 0 auto; }
.card-grid > .card { height: 100%; display: flex; flex-direction: column; box-sizing: border-box; }
.card-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(16px, 2.2vw, 24px); max-width: 1180px; margin: 0 auto; }
.card-grid-4 .card { display: flex; flex-direction: column; padding: clamp(20px, 2.2vw, 25px) clamp(16px, 1.8vw, 20px); }
.card-grid-4 .card .tag { align-self: flex-start; margin-bottom: 14px; }
.card-grid-4 .card h3 { margin-bottom: 10px; font-size: clamp(16px, 1.25vw, 18px); line-height: 1.25; white-space: nowrap; }
.card-grid-4 .card p { flex: 1; }
.card { padding: 25px; border: 1px solid var(--gold-border); border-radius: 20px; background: var(--white); box-shadow: var(--card-shadow); }
.photo-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; height: 100%; box-sizing: border-box; }
.photo-card > img { display: block; width: 100%; height: 190px; flex: 0 0 190px; object-fit: cover; }
.photo-card-copy { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 22px 24px 26px; }
.photo-card-copy > h3 { width: 100%; min-height: 2.5em; margin-bottom: 10px; font-size: 20px; line-height: 1.25; }
.photo-card-copy > .article-meta { width: 100%; margin: 6px 0 12px; color: #6e543b; font-size: 13px; font-weight: 600; min-height: 1.3em; }
.photo-card-copy > p:not(.article-meta) { margin: 0; line-height: 1.65; flex: 1; }
.photo-card-copy .card-link { margin-top: auto; padding-top: 14px; }`;

const isCRLFCss = css.includes('\r\n');
const normOldCss = isCRLFCss ? oldCssSnippet.replace(/\r?\n/g, '\r\n') : oldCssSnippet.replace(/\r\n/g, '\n');
const normNewCss = isCRLFCss ? newCssSnippet.replace(/\r?\n/g, '\r\n') : newCssSnippet.replace(/\r\n/g, '\n');

if (css.includes(normOldCss)) {
    css = css.replace(normOldCss, normNewCss);
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log("Updated css/style.css successfully!");
} else {
    console.error("Could not find old css snippet in css/style.css");
    process.exit(1);
}

