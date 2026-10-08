const navbar = document.querySelector(".navbar");
const locationMapContainer = document.getElementById("hosurLocationMap");
if (locationMapContainer && window.L) {
    const hosurCoordinates = [12.7409, 77.8253];
    const locationMap = window.L.map(locationMapContainer, {
        scrollWheelZoom: false,
        zoomControl: true
    }).setView(hosurCoordinates, 14);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(locationMap);

    const googleMapsLocationUrl = "https://www.google.com/maps/search/?api=1&query=12.7409%2C77.8253";
    window.L.marker(hosurCoordinates, {
        title: "Open Hosur in Google Maps",
        alt: "Hosur location pin; activate to open Google Maps",
        keyboard: true
    }).addTo(locationMap).on("click", () => window.location.assign(googleMapsLocationUrl));
}
const menuToggle = document.getElementById("menuToggle");
const menuOpenIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>`;
const menuCloseIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 5 14 14M19 5 5 19"></path></svg>`;

const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
    const updateHeroHeaderHeight = () => {
        document.documentElement.style.setProperty(
            "--site-header-height",
            `${Math.ceil(siteHeader.getBoundingClientRect().height)}px`
        );
    };

    updateHeroHeaderHeight();
    if ("ResizeObserver" in window) {
        new ResizeObserver(updateHeroHeaderHeight).observe(siteHeader);
    } else {
        window.addEventListener("resize", updateHeroHeaderHeight);
    }
}

if (navbar && menuToggle) {
    const setMenuState = (isOpen) => {
        navbar.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        menuToggle.innerHTML = isOpen ? menuCloseIcon : menuOpenIcon;
    };

    menuToggle.addEventListener("click", () => setMenuState(!navbar.classList.contains("is-open")));
    navbar.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => setMenuState(false)));
}

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
let savedTheme = null;

try {
    savedTheme = localStorage.getItem("eventPlannerTheme");
} catch (error) {
    // Use the light theme if browser storage is unavailable.
}

if (savedTheme === "dark") document.body.classList.add("dark-mode");

const sunThemeIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>
    </svg>`;

const moonThemeIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.8 14.2A8.7 8.7 0 0 1 9.8 3.2 8.8 8.8 0 1 0 20.8 14.2Z"></path>
    </svg>`;

if (themeToggle && themeIcon) {
    const setTheme = (darkModeOn) => {
        document.body.classList.toggle("dark-mode", darkModeOn);
        themeToggle.setAttribute("aria-pressed", String(darkModeOn));
        themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light theme" : "Switch to dark theme");
        themeToggle.title = `Current theme: ${darkModeOn ? "dark" : "light"}. Click to switch.`;
        themeIcon.innerHTML = darkModeOn ? moonThemeIcon : sunThemeIcon;
    };

    setTheme(savedTheme === "dark");

    themeToggle.addEventListener("click", () => {
        const darkModeOn = !document.body.classList.contains("dark-mode");
        setTheme(darkModeOn);
        try {
            localStorage.setItem("eventPlannerTheme", darkModeOn ? "dark" : "light");
        } catch (error) {
            // Keep the current page theme even if browser storage is unavailable.
        }
    });
}

const directionToggle = document.getElementById("directionToggle");
let savedDirection = null;

try {
    savedDirection = localStorage.getItem("eventPlannerDirection");
} catch (error) {
    // Keep the document's default direction if browser storage is unavailable.
}

const initialRtl = savedDirection === null
    ? document.documentElement.dir === "rtl"
    : savedDirection === "rtl";

document.documentElement.dir = initialRtl ? "rtl" : "ltr";

if (directionToggle) {
    const updateDirectionButton = (rtlOn) => {
        directionToggle.textContent = rtlOn ? "RTL" : "LTR";
        directionToggle.setAttribute("aria-pressed", String(rtlOn));
        directionToggle.setAttribute(
            "aria-label",
            rtlOn
                ? "Switch to left-to-right direction"
                : "Switch to right-to-left direction"
        );
    };

    updateDirectionButton(initialRtl);

    directionToggle.addEventListener("click", () => {
        const rtlOn = document.documentElement.dir !== "rtl";
        document.documentElement.dir = rtlOn ? "rtl" : "ltr";
        updateDirectionButton(rtlOn);
        try {
            localStorage.setItem("eventPlannerDirection", rtlOn ? "rtl" : "ltr");
        } catch (error) {
            // Keep the current page direction if browser storage is unavailable.
        }
    });
}

document.querySelectorAll(".demo-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const confirmation = form.querySelector(".form-confirmation");
        if (confirmation) confirmation.hidden = false;
        form.reset();
    });
});

const eyeIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>`;

const crossedEyeIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M3 3 21 21"></path>
    </svg>`;

document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
    const inputId = toggle.getAttribute("aria-controls");
    const passwordInput = document.getElementById(inputId);
    if (!passwordInput) return;

    toggle.innerHTML = eyeIcon;
    toggle.setAttribute("aria-label", "Show password");
    toggle.setAttribute("aria-pressed", "false");

    toggle.addEventListener("click", () => {
        const passwordIsHidden = passwordInput.type === "password";
        passwordInput.type = passwordIsHidden ? "text" : "password";
        toggle.innerHTML = passwordIsHidden ? crossedEyeIcon : eyeIcon;
        toggle.setAttribute("aria-label", passwordIsHidden ? "Hide password" : "Show password");
        toggle.setAttribute("aria-pressed", String(passwordIsHidden));
    });
});

/* Dashboard sections stay in this document; navigation and quick actions only switch panels. */
document.querySelectorAll(".dashboard-app").forEach((app) => {
    const navButtons = Array.from(app.querySelectorAll("[data-dashboard-view]"));
    const panels = Array.from(app.querySelectorAll("[data-dashboard-panel]"));
    const search = app.querySelector("[data-dashboard-search]");
    const emptySearch = app.querySelector(".dashboard-empty-search");
    const title = app.querySelector("#dashboard-title");
    const kicker = app.querySelector("#dashboard-kicker");
    const description = app.querySelector("#dashboard-description");

    const filterCurrentPanel = () => {
        const activePanel = panels.find((panel) => !panel.hidden);
        const query = search?.value.trim().toLocaleLowerCase() || "";
        if (!activePanel) return;
        const searchableItems = Array.from(activePanel.querySelectorAll("[data-search-text]"));
        let visibleItems = 0;

        searchableItems.forEach((item) => {
            const content = `${item.dataset.searchText || ""} ${item.textContent || ""}`.toLocaleLowerCase();
            const matches = !query || content.includes(query);
            item.hidden = !matches;
            if (matches) visibleItems += 1;
        });

        if (emptySearch) emptySearch.hidden = !(query && searchableItems.length > 0 && visibleItems === 0);
    };

    const showView = (viewName) => {
        const panel = panels.find((item) => item.dataset.dashboardPanel === viewName);
        if (!panel) return;
        panels.forEach((item) => { item.hidden = item !== panel; });

        const activeButton = navButtons.find((button) => button.dataset.dashboardView === viewName);
        navButtons.forEach((button) => {
            const isActive = button === activeButton;
            button.classList.toggle("is-active", isActive);
            if (isActive) button.setAttribute("aria-current", "page");
            else button.removeAttribute("aria-current");
        });

        if (activeButton) {
            if (title) title.textContent = activeButton.dataset.viewTitle || activeButton.textContent.trim();
            if (kicker) kicker.textContent = activeButton.dataset.viewKicker || "DASHBOARD";
            if (description) description.textContent = activeButton.dataset.viewDescription || "";
        }
        filterCurrentPanel();
    };

    const drawerToggle = app.querySelector("[data-dashboard-menu-toggle]");
    const drawerBackdrop = app.querySelector("[data-dashboard-menu-close]");
    const sidebar = app.querySelector(".dashboard-sidebar");
    const workspace = app.querySelector(".dashboard-workspace");
    const mobileDashboard = window.matchMedia("(max-width: 800px)");
    const dashboardMenuIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
    const dashboardCloseIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>`;
    const setDrawerOpen = (requestedOpen) => {
        const isMobile = mobileDashboard.matches;
        const isOpen = isMobile && requestedOpen;
        app.classList.toggle("is-menu-open", isOpen);
        document.body.classList.toggle("dashboard-menu-open", isOpen);
        if (drawerToggle) {
            drawerToggle.innerHTML = isOpen ? dashboardCloseIcon : dashboardMenuIcon;
            drawerToggle.setAttribute("aria-expanded", String(isOpen));
            drawerToggle.setAttribute("aria-label", isOpen ? "Close dashboard menu" : "Open dashboard menu");
        }
        if (sidebar) {
            sidebar.inert = isMobile && !isOpen;
            if (isMobile) sidebar.setAttribute("aria-hidden", String(!isOpen));
            else sidebar.removeAttribute("aria-hidden");
        }
        if (workspace) {
            workspace.inert = isOpen;
            if (isOpen) workspace.setAttribute("aria-hidden", "true");
            else workspace.removeAttribute("aria-hidden");
        }
        if (drawerBackdrop) drawerBackdrop.setAttribute("aria-hidden", String(!isOpen));
    };

    setDrawerOpen(false);
    drawerToggle?.addEventListener("click", () => {
        const opening = !app.classList.contains("is-menu-open");
        setDrawerOpen(opening);
        if (opening) navButtons.find((button) => button.classList.contains("is-active"))?.focus();
    });
    drawerBackdrop?.addEventListener("click", () => {
        setDrawerOpen(false);
        drawerToggle?.focus();
    });
    window.addEventListener("keydown", (event) => {
        if (!app.classList.contains("is-menu-open") || !sidebar) return;
        if (event.key === "Escape") {
            setDrawerOpen(false);
            drawerToggle?.focus();
            return;
        }
        if (event.key !== "Tab") return;
        const focusableItems = Array.from(sidebar.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'));
        if (!focusableItems.length) return;
        const firstItem = focusableItems[0];
        const lastItem = focusableItems[focusableItems.length - 1];
        if (event.shiftKey && document.activeElement === firstItem) {
            event.preventDefault();
            lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
            event.preventDefault();
            firstItem.focus();
        }
    });
    mobileDashboard.addEventListener?.("change", (event) => {
        if (!event.matches) setDrawerOpen(false);
        else setDrawerOpen(false);
    });

    app.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-dashboard-view], [data-open-dashboard-view]");
        if (!trigger || !app.contains(trigger)) return;
        const viewName = trigger.dataset.dashboardView || trigger.dataset.openDashboardView;
        if (viewName) {
            showView(viewName);
            if (trigger.hasAttribute("data-dashboard-view") && mobileDashboard.matches && app.classList.contains("is-menu-open")) {
                setDrawerOpen(false);
                drawerToggle?.focus();
            }
        }
    });

    search?.addEventListener("input", filterCurrentPanel);
    const settingsPageKey = document.body.dataset.page || "dashboard";
    app.querySelectorAll("[data-dashboard-settings]").forEach((form, index) => {
        const storageKey = `eventPlannerDashboardSettings:${settingsPageKey}:${index}`;
        try {
            const savedValues = JSON.parse(localStorage.getItem(storageKey) || "{}");
            Array.from(form.elements).filter((control) => control.name).forEach((control) => {
                if (!Object.prototype.hasOwnProperty.call(savedValues, control.name)) return;
                if (control.type === "checkbox") control.checked = Boolean(savedValues[control.name]);
                else control.value = savedValues[control.name];
            });
        } catch (error) {
            // Keep the default values if browser storage is unavailable or invalid.
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const values = Object.fromEntries(
                Array.from(form.elements)
                    .filter((control) => control.name)
                    .map((control) => [control.name, control.type === "checkbox" ? control.checked : control.value])
            );
            const confirmation = form.querySelector(".settings-saved");
            try {
                localStorage.setItem(storageKey, JSON.stringify(values));
                if (confirmation) confirmation.hidden = false;
            } catch (error) {
                if (confirmation) {
                    confirmation.textContent = "Browser storage is unavailable, so these settings could not be saved.";
                    confirmation.hidden = false;
                }
            }
        });
    });
    app.querySelectorAll("[data-dashboard-message-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const confirmation = form.querySelector("[data-message-status]");
            if (confirmation) confirmation.hidden = false;
            form.reset();
        });
    });

    showView("overview");
});
