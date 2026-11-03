// Test wrapping simulator
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

const p1 = "Cascading wisteria floral arches, live harpist entrance, a customized eight-couple court waltz, candlelit courtyard seating, and an artisan blush dessert bar.";
const p2 = "A classic royal blue and gold affair honoring traditional Catholic mass coordination, coronation tiara blessing, shoe change ritual, and a bilingual DJ set.";
const p3 = "Metropolitan chic aesthetic featuring ambient candlelit lounge seating, an interactive mirror photo booth, curated mocktail bar, and a sparkler send-off finale.";

for (const charsPerLine of [38, 40, 42, 44]) {
    console.log(`\n=== Chars per line: ${charsPerLine} ===`);
    const l1 = simulateWrap(p1, charsPerLine);
    const l2 = simulateWrap(p2, charsPerLine);
    const l3 = simulateWrap(p3, charsPerLine);
    console.log(`P1 (${l1.length} lines):`, l1);
    console.log(`P2 (${l2.length} lines):`, l2);
    console.log(`P3 (${l3.length} lines):`, l3);
}

