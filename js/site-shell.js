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
                <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mainNavigation">☰</button>
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
                        <span class="theme-toggle-circle"></span><span class="theme-icon" aria-hidden="true">☀</span>
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
