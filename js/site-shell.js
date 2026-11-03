const headerSlot = document.getElementById("siteHeader");
const footerSlot = document.getElementById("siteFooter");

if (headerSlot) {
    headerSlot.innerHTML = `
        <header class="site-header">
            <nav class="navbar" aria-label="Main navigation">
                <a href="index.html" class="brand">
                    <img src="images/QS.png" alt="Quinceañera event planner logo" class="brand-logo">
                    <span class="brand-name">Quinceañera<br>Sweet Sixteen</span>
                </a>
                <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mainNavigation"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18M3 12h18M3 18h18"></path></svg></button>
                <div class="nav-links" id="mainNavigation">
                    <details class="nav-dropdown">
                        <summary class="nav-link">Home</summary>
                        <div class="dropdown-menu">
                            <a class="dropdown-link" href="index.html">Home Page 1</a>
                            <a class="dropdown-link" href="home-page-2.html">Home Page 2</a>
                        </div>
                    </details>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="pricing.html" class="nav-link">Pricing</a>
                    <a href="blog.html" class="nav-link">Blog</a>
                    <a href="faq.html" class="nav-link">FAQ</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <details class="nav-dropdown">
                        <summary class="nav-link">Dashboard</summary>
                        <div class="dropdown-menu">
                            <a class="dropdown-link" href="user-dashboard.html">User Dashboard</a>
                            <a class="dropdown-link" href="admin-dashboard.html">Admin Dashboard</a>
                        </div>
                    </details>
                </div>
                <div class="nav-actions">
                    <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark theme" aria-pressed="false">
                        <span class="theme-toggle-circle"></span><span class="theme-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg></span>
                    </button>
                    <button class="language-btn" id="directionToggle" type="button" aria-label="Switch to right-to-left direction" aria-pressed="false">LTR</button>
                    <span class="nav-divider" aria-hidden="true"></span>
                    <a href="login.html" class="login-btn">Login</a>
                </div>
            </nav>
        </header>`;
}

if (footerSlot) {
    footerSlot.innerHTML = `
        <footer class="site-footer" id="contact">
            <div class="footer-main">
                <div class="footer-brand">
                    <a href="index.html" class="footer-brand-link">
                        <img src="images/QS.png" alt="Event planner logo" class="footer-logo">
                        <span>Quinceañera<br>Sweet Sixteen</span>
                    </a>
                    <p>Celebrations shaped around your style, traditions, and priorities.</p>
                    <div class="footer-social-links" aria-label="Social media channels">
                        <a href="https://www.instagram.com/accounts/login/" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram - Log in or view profile" title="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://x.com/i/flow/login" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter) - Log in or view profile" title="X">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                        <a href="https://web.whatsapp.com/" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp - Open WhatsApp Web" title="WhatsApp">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                        </a>
                        <a href="https://www.facebook.com/login/" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook - Log in or view profile" title="Facebook">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                        </a>
                    </div>
                </div>
                <nav class="footer-links" aria-label="Footer navigation">
                    <h2>Explore</h2><a href="services.html">Services</a><a href="blog.html">Celebration ideas</a><a href="about.html">Our approach</a>
                </nav>
                <div class="footer-links">
                    <h2>Planning</h2><a href="pricing.html">Packages</a><a href="faq.html">FAQs</a><a href="contact.html">Contact us</a>
                </div>
                <div class="footer-cta">
                    <h2>Start with an idea</h2><p>Explore planning options for your celebration.</p><a href="contact.html" class="button">Plan a conversation</a>
                </div>
            </div>
            <div class="footer-bottom"><p>© 2026 Quinceañera &amp; Sweet Sixteen Event Planner</p></div>
        </footer>`;
}

const currentPage = document.body.dataset.page;
const pagePaths = {
    home: "index.html",
    home2: "home-page-2.html",
    about: "about.html",
    services: "services.html",
    pricing: "pricing.html",
    blog: "blog.html",
    faq: "faq.html",
    contact: "contact.html",
    "user-dashboard": "user-dashboard.html",
    "admin-dashboard": "admin-dashboard.html"
};
const currentLink = document.querySelector(`.nav-links a[href="${pagePaths[currentPage]}"]`);

if (currentLink) {
    currentLink.setAttribute("aria-current", "page");
    const parentDropdown = currentLink.closest(".nav-dropdown");
    if (parentDropdown) parentDropdown.querySelector("summary")?.classList.add("is-current");
    else currentLink.classList.add("active");
}

// Ensure favicon link resilience across all environments
(function ensureFavicon() {
    if (!document.querySelector("link[rel*='icon']")) {
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/x-icon";
        link.href = "favicon.ico";
        document.head.appendChild(link);
    }
})();
