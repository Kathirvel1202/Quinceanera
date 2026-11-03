function simulateWrap(text, maxCharsPerLine) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if (!currentLine) {
            currentLine = word;
        } else if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
}

const p1_original = "Cascading wisteria floral arches, live harpist entrance, a customized 8-couple court waltz, and an artisan blush dessert bar.";
const p2_original = "A classic royal blue and gold affair honoring traditional Catholic mass coordination, coronation tiara blessing, shoe change ceremony, and a high-energy bilingual DJ set.";
const p3_original = "Metropolitan chic aesthetic featuring ambient candlelit lounge seating, an interactive mirror photo booth, custom mocktail bar, and a sparkler send-off.";

console.log("=== ORIGINAL WITH 46 CHARS/LINE ===");
console.log("P1:", simulateWrap(p1_original, 46));
console.log("P2:", simulateWrap(p2_original, 46));
console.log("P3:", simulateWrap(p3_original, 46));

const p1_candidate = "Cascading wisteria floral arches, live harpist entrance, a customized eight-couple court waltz, candlelit terrace seating, and an artisan blush dessert bar.";
console.log("\n=== CANDIDATE P1 WITH 46 CHARS/LINE ===");
console.log("P1 candidate:", simulateWrap(p1_candidate, 46));

