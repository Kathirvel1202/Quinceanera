// Check how it looks at various screen widths
const testWidths = [1920, 1680, 1600, 1440, 1366, 1024, 768, 360];

testWidths.forEach(w => {
    let headerWidth;
    if (w > 1360) {
        headerWidth = Math.min(w * 0.90, 1380);
    } else {
        headerWidth = w * 0.92;
    }
    const sideMargin = (w - headerWidth) / 2;
    console.log(`Viewport ${w}px -> Header: ${Math.round(headerWidth)}px (margin: ${Math.round(sideMargin)}px each side)`);
});

