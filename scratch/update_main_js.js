const fs = require('fs');
const path = require('path');

const mainJsPath = path.resolve(__dirname, '../js/main.js');
let content = fs.readFileSync(mainJsPath, 'utf8');

const oldBlock = `const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
    const updateHeroHeaderHeight = () => {
        document.documentElement.style.setProperty(
            "--site-header-height",
            \`\${Math.ceil(siteHeader.getBoundingClientRect().height)}px\`
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
}`;

const newBlock = `const siteHeader = document.querySelector(".site-header");
let closedHeaderHeight = 72;

const updateHeroHeaderHeight = () => {
    if (!siteHeader) return;
    if (navbar && navbar.classList.contains("is-open")) {
        return;
    }
    const currentHeight = Math.ceil(siteHeader.getBoundingClientRect().height);
    if (currentHeight > 0 && currentHeight <= 100) {
        closedHeaderHeight = currentHeight;
        document.documentElement.style.setProperty(
            "--site-header-height",
            \`\${closedHeaderHeight}px\`
        );
    }
};

if (siteHeader) {
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
        if (!isOpen) {
            requestAnimationFrame(updateHeroHeaderHeight);
        }
    };

    menuToggle.addEventListener("click", () => setMenuState(!navbar.classList.contains("is-open")));
    navbar.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => setMenuState(false)));
}`;

// Normalize line endings to match file
const isCRLF = content.includes('\r\n');
const normalizedOld = isCRLF ? oldBlock.replace(/\r?\n/g, '\r\n') : oldBlock.replace(/\r\n/g, '\n');
const normalizedNew = isCRLF ? newBlock.replace(/\r?\n/g, '\r\n') : newBlock.replace(/\r\n/g, '\n');

if (content.includes(normalizedOld)) {
    content = content.replace(normalizedOld, normalizedNew);
    fs.writeFileSync(mainJsPath, content, 'utf8');
    console.log("Successfully updated js/main.js!");
} else {
    console.error("Target old block not found in js/main.js");
    process.exit(1);
}

