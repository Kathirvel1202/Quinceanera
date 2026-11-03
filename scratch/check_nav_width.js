// Calculate navbar content width
// 1. Brand:
// Logo: 48px + 6px padding + 4px border = 58px.
// Brand gap: 12px.
// Text: "Quinceañera" (~115px), "Sweet Sixteen" (~120px)
// Brand padding: 5px 12px 5px 5px = 17px.
// Total brand = 58 + 12 + 120 + 17 = ~207px.

// 2. Nav links:
// Home (dropdown): 13*2 + 40 + 15 = 81px
// About: 13*2 + 45 = 71px
// Services: 13*2 + 65 = 91px
// Pricing: 13*2 + 55 = 81px
// Blog: 13*2 + 35 = 61px
// FAQ: 13*2 + 30 = 56px
// Contact: 13*2 + 60 = 86px
// Dashboard (dropdown): 13*2 + 80 + 15 = 121px
// Gaps between 8 links (7 gaps * 8px) = 56px
// Total nav links = 81 + 71 + 91 + 81 + 61 + 56 + 86 + 121 + 56 = 704px.

// 3. Nav actions:
// Theme toggle: 70px
// LTR button: 45px
// Divider: 1px + 16px margin = 17px
// Login btn: 24*2 + 45 = 93px
// Gaps (3 * 10px) = 30px
// Total nav actions = 70 + 45 + 17 + 93 + 30 = 255px.

// Navbar padding: 18px * 2 = 36px.
// Grid gaps: 18px * 2 = 36px.
// Total minimum content width = 207 + 704 + 255 + 36 + 36 = 1238px!

console.log("Total minimum desktop navbar content width:", 207 + 704 + 255 + 36 + 36, "px");

