// Check navbar flex / grid wrapping at different widths
// Elements:
// 1. .brand:
// .brand has padding: 5px 12px 5px 5px, border: 1px, gap: 12px
// .brand-logo is 48px + 6px padding + 4px border = 58px
// .brand-name: 2 lines "Quinceañera" and "Sweet Sixteen"
// At font 17px/1.25 Georgia: "Quinceañera" is approx 105px.
// Total .brand width = 58 + 12 + 105 + 17 + 2 = 194px.

// 2. .nav-actions:
// Theme toggle: 70px + border: 72px
// Direction toggle: ~42px
// Divider: 1px + 16px margins = 17px
// Login btn: ~85px
// Gaps (3 * 10px): 30px
// Total .nav-actions = 72 + 42 + 17 + 85 + 30 = 246px.

// 3. .navbar padding & gaps:
// padding: 6px 18px -> 36px
// gap: 18px -> 36px (2 gaps)
// Total fixed non-link space = 194 + 246 + 36 + 36 = 512px.

// 4. Available space for .nav-links:
// At navbar width 1400px: 1400 - 512 = 888px.
// At navbar width 1320px: 1320 - 512 = 808px.
// At navbar width 1280px: 1280 - 512 = 768px.
// At navbar width 1250px: 1250 - 512 = 738px.

// Let's sum the natural widths of the 8 nav links:
// Home: ~75px
// About: ~62px
// Services: ~78px
// Pricing: ~68px
// Blog: ~52px
// FAQ: ~48px
// Contact: ~72px
// Dashboard: ~105px
// Sum of 8 links without gap = 560px!
// Gaps between links: 7 gaps.
// At 8px gap: 56px. Total = 616px.
// At 10px gap: 70px. Total = 630px.

console.log("Nav links need minimum ~616px.");
console.log("At 1250px navbar width, available space is 738px (more than enough by 122px!).");
console.log("At 1320px navbar width, available space is 808px (more than enough by 192px!).");
console.log("At 1400px navbar width, available space is 888px (more than enough by 272px!).");

