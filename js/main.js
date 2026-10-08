const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");

if (navbar && menuToggle) {
    const setMenuState = (isOpen) => {
        navbar.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        menuToggle.textContent = isOpen ? "×" : "☰";
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

if (themeToggle && themeIcon) {
    const setTheme = (darkModeOn) => {
        document.body.classList.toggle("dark-mode", darkModeOn);
        themeToggle.setAttribute("aria-pressed", String(darkModeOn));
        themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light theme" : "Switch to dark theme");
        themeToggle.title = `Current theme: ${darkModeOn ? "dark" : "light"}. Click to switch.`;
        themeIcon.textContent = darkModeOn ? "☾" : "☀";
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
